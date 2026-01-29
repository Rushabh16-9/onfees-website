import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    institution: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    recaptchaToken: z.string().min(1, 'reCAPTCHA token is required'),
});

// reCAPTCHA verification function (works for both v2 and v3)
async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; error?: string }> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
        console.error('RECAPTCHA_SECRET_KEY is not configured');
        return { success: false, error: 'reCAPTCHA is not configured on the server' };
    }

    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${secretKey}&response=${token}`,
        });

        const data = await response.json();

        if (!data.success) {
            console.error('reCAPTCHA verification failed:', data['error-codes']);
            return { success: false, error: 'reCAPTCHA verification failed' };
        }

        // For v3, check score. For v2, just check success
        if (data.score !== undefined && data.score < 0.5) {
            console.warn(`Low reCAPTCHA score: ${data.score}`);
            return { success: false, score: data.score, error: 'Suspicious activity detected' };
        }

        return { success: true, score: data.score };
    } catch (error) {
        console.error('Error verifying reCAPTCHA:', error);
        return { success: false, error: 'Failed to verify reCAPTCHA' };
    }
}

export async function POST(request: NextRequest) {
    try {
        // Check if API key is configured
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json(
                {
                    error: 'Email service is not configured. Please contact the administrator.',
                    details: 'Missing RESEND_API_KEY environment variable'
                },
                { status: 503 }
            );
        }

        // Parse request body
        const body = await request.json();

        // Validate form data
        const validatedData = contactFormSchema.parse(body);

        // Verify reCAPTCHA token
        const recaptchaResult = await verifyRecaptcha(validatedData.recaptchaToken);

        if (!recaptchaResult.success) {
            console.warn('reCAPTCHA verification failed:', recaptchaResult.error);
            return NextResponse.json(
                {
                    error: 'Security verification failed. Please try again.',
                    details: recaptchaResult.error
                },
                { status: 400 }
            );
        }

        console.log(`reCAPTCHA verified successfully with score: ${recaptchaResult.score}`);

        // Extract form data (excluding recaptchaToken)
        const { recaptchaToken, ...formData } = validatedData;

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Onfees Contact Form <onboarding@resend.dev>', // You'll need to update this with your verified domain
            to: ['info@onfees.com'], // Recipient email
            reply_to: formData.email,
            subject: `New Contact Form Submission from ${formData.name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Name:</strong> ${formData.name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${formData.email}</p>
                        ${formData.phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${formData.phone}</p>` : ''}
                        ${formData.institution ? `<p style="margin: 10px 0;"><strong>Institution:</strong> ${formData.institution}</p>` : ''}
                    </div>
                    
                    <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
                        <p style="margin: 0;"><strong>Message:</strong></p>
                        <p style="margin: 10px 0; white-space: pre-wrap;">${formData.message}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                        <p>This email was sent from the Onfees contact form.</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Your message has been sent successfully! We will get back to you soon.',
                emailId: data?.id
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);

        // Handle validation errors
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    error: 'Invalid form data',
                    details: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
                },
                { status: 400 }
            );
        }

        // Handle other errors
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(1, 'Phone is required'),
    institution: z.string().min(1, 'Institution name is required'),
    message: z.string().optional(),
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
        // Block direct cURL requests
        const userAgent = request.headers.get('user-agent') || '';
        if (userAgent.toLowerCase().includes('curl')) {
            return NextResponse.json(
                { error: 'Direct cURL requests are not allowed.' },
                { status: 403 }
            );
        }

        // Check referer
        const referer = request.headers.get('referer') || '';
        const host = request.headers.get('host') || '';
        const expectedDomain = 'onfees.com';

        // Allow localhost for development
        if (!host.includes('localhost') && !referer.includes(expectedDomain) && !host.includes(expectedDomain)) {
            return NextResponse.json(
                { error: 'Form submission is not allowed from this source.' },
                { status: 403 }
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

        // Create nodemailer transporter with Gmail SMTP (exactly as PHP code)
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // SSL
            auth: {
                user: 'info.onfees@gmail.com',
                pass: process.env.SMTP_PASSWORD || 'fnwgwfrraykctcbn',
            },
        });

        // Email content (matching PHP format)
        const emailHtml = `
            <h3>
                Name: ${formData.name}<br>
                Email: ${formData.email}<br>
                Institute Name: ${formData.institution}<br>
                Phone: ${formData.phone}<br>
                Message: ${formData.message || 'No message provided'}
            </h3>
        `;

        // Send email
        const info = await transporter.sendMail({
            from: 'info.onfees@gmail.com', // Same as PHP code
            to: ['shahrushabh598@gmail.com'],
            subject: 'Email From OnFees Contact Form',
            html: emailHtml,
            replyTo: formData.email,
        });

        console.log('Email sent successfully:', info.messageId);

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for contacting us. We will contact you soon.',
                emailId: info.messageId
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);

        // Log detailed error information
        if (error instanceof Error) {
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }

        // Handle validation errors
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    error: 'Please fill all the fields. Try again...!',
                    details: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
                },
                { status: 400 }
            );
        }

        // Handle SMTP errors specifically
        if (error instanceof Error && error.message.includes('SMTP')) {
            return NextResponse.json(
                {
                    error: 'Email service error. Please contact support.',
                    details: error.message
                },
                { status: 500 }
            );
        }

        // Handle other errors
        return NextResponse.json(
            {
                error: 'Something went wrong. Please try again...!',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}

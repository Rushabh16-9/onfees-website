'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Mail, Send, Shield } from 'lucide-react';

export default function ContactPage() {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        institution: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Get reCAPTCHA token
        const recaptchaToken = recaptchaRef.current?.getValue();

        if (!recaptchaToken) {
            setSubmitStatus({
                type: 'error',
                message: 'Please complete the reCAPTCHA verification.',
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: data.message || 'Your message has been sent successfully! We will get back to you soon.',
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    institution: '',
                    message: '',
                });
                // Reset reCAPTCHA
                recaptchaRef.current?.reset();
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Failed to send message. Please try again.',
                });
                // Reset reCAPTCHA on error
                recaptchaRef.current?.reset();
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'An unexpected error occurred. Please try again later.',
            });
            // Reset reCAPTCHA on error
            recaptchaRef.current?.reset();
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    return (
        <>
            <Header />

            <main className="pt-20">
                <Section background="gradient" className="pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">
                            <span className="text-gradient">Contact Us</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Get in touch with our team. We're here to help transform your institution.
                        </p>
                    </div>
                </Section>

                <Section background="white">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <SectionHeader
                                subtitle="Get In Touch"
                                title="Locate Us"
                                centered={false}
                            />

                            <div className="space-y-6">
                                <div className="card">
                                    <div className="flex items-start">
                                        <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mr-4">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Head Office</h3>
                                            <p className="text-gray-600">
                                                138/139, Hindustan Kohinoor Complex,<br />
                                                LBS Road, Vikhroli (W),<br />
                                                Mumbai - 400083
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="flex items-start">
                                        <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mr-4">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                                            <p className="text-gray-600">
                                                <a href="tel:+918104502268" className="hover:text-primary-600 transition-colors">
                                                    +91 8104502268
                                                </a>
                                                <br />
                                                <a href="tel:+918879702745" className="hover:text-primary-600 transition-colors">
                                                    +91 8879702745
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="flex items-start">
                                        <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mr-4">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                                            <p className="text-gray-600">
                                                <a href="mailto:info@onfees.com" className="hover:text-primary-600 transition-colors">
                                                    info@onfees.com
                                                </a>
                                                <br />
                                                <a href="mailto:sales@onfees.com" className="hover:text-primary-600 transition-colors">
                                                    sales@onfees.com
                                                </a>
                                                <br />
                                                <a href="mailto:enquiries@onfees.com" className="hover:text-primary-600 transition-colors">
                                                    enquiries@onfees.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-8">
                                <h3 className="font-semibold text-gray-900 mb-4">Find Us On Map</h3>
                                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 h-[500px]">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7598480755173!2d72.9250884649018!3d19.118188537063755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c793a20b7c0b%3A0x64cb4a60671d03ad!2sOnfees!5e0!3m2!1sen!2sin!4v1679401686822!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="card">
                                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                                            Institution Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="institution"
                                            name="institution"
                                            required
                                            value={formData.institution}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="Your institution"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="input-field resize-none"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    {/* reCAPTCHA v2 */}
                                    <div className="flex justify-center">
                                        {recaptchaSiteKey ? (
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey={recaptchaSiteKey}
                                                theme="light"
                                            />
                                        ) : (
                                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                                                <p className="font-medium">⚠️ reCAPTCHA not configured</p>
                                                <p className="mt-1">Please add NEXT_PUBLIC_RECAPTCHA_SITE_KEY to your .env.local file</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Status Message */}
                                    {submitStatus.type && (
                                        <div
                                            className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                                ? 'bg-green-50 text-green-800 border border-green-200'
                                                : 'bg-red-50 text-red-800 border border-red-200'
                                                }`}
                                        >
                                            <p className="text-sm font-medium">{submitStatus.message}</p>
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="mr-2 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>

                                    {/* reCAPTCHA Badge Info */}
                                    <div className="mt-4 flex items-start text-xs text-gray-500">
                                        <Shield className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                                        <p>
                                            This form is protected by reCAPTCHA and the Google{' '}
                                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                                Privacy Policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                                Terms of Service
                                            </a>{' '}
                                            apply.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Section>
            </main >

            <Footer />
        </>
    );
}

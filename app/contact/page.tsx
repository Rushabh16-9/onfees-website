'use client';

import { useState } from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        institution: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                                            Institution Name
                                        </label>
                                        <input
                                            type="text"
                                            id="institution"
                                            name="institution"
                                            value={formData.institution}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="Your institution"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="input-field resize-none"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    <Button type="submit" variant="primary" size="lg" className="w-full">
                                        <Send className="mr-2 w-5 h-5" />
                                        Send Message
                                    </Button>
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

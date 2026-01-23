import { Metadata } from 'next';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { UserCheck, CheckCircle, ArrowRight, Fingerprint, Clock, Smartphone, BarChart3, Bell } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Attendance Management System - Real-time Tracking & Analytics',
    description: 'Automate attendance tracking for students and staff with biometric/RFID integration, real-time reporting, and mobile accessibility.',
    keywords: ['attendance management', 'biometric attendance', 'RFID attendance', 'student tracking', 'staff attendance', 'attendance reports'],
    openGraph: {
        title: 'Attendance Management System | Onfees',
        description: 'Automate attendance tracking for students and staff with real-time reporting and analytics.',
        url: 'https://www.onfees.com/features/attendance',
    },
};

export default function AttendancePage() {
    const features = [
        {
            icon: <Fingerprint className="w-6 h-6" />,
            title: 'Biometric & RFID Integration',
            description: 'Seamlessly connect with biometric devices and RFID cards for foolproof and automated attendance marking.',
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Real-time Tracking',
            description: 'Monitor student and staff presence in real-time with instant dashboard updates and daily summaries.',
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: 'Mobile App Support',
            description: 'Allow teachers to mark attendance directly from their smartphones, even in areas with limited connectivity.',
        },
        {
            icon: <Bell className="w-6 h-6" />,
            title: 'Automated Notifications',
            description: 'Send instant SMS or app alerts to parents when a student is absent or arrives late to the institution.',
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: 'Insightful Analytics',
            description: 'Generate comprehensive reports on attendance trends, identifying patterns of absenteeism for proactive intervention.',
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: 'Leave Management',
            description: 'Integrated leave application and approval workflow for staff and students, automatically updating attendance records.',
        },
    ];

    const benefits = [
        'Eliminate manual attendance marking errors',
        'Improve student safety with instant parent alerts',
        'Save significant time for teaching and admin staff',
        'Generate 100% accurate payroll with attendance data',
        'Identify and address chronic absenteeism early',
        'Easy compliance with regulatory attendance requirements',
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <Section background="gradient" className="pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">
                            <span className="text-gradient">Attendance Management</span> Redefined
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Stop wasting time on manual rolls. Our automated attendance system tracks every entry and exit, providing real-time data and keeping parents informed instantly.
                        </p>
                        <Button variant="primary" size="lg" href="https://meetings.hubspot.com/viral-dedhiya">
                            Book a Demo
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </Section>

                {/* Key Features */}
                <Section background="white">
                    <SectionHeader
                        subtitle="Key Features"
                        title="Smart Attendance for Smart Institutions"
                        description="Comprehensive tools to automate, track, and analyze attendance across your entire organization."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card-feature">
                                <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Benefits */}
                <Section background="gray">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeader
                                subtitle="Benefits"
                                title="Why Choose Automated Attendance?"
                                description="Real-time visibility and automated communication for a safer, more efficient institution."
                                centered={false}
                            />
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card">
                            <h3 className="text-2xl font-bold mb-4">Complete Transparency</h3>
                            <p className="text-gray-600 mb-6">
                                Bridge the gap between the institution and parents. Automated alerts ensure that parents are always in the loop regarding their child's presence, fostering a culture of accountability and safety.
                            </p>
                            <div className="bg-primary-50 p-6 rounded-lg">
                                <UserCheck className="w-12 h-12 text-primary-600 mb-4" />
                                <p className="text-gray-700 font-medium">
                                    Join thousands of parents and educators who rely on our attendance system daily.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section background="gradient">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-lg mb-6">
                            Ready to Automate Your Attendance?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Let us show you how our attendance management module can save time and improve student safety at your institution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" size="lg" href="https://meetings.hubspot.com/viral-dedhiya">
                                Schedule a Demo
                            </Button>
                            <Button variant="outline" size="lg" href="/contact">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}

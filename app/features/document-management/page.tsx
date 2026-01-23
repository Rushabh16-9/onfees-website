import { Metadata } from 'next';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { FileText, CheckCircle, ArrowRight, Scan, Tag, Clock, Database, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Document Management System - Digitalize Your Institution',
    description: 'Simplify documentation by scanning, tagging, and assigning documents. Reduce paperwork and ensure easy access to all institutional records.',
    keywords: ['document management', 'digital records', 'paperless office', 'file tracking', 'institutional documentation', 'document automation'],
    openGraph: {
        title: 'Document Management System | Onfees',
        description: 'Simplify documentation by scanning, tagging, and assigning documents for all-time access.',
        url: 'https://www.onfees.com/features/document-management',
    },
};

export default function DocumentManagementPage() {
    const features = [
        {
            icon: <Scan className="w-6 h-6" />,
            title: 'Easy Scanning & Upload',
            description: 'Quickly digitalize physical documents with integrated scanning tools and easy bulk upload capabilities.',
        },
        {
            icon: <Tag className="w-6 h-6" />,
            title: 'Smart Tagging & Categorization',
            description: 'Organize documents with custom tags and categories for lightning-fast retrieval when you need them.',
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'All-Time Access',
            description: 'Access important institutional documents 24/7 from any device with secure cloud storage.',
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: 'Centralized Repository',
            description: 'Maintain a single source of truth for all student and staff records, reducing data fragmentation.',
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: 'Secure Sharing',
            description: 'Assign documents to specific employees or departments with granular permission controls.',
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: 'Paperwork Reduction',
            description: 'Drastically cut down on physical storage space and costs by moving to a fully digital workflow.',
        },
    ];

    const benefits = [
        'Instant retrieval of student and staff documents',
        'Enhanced data security and disaster recovery',
        'Significant reduction in paper and printing costs',
        'Streamlined compliance and audit processes',
        'Improved collaboration across departments',
        'Eco-friendly approach to institution management',
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <Section background="gradient" className="pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">
                            <span className="text-gradient">Document Management</span> Simplified
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Transform your institution into a paperless office. Our Document Management system allows you to scan, tag, and organize every piece of information for instant access and total security.
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
                        title="Comprehensive Digital Documentation"
                        description="Powerful tools to manage your institution's records efficiently and securely."
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
                                title="Why Go Paperless?"
                                description="Realize the efficiency gains of a fully digital document management workflow."
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
                            <h3 className="text-2xl font-bold mb-4">Future-Proof Your Records</h3>
                            <p className="text-gray-600 mb-6">
                                Physical documents are prone to damage and loss. Our digital repository ensures that your institution's history and records are preserved securely for years to come, with automated backups and encrypted access.
                            </p>
                            <div className="bg-primary-50 p-6 rounded-lg">
                                <FileText className="w-12 h-12 text-primary-600 mb-4" />
                                <p className="text-gray-700 font-medium">
                                    Transition to a more organized, secure, and efficient way of managing information today.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section background="gradient">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-lg mb-6">
                            Ready to Digitalize Your Institution?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Let us show you how our document management module can help you reduce paperwork and improve efficiency.
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

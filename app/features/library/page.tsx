import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Library, CheckCircle, ArrowRight, BookOpen, Scan, TrendingUp, Database } from 'lucide-react';

export default function LibraryPage() {
    const features = [
        {
            icon: <Scan className="w-6 h-6" />,
            title: 'RFID Integration',
            description: 'Advanced RFID technology for quick and accurate book tracking and circulation management.',
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: 'Book Cataloging',
            description: 'Comprehensive cataloging and indexing system for easy book discovery and management.',
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: 'Circulation Recording',
            description: 'Track book issues, returns, and renewals with automated reminders and fine calculations.',
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Stock Management',
            description: 'Efficient stock checking and inventory management with detailed reports.',
        },
    ];

    const capabilities = [
        'Book purchasing and acquisition',
        'Cataloging and classification',
        'Indexing and search functionality',
        'Circulation recording and tracking',
        'Stock checking and inventory',
        'Member management',
        'Fine calculation and collection',
        'Integration with LMS software',
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                <Section background="gradient" className="pt-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="heading-xl mb-6">
                                <span className="text-gradient">Library Management</span> System
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                RFID integrated advanced library management system is the most needed module in Schools & Colleges. Increase efficiency and reduce costs in operating your library with cutting-edge technology.
                            </p>
                            <Button variant="primary" size="lg" href="https://meetings.hubspot.com/viral-dedhiya">
                                Book a Demo
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                                <Library className="w-48 h-48 text-primary-600" />
                            </div>
                        </div>
                    </div>
                </Section>

                <Section background="white">
                    <SectionHeader
                        subtitle="Advanced Technology"
                        title="RFID-Enabled Library Management"
                        description="Leverage the latest technology for efficient library operations."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="card-feature">
                                <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section background="gray">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeader
                                subtitle="Complete Solution"
                                title="All Library Operations in One Place"
                                description="Manage every aspect of your library efficiently."
                                centered={false}
                            />
                            <div className="grid grid-cols-1 gap-3">
                                {capabilities.map((capability, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{capability}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="card">
                                <h4 className="font-semibold text-gray-900 mb-3">Increase Efficiency</h4>
                                <p className="text-gray-600">
                                    RFID technology enables faster book check-in/check-out, reduces manual work, and minimizes errors in library operations.
                                </p>
                            </div>
                            <div className="card">
                                <h4 className="font-semibold text-gray-900 mb-3">Reduce Costs</h4>
                                <p className="text-gray-600">
                                    Automate routine tasks, reduce manpower requirements, and optimize library operations for significant cost savings.
                                </p>
                            </div>
                            <div className="card">
                                <h4 className="font-semibold text-gray-900 mb-3">Seamless Integration</h4>
                                <p className="text-gray-600">
                                    Integrate with any LMS software without hassle, providing a unified experience for students and faculty.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section background="white">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            title="Modern Library for Modern Education"
                            description="Transform your traditional library into a smart, efficient, and user-friendly resource center."
                        />
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="card text-center">
                                <Scan className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                                <h4 className="font-semibold mb-2">RFID Tags</h4>
                                <p className="text-sm text-gray-600">Quick identification and tracking of books</p>
                            </div>
                            <div className="card text-center">
                                <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                                <h4 className="font-semibold mb-2">Digital Catalog</h4>
                                <p className="text-sm text-gray-600">Easy search and discovery of resources</p>
                            </div>
                            <div className="card text-center">
                                <TrendingUp className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                                <h4 className="font-semibold mb-2">Analytics</h4>
                                <p className="text-sm text-gray-600">Insights on usage patterns and trends</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section background="gradient">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-lg mb-6">
                            Ready to Modernize Your Library?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Discover how RFID-enabled library management can transform your institution's library operations.
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

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { GraduationCap, CheckCircle, ArrowRight, Users, FileCheck, TrendingUp, Mail, Workflow } from 'lucide-react';

export default function AdmissionPage() {
    const features = [
        {
            icon: <Workflow className="w-6 h-6" />,
            title: 'Streamlined Online Applications',
            description: 'Simplify the entire admission process with easy-to-use online application forms accessible from anywhere.',
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Merit List & Waiting List',
            description: 'Automatically generate merit lists and waiting lists based on your criteria with complete transparency.',
        },
        {
            icon: <FileCheck className="w-6 h-6" />,
            title: 'Upload Documents & Prospectus',
            description: 'Enable students to upload required documents digitally and access prospectus online.',
        },
        {
            icon: <Workflow className="w-6 h-6" />,
            title: 'Automated Workflows',
            description: 'Reduce manual intervention with automated workflows for application processing and approvals.',
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Targeted Communication',
            description: 'Send automated notifications and updates to applicants via email and SMS.',
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Data-Driven Decisions',
            description: 'Make informed decisions with comprehensive analytics and reporting on admission trends.',
        },
    ];

    const benefits = [
        'Save time and manpower with automated processes',
        'Reduce errors in data entry and processing',
        'Improve applicant experience with 24/7 accessibility',
        'Maintain complete transparency in the admission process',
        'Generate comprehensive reports for better planning',
        'Seamless integration with fee management',
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <Section background="gradient" className="pt-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="heading-xl mb-6">
                                <span className="text-gradient">Admission Management</span> Made Simple
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Streamline your entire admission process from application to enrollment. Our admission module is designed to cater to the complete admission lifecycle, simplifying it and saving valuable time and manpower.
                            </p>
                            <Button variant="primary" size="lg" href="https://meetings.hubspot.com/viral-dedhiya">
                                Book a Demo
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                                <GraduationCap className="w-48 h-48 text-primary-600" />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Key Features */}
                <Section background="white">
                    <SectionHeader
                        subtitle="Key Features"
                        title="Everything You Need for Admissions"
                        description="Comprehensive tools to manage the complete admission lifecycle efficiently."
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
                                title="Why Choose Our Admission Module?"
                                description="Transform your admission process with our comprehensive solution."
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
                            <h3 className="text-2xl font-bold mb-4">Continuous Improvement</h3>
                            <p className="text-gray-600 mb-6">
                                Our admission management system is continuously evolving based on feedback from educational institutions. We ensure that the right data is available with the respective modules and users during the entire implementation lifecycle.
                            </p>
                            <div className="bg-primary-50 p-6 rounded-lg">
                                <Users className="w-12 h-12 text-primary-600 mb-4" />
                                <p className="text-gray-700 font-medium">
                                    Join hundreds of institutions that have streamlined their admission process with Onfees.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section background="gradient">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-lg mb-6">
                            Ready to Streamline Your Admissions?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Let us show you how our admission management module can transform your institution's enrollment process.
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

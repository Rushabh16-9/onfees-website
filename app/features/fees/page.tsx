import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { CreditCard, CheckCircle, ArrowRight, Shield, BarChart3, Repeat, DollarSign, FileText, Bell } from 'lucide-react';

export default function FeesPage() {
    const features = [
        {
            icon: <Repeat className="w-6 h-6" />,
            title: 'Fee Automation and Integration',
            description: 'Automatically calculate and generate invoices with seamless integration to your accounts system.',
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: 'Diverse Payment Options',
            description: 'Accept payments through multiple channels including online payments, cards, UPI, and traditional methods.',
        },
        {
            icon: <Bell className="w-6 h-6" />,
            title: 'Transparency and Communication',
            description: 'Keep parents and students informed with automated notifications and transparent fee structures.',
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Secure and Reliable Transactions',
            description: 'Bank-grade security for all transactions with complete data protection and compliance.',
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: 'Comprehensive Reporting',
            description: 'Generate detailed reports and analytics for better financial planning and decision-making.',
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: 'Accounts Integration',
            description: 'Seamlessly integrate with your accounting system ensuring all books reflect true figures.',
        },
    ];

    const feeTypes = [
        'Admission Fees',
        'Course Fees',
        'Examination Fees',
        'Library Fees',
        'Transport Fees',
        'Hostel Fees',
        'Miscellaneous Fees',
        'Late Payment Penalties',
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <Section background="gradient" className="pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">
                            <span className="text-gradient">Fee Management</span> Simplified
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Accurately calculate and seamlessly generate invoices for all types of fees. Our fee management module ensures transparent, secure, and efficient fee collection with complete accounts integration.
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
                        title="Complete Fee Management Solution"
                        description="Everything you need to manage fee collection efficiently and transparently."
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

                {/* Fee Types */}
                <Section background="gray">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="card">
                            <h3 className="text-2xl font-bold mb-6">Manage All Fee Types</h3>
                            <p className="text-gray-600 mb-6">
                                Our fee management module handles all types of fees that educational institutions collect, ensuring accurate calculation and transparent reporting.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {feeTypes.map((type, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                                        <span className="text-sm text-gray-700">{type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <SectionHeader
                                subtitle="Benefits"
                                title="Join the #BeCashless Movement"
                                description="Transform your fee collection process with digital payments."
                                centered={false}
                            />
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Eliminate Cash Handling</p>
                                        <p className="text-gray-600">Reduce risks and errors associated with cash transactions</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Real-Time Updates</p>
                                        <p className="text-gray-600">Instant fee payment confirmation and receipt generation</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Complete Transparency</p>
                                        <p className="text-gray-600">Parents and students can view fee structure and payment history anytime</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Automated Reminders</p>
                                        <p className="text-gray-600">Reduce late payments with automated SMS and email reminders</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Section>

                {/* Regular Review */}
                <Section background="white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="heading-md mb-6">Regular Review and Improvement</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            We continuously evolve our fee management system based on changing business dynamics and regulatory requirements. Our team ensures that your fee collection process remains compliant, efficient, and user-friendly.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="card text-center">
                                <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
                                <p className="text-gray-600">Transaction Success Rate</p>
                            </div>
                            <div className="card text-center">
                                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                                <p className="text-gray-600">Payment Availability</p>
                            </div>
                            <div className="card text-center">
                                <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                                <p className="text-gray-600">Secure Transactions</p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <Section background="gradient">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-lg mb-6">
                            Ready to Go Cashless?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Transform your fee collection process with our secure, transparent, and efficient fee management solution.
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

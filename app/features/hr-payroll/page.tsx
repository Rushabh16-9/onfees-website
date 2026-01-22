import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Users, CheckCircle, ArrowRight, Calendar, DollarSign, BarChart3, Clock } from 'lucide-react';

export default function HRPayrollPage() {
    const features = [
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Attendance Tracking',
            description: 'Monitor and track attendance of teaching and non-teaching staff with automated systems.',
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: 'Holiday Management',
            description: 'Manage holidays, leaves, and time-off requests efficiently with approval workflows.',
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: 'Payroll Processing',
            description: 'Automate salary calculations, deductions, and bonus remuneration with accuracy.',
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: 'Comprehensive Reports',
            description: 'Get insightful reports with meaningful information for better decision-making.',
        },
    ];

    const capabilities = [
        'Teaching and non-teaching staff management',
        'Extra classes tracking',
        'Event organization management',
        'Salary deposits and processing',
        'Bonus and incentive management',
        'Leave and attendance records',
        'Performance tracking',
        'Document management',
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                <Section background="gradient" className="pt-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="heading-xl mb-6">
                                <span className="text-gradient">HR & Payroll</span> Management
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                People management is one of the greatest challenges of any organization. Onfees maintains stringent records of all staff activity, from attendance to salaries, ensuring comprehensive and efficient HR management.
                            </p>
                            <Button variant="primary" size="lg" href="https://meetings.hubspot.com/viral-dedhiya">
                                Book a Demo
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                                <Users className="w-48 h-48 text-primary-600" />
                            </div>
                        </div>
                    </div>
                </Section>

                <Section background="white">
                    <SectionHeader
                        subtitle="Complete HR Solution"
                        title="Safeguard Against HR Complications"
                        description="Monitor and track everything related to your staff efficiently."
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
                        <div className="card">
                            <h3 className="text-2xl font-bold mb-6">Complete Staff Management</h3>
                            <p className="text-gray-600 mb-6">
                                Onfees monitors and tracks everything, right from the attendance of teaching & non-teaching staff, to information about holidays, to extra classes, to event organization, to salaries deposited and bonus remuneration.
                            </p>
                            <div className="grid grid-cols-1 gap-3">
                                {capabilities.map((capability, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700">{capability}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <SectionHeader
                                subtitle="Benefits"
                                title="Comprehensive & Insightful Reports"
                                description="Get meaningful information for better HR decisions."
                                centered={false}
                            />
                            <div className="space-y-6">
                                <div className="card">
                                    <h4 className="font-semibold text-gray-900 mb-2">Automated Payroll</h4>
                                    <p className="text-gray-600 text-sm">Eliminate manual errors with automated salary calculations, tax deductions, and payment processing.</p>
                                </div>
                                <div className="card">
                                    <h4 className="font-semibold text-gray-900 mb-2">Real-Time Tracking</h4>
                                    <p className="text-gray-600 text-sm">Monitor staff attendance, leaves, and activities in real-time with comprehensive dashboards.</p>
                                </div>
                                <div className="card">
                                    <h4 className="font-semibold text-gray-900 mb-2">Compliance Management</h4>
                                    <p className="text-gray-600 text-sm">Stay compliant with labor laws and regulations with automated compliance tracking and reporting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section background="white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="heading-md mb-6">Streamline Your HR Operations</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            From recruitment to retirement, manage your entire staff lifecycle with our comprehensive HR & Payroll solution. Reduce administrative burden and focus on what matters most - your people.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="card text-center">
                                <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                                <p className="text-gray-600">Accurate Payroll</p>
                            </div>
                            <div className="card text-center">
                                <div className="text-4xl font-bold text-gradient mb-2">50%</div>
                                <p className="text-gray-600">Time Saved</p>
                            </div>
                            <div className="card text-center">
                                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                                <p className="text-gray-600">Access to Data</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section background="gradient">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-lg mb-6">
                            Ready to Simplify HR Management?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Discover how our HR & Payroll solution can transform your staff management.
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

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { FileText, CheckCircle, ArrowRight, ClipboardCheck, BarChart3, Calendar } from 'lucide-react';

export default function ExaminationPage() {
    const features = [
        {
            icon: <Calendar className="w-6 h-6" />,
            title: 'Pre-Examination Activities',
            description: 'Schedule exams, assign invigilators, generate hall tickets, and manage seating arrangements efficiently.',
        },
        {
            icon: <ClipboardCheck className="w-6 h-6" />,
            title: 'Real-Time Examination',
            description: 'Conduct both offline and online examinations with real-time monitoring and proctoring capabilities.',
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: 'Post-Examination Activities',
            description: 'Streamline answer sheet evaluation, marks entry, result processing, and grade card generation.',
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: 'Deep Result Analysis',
            description: 'Get comprehensive analytics on student performance, subject-wise analysis, and trend identification.',
        },
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                <Section background="gradient" className="pt-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="heading-xl mb-6">
                                <span className="text-gradient">Examination Management</span> System
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                An end-to-end solution to simplify, streamline, and manage all exam-related activities seamlessly. Designed for both offline and online examination conduction with innovative technology and deep analysis.
                            </p>
                            <Button variant="primary" size="lg" href="https://meetings.hubspot.com/viral-dedhiya">
                                Book a Demo
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                                <FileText className="w-48 h-48 text-primary-600" />
                            </div>
                        </div>
                    </div>
                </Section>

                <Section background="white">
                    <SectionHeader
                        subtitle="Complete Solution"
                        title="End-to-End Examination Management"
                        description="From planning to result publication, manage every aspect of examinations efficiently."
                    />
                    <div className="grid md:grid-cols-2 gap-8">
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

                <Section background="gray">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            title="Innovative Technology for Modern Examinations"
                            description="Our examination management software empowers faculty with the latest technology for seamless exam conduction."
                        />
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="card">
                                <h3 className="text-xl font-semibold mb-4">Offline Examinations</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Automated hall ticket generation',
                                        'Seating arrangement planning',
                                        'Invigilator assignment',
                                        'Answer sheet management',
                                        'Marks entry and verification',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-sm">
                                            <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card">
                                <h3 className="text-xl font-semibold mb-4">Online Examinations</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Secure online exam platform',
                                        'Multiple question types support',
                                        'Auto-grading capabilities',
                                        'Proctoring and monitoring',
                                        'Instant result generation',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-sm">
                                            <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section background="gradient">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-lg mb-6">
                            Ready to Modernize Your Examinations?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Discover how our examination management system can streamline your entire exam process.
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

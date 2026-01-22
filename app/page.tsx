import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Button from '@/components/ui/Button';
import Section, { SectionHeader } from '@/components/ui/Section';
import { FeatureCard } from '@/components/ui/Card';
import TestimonialCard from '@/components/ui/TestimonialCard';
import StatsDisplay from '@/components/ui/StatsDisplay';
import {
    GraduationCap,
    CreditCard,
    FileText,
    BookOpen,
    Users,
    Library,
    UserCheck,
    FolderOpen,
    ArrowRight,
    CheckCircle,
    Cpu,
    Settings,
    BarChart3,
} from 'lucide-react';

export default function Home() {
    const modules = [
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: 'Admission Management',
            description: 'Streamline online applications, generate merit lists, and automate workflows for seamless admission processes.',
            href: '/features/admission',
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: 'Fee Management',
            description: 'Automate fee collection with diverse payment options, transparent reporting, and secure transactions.',
            href: '/features/fees',
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: 'Examination Management',
            description: 'End-to-end exam solution for offline and online examinations with deep result analysis.',
            href: '/features/examination',
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: 'Learning Management System',
            description: 'Enhance virtual classroom learning with lesson planning, assignments, and seamless collaboration.',
            href: '/features/lms',
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'HR & Payroll',
            description: 'Comprehensive staff management with attendance tracking, payroll processing, and insightful reports.',
            href: '/features/hr-payroll',
        },
        {
            icon: <Library className="w-6 h-6" />,
            title: 'Library Management',
            description: 'RFID-integrated advanced library system for cataloging, circulation, and stock management.',
            href: '/features/library',
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            title: 'Attendance Management',
            description: 'Automated attendance tracking for students and staff with real-time reporting.',
            href: '/features/attendance',
        },
        {
            icon: <FolderOpen className="w-6 h-6" />,
            title: 'Document Management',
            description: 'Digitize and organize all institutional documents with easy access and reduced paperwork.',
            href: '/features/document-management',
        },
    ];

    const implementationSteps = [
        {
            title: 'Strategy',
            subtitle: 'Our Humble Beginnings',
            points: [
                'Team meetings',
                'Requirement gathering',
                'Existing hardware, software analysis',
                'Policies on site study',
                'Prioritising modules for implementation plan',
            ],
        },
        {
            title: 'Data Gathering',
            subtitle: 'Accuracy for Data',
            points: [
                'Gather Student data',
                'Staff data',
                'Library books',
                'Examination, results data',
                'Brand manual, Forms, Brochures',
            ],
        },
        {
            title: 'Platform',
            subtitle: 'Software to Full Service',
            points: [
                'Onfees - Admissions and Fees',
                'Onexams - Examination module',
                'EdFlyLearn - LMS portal',
                'Onattend - Attendance',
                'Koha - Library',
                'Onemployee - HR & Payroll',
                'And many more',
            ],
        },
        {
            title: 'Success Measurement',
            subtitle: 'Phased Implementation',
            points: [
                'Periodic Departmental feedback',
                'User usage tracking',
                'System driven, Automated reminders for tasks',
                'Module usage depth analysis',
                'Change management and tracking TAT\'s',
                'Transparent communication channel',
            ],
        },
    ];

    const testimonials = [
        {
            quote: 'Entire fee collection of Podar has been very successfully handled by OnFees. I wish them all the success for future initiatives they take.',
            author: 'Mrs. Shobana Vasudevan',
            role: 'Principal',
            institution: 'R.A. Podar College',
        },
        {
            quote: 'In keeping with the Digital Revolution in Education, \'On Fees\' has been our partner for the last five or six years. Mr. Mayur Jain the CEO of the company is extremely dedicated and committed to serving us in the best possible way.',
            author: 'Dr. Marie Fernandes',
            role: 'Principal',
            institution: 'St. Andrew\'s College',
        },
        {
            quote: 'We are associated with Onfees and all our fees online through their platform which brings a lot of transparency in fee collection. We get ready made reports of all the students, it helps us a lot as far as administrative purpose is concerned.',
            author: 'Vaishali Gurav',
            role: 'I/C Principal',
            institution: 'Adv. Balasaheb Apte College Of Law',
        },
    ];

    const stats = [
        { value: '7+', label: 'Years of Excellence' },
        { value: '50+', label: 'Institutions Served' },
        { value: '100K+', label: 'Students Managed' },
        { value: '99.9%', label: 'Uptime Guarantee' },
    ];

    const clients = [
        'DY Patil College',
        'St. Andrew\'s College',
        'Chetana\'s College',
        'Podar College',
        'Wilson College',
        'KPB Hinduja College',
        'Ruia College',
        'Bhavan\'s College',
        'Royal College',
        'St. Columba\'s School',
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <Section background="gradient" className="pt-12 lg:pt-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="heading-xl text-gray-900 mb-6">
                                Complete <span className="text-gradient">ERP Solution</span> for Educational Institutes
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Transform your institution with our comprehensive platform. Streamline admissions, fees, examinations, and more while joining the #BeCashless movement.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    href="https://meetings.hubspot.com/viral-dedhiya"
                                >
                                    Book a Free Demo
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button variant="outline" size="lg" href="/features">
                                    Explore Features
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                                <div className="text-center p-8">
                                    <GraduationCap className="w-32 h-32 text-primary-600 mx-auto mb-4" />
                                    <p className="text-lg font-semibold text-gray-700">
                                        Modern Education Management
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Stats Section */}
                <Section background="white">
                    <StatsDisplay stats={stats} />
                </Section>

                {/* What We Do */}
                <Section background="gray">
                    <SectionHeader
                        subtitle="What We Do"
                        title="Execution-Focused Implementation"
                        description="There are plenty of softwares out there, execution is where it fails. We construct executable plans that are actually implemented on a daily basis for managing your Institute."
                    />
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card text-center">
                            <Cpu className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Hardware</h3>
                            <p className="text-gray-600">
                                Integrate the required hardware on-site for drastic upgrade reducing manual work and errors.
                            </p>
                        </div>
                        <div className="card text-center">
                            <Settings className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Onfees Implementation Framework</h3>
                            <p className="text-gray-600">
                                A brief outline for aligning all tasks towards implementing software for an Institute with consistency.
                            </p>
                        </div>
                        <div className="card text-center">
                            <BarChart3 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Software</h3>
                            <p className="text-gray-600">
                                Software evolution and personalization with ever changing business dynamics is what matters.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* How We Do - Implementation Framework */}
                <Section background="white">
                    <SectionHeader
                        subtitle="How We Do"
                        title="Onfees Implementation Framework"
                        description="Our proven methodology ensures successful software implementation for your institution."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {implementationSteps.map((step, index) => (
                            <div key={index} className="card">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 font-bold text-xl mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{step.subtitle}</p>
                                <ul className="space-y-2">
                                    {step.points.map((point, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-600">
                                            <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Modules Overview */}
                <Section background="gradient">
                    <SectionHeader
                        subtitle="Our Modules"
                        title="Comprehensive ERP Modules"
                        description="Everything you need to manage your educational institution efficiently."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {modules.map((module, index) => (
                            <FeatureCard
                                key={index}
                                icon={module.icon}
                                title={module.title}
                                description={module.description}
                                href={module.href}
                            />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button variant="primary" size="lg" href="/features">
                            View All Features
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </Section>

                {/* Trusted By */}
                <Section background="white">
                    <SectionHeader
                        subtitle="Our Associations"
                        title="Trusted by Leading Institutions"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-200 hover:shadow-md transition-all"
                            >
                                <p className="text-center text-sm font-medium text-gray-700">
                                    {client}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Testimonials */}
                <Section background="gray">
                    <SectionHeader
                        subtitle="Happy Clients"
                        title="What Our Partners Say"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </Section>

                {/* Service Levels */}
                <Section background="white">
                    <SectionHeader
                        subtitle="Choose Right Service Offering"
                        title="Pricing Based on Your Needs"
                        description="Structured in a way where you get the best of ROI"
                    />
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card">
                            <h3 className="text-2xl font-bold mb-2">Service Level 1</h3>
                            <p className="text-gray-600 mb-6">
                                You have a software, IT team, implementation team but things don't seem to work.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    'Onfees Implementation framework',
                                    'GAP Analysis playbook',
                                    'Free Integrable tools',
                                    'Success Matrix playbook',
                                    'ROI measurement',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card border-2 border-primary-500 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                Popular
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Service Level 2</h3>
                            <p className="text-gray-600 mb-6">
                                You have a right software, you're looking for someone to take ownership of implementing it.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    'Everything in Level 1 +',
                                    'Hardware implementations',
                                    'Module Usage Tracking',
                                    'Requirement analysis with software teams',
                                    'Establish Transparent communication channel',
                                    'Change management and tracking TAT\'s',
                                    'Establish smooth Implementation',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card">
                            <h3 className="text-2xl font-bold mb-2">Service Level 3</h3>
                            <p className="text-gray-600 mb-6">
                                You'd like for entire successful implementation to kickstart from Day 0.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    'Everything in Level 2 +',
                                    'Module-wise strategy, set-up and implementation',
                                    'Data gathering and cleaning',
                                    'Usage improvement via task automation',
                                    'Increased student conversions via CRM',
                                    'Website management',
                                    'Brand collaterals, communication establishment',
                                    'Data, research driven implementation',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Button
                            variant="primary"
                            size="lg"
                            href="https://meetings.hubspot.com/viral-dedhiya"
                        >
                            Book a FREE Strategy Session
                        </Button>
                    </div>
                </Section>

                {/* Final CTA */}
                <Section background="gradient">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-lg mb-6">
                            Ready to Transform Your Institution?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Book a free consultation to define your institute's software implementation success strategy.
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            href="https://meetings.hubspot.com/viral-dedhiya"
                        >
                            Schedule Your Free Consultation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}

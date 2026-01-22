import Image from 'next/image';
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

    const collegeLogos = [
        { src: '/images/colleges/dy_patil.jpeg', alt: 'DY Patil College' },
        { src: '/images/colleges/chetanas.png', alt: 'Chetana\'s College' },
        { src: '/images/colleges/podar.png', alt: 'Podar College' },
        { src: '/images/colleges/kpb_hinduja.png', alt: 'KPB Hinduja College' },
        { src: '/images/colleges/bhavans.jpg', alt: 'Bhavan\'s College' },
        { src: '/images/colleges/royal.jpg', alt: 'Royal College' },
        { src: '/images/colleges/st_columba.png', alt: 'St. Columba\'s School' },
        { src: '/images/colleges/nirmala.png', alt: 'Nirmala Niketan College' },
        { src: '/images/colleges/lala.png', alt: 'Lala Lajpatrai College' },
        { src: '/images/colleges/glc.jpg', alt: 'Government Law College' },
        { src: '/images/colleges/siddharth_law.png', alt: 'Siddharth Law College' },
        { src: '/images/colleges/aissms.jpeg', alt: 'AISSMS College' },
        { src: '/images/colleges/br_harne.jpg', alt: 'BR Harne College' },
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                {/* Hero Section with Background Image */}
                <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/1page_one.png"
                            alt="Education Management"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-900/75" />
                    </div>

                    {/* Content */}
                    <div className="container-custom relative z-10 py-20">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Complete <span className="text-orange-400">ERP Solution</span> for Educational Institutes
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                                Transform your institution with our comprehensive platform. Streamline admissions, fees, examinations, and more while joining the #BeCashless movement.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    href="https://meetings.hubspot.com/viral-dedhiya"
                                    className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl"
                                >
                                    Book a Free Demo
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    href="/features"
                                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900"
                                >
                                    Explore Features
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

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
                        <div className="card text-center group hover:shadow-xl transition-all duration-300">
                            <div className="relative w-24 h-24 mx-auto mb-6">
                                <Image
                                    src="/images/hardware.png"
                                    alt="Hardware Integration"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">Hardware</h3>
                            <p className="text-gray-600">
                                Integrate the required hardware on-site for drastic upgrade reducing manual work and errors.
                            </p>
                        </div>
                        <div className="card text-center group hover:shadow-xl transition-all duration-300">
                            <div className="relative w-24 h-24 mx-auto mb-6">
                                <Image
                                    src="/images/onfees_vector.png"
                                    alt="Implementation Framework"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">Onfees Implementation Framework</h3>
                            <p className="text-gray-600">
                                A brief outline for aligning all tasks towards implementing software for an Institute with consistency.
                            </p>
                        </div>
                        <div className="card text-center group hover:shadow-xl transition-all duration-300">
                            <div className="relative w-24 h-24 mx-auto mb-6">
                                <Image
                                    src="/images/software.png"
                                    alt="Software Solutions"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">Software</h3>
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
                            <div key={index} className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white font-bold text-xl mb-4 shadow-lg">
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

                {/* Trusted By - All Logos in Full Color */}
                <Section background="white">
                    <SectionHeader
                        subtitle="Our Associations"
                        title="Trusted by Leading Institutions"
                        description="Partnering with prestigious educational institutions across India"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {collegeLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                            >
                                <div className="relative w-full h-20">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
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
                        <div className="card hover:shadow-xl transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-2">Service Level 1</h3>
                            <p className="text-gray-600 mb-6 text-sm">
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

                        <div className="card border-2 border-primary-500 relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                                Popular
                            </div>
                            <h3 className="text-2xl font-bold mb-2 mt-2">Service Level 2</h3>
                            <p className="text-gray-600 mb-6 text-sm">
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

                        <div className="card hover:shadow-xl transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-2">Service Level 3</h3>
                            <p className="text-gray-600 mb-6 text-sm">
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
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-blue-900" />
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }} />
                    </div>
                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Transform Your Institution?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8">
                                Book a free consultation to define your institute's software implementation success strategy.
                            </p>
                            <Button
                                variant="secondary"
                                size="lg"
                                href="https://meetings.hubspot.com/viral-dedhiya"
                                className="bg-orange-500 hover:bg-orange-600 text-white shadow-2xl"
                            >
                                Schedule Your Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

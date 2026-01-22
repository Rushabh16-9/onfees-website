import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import { FeatureCard } from '@/components/ui/Card';
import {
    GraduationCap,
    CreditCard,
    FileText,
    BookOpen,
    Users,
    Library,
    UserCheck,
    FolderOpen,
    MapPin,
    Bus,
    Home,
    Calendar,
    Globe,
    Award,
} from 'lucide-react';

export default function FeaturesPage() {
    const primaryModules = [
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: 'Admission Management',
            description: 'Streamline online applications, generate merit lists, upload documents and prospectus, with automated workflows and targeted communication.',
            href: '/features/admission',
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: 'Fee Management',
            description: 'Fee automation with diverse payment options, transparency in communication, secure transactions, and comprehensive reporting with accounts integration.',
            href: '/features/fees',
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: 'Examination Management',
            description: 'End-to-end solution for offline and online exam conduction with pre-examination, real-time, and post-examination activities with deep analysis.',
            href: '/features/examination',
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: 'Learning Management System',
            description: 'Optimum management tools for virtual classroom learning with lesson planning, assignments, content sharing, and seamless teacher-student collaboration.',
            href: '/features/lms',
        },
        {
            icon: <FolderOpen className="w-6 h-6" />,
            title: 'Document Management',
            description: 'Simplify documentation by scanning, tagging, and assigning documents to employees for all-time access, drastically cutting down paperwork.',
            href: '/features/document-management',
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'HR & Payroll',
            description: 'Comprehensive people management tracking attendance, holidays, extra classes, events, salaries, and bonuses with insightful reports.',
            href: '/features/hr-payroll',
        },
        {
            icon: <Library className="w-6 h-6" />,
            title: 'Library Management',
            description: 'RFID integrated advanced system for book purchasing, cataloging, indexing, circulation recording, and stock checking with LMS integration.',
            href: '/features/library',
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            title: 'Attendance Management',
            description: 'Automated attendance tracking for students and staff with real-time reporting and analytics.',
            href: '/features/attendance',
        },
    ];

    const additionalFeatures = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Visitor Management',
            description: 'Track documents and letters received/sent, visitor logs with check-in/check-out, purpose tracking, and gate pass generation.',
            href: '/features/visitor-management',
        },
        {
            icon: <Bus className="w-6 h-6" />,
            title: 'Transport Management',
            description: 'Route-wise fee collection, real-time vehicle tracking, maintenance management, and mass communication to students and staff.',
            href: '/features/transport',
        },
        {
            icon: <Home className="w-6 h-6" />,
            title: 'Hostel Management',
            description: 'Application forms, random room allotment, RFID attendance tracking, in/out monitoring, and online fee collection for hostel and canteen.',
            href: '/features/hostel',
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: 'Event Management',
            description: 'Ideal partner for synchronized event activities, transparent voting processes, schedules, and alerts for students, guests, staff, and family.',
            href: '/features/events',
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: 'Website Management',
            description: 'Professional website maintenance, security, development, content delivery, and marketing with updated browser-compatible technologies.',
            href: '/features/website-management',
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: 'OBE – Accreditation',
            description: 'Outcome-based software enabling institutions to meet NAAC, NBA guidelines, assign roles, automate assessment, and analyze reports.',
            href: '/features/obe-accreditation',
        },
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <Section background="gradient" className="pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">
                            Comprehensive <span className="text-gradient">ERP Modules</span> for Educational Institutes
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Everything you need to manage your school or college efficiently. From admissions to examinations, from fees to HR - we've got you covered.
                        </p>
                    </div>
                </Section>

                {/* Primary Modules */}
                <Section background="white">
                    <SectionHeader
                        subtitle="Core Modules"
                        title="Essential Features for Every Institution"
                        description="Our primary modules cover all critical aspects of educational institution management."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {primaryModules.map((module, index) => (
                            <FeatureCard
                                key={index}
                                icon={module.icon}
                                title={module.title}
                                description={module.description}
                                href={module.href}
                            />
                        ))}
                    </div>
                </Section>

                {/* Additional Features */}
                <Section background="gray">
                    <SectionHeader
                        subtitle="Additional Features"
                        title="Extended Capabilities"
                        description="Go beyond the basics with our comprehensive suite of additional modules."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalFeatures.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                href={feature.href}
                            />
                        ))}
                    </div>
                </Section>

                {/* Unique Value Proposition */}
                <Section background="gradient">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-lg mb-6">
                            We are special because <span className="text-gradient">you are unique!</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            We streamline the institute's operational life cycle by providing a customized solution that is designed & developed to adapt to the requirements of the client. Our highly professional technical team brings a seamless operating system to the administrative & managerial levels.
                        </p>
                        <p className="text-lg text-gray-700 font-medium">
                            It is easy to install a software & abandon. It takes special efforts & attention to implement an end-to-end solution which resolves all the complications because every institute is unique.
                        </p>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}

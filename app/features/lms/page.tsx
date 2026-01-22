import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { BookOpen, CheckCircle, ArrowRight, Video, FileText, Users, Calendar } from 'lucide-react';

export default function LMSPage() {
    const teacherFeatures = [
        'Lesson planning on prior basis',
        'Create and assign assignments',
        'Share video links and presentations',
        'Individual student guidance',
        'Track student progress',
        'Conduct virtual classes',
    ];

    const studentFeatures = [
        'Access content anytime, anywhere',
        'Interact with educators seamlessly',
        'Submit assignments online',
        'View grades and feedback',
        'Participate in discussions',
        'Download study materials',
    ];

    const instituteFeatures = [
        'Maintain student attendance records',
        'Easy access to all content',
        'Strengthen teacher-student collaboration',
        'Modern structure to education',
        'Comprehensive reporting',
        'Integration with other modules',
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                <Section background="gradient" className="pt-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="heading-xl mb-6">
                                <span className="text-gradient">Learning Management System</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Onfees LMS provides optimum management tools to enhance the overall virtual classroom learning experience. Empower teachers, engage students, and modernize your institution's education delivery.
                            </p>
                            <Button variant="primary" size="lg" href="https://meetings.hubspot.com/viral-dedhiya">
                                Book a Demo
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
                                <BookOpen className="w-48 h-48 text-primary-600" />
                            </div>
                        </div>
                    </div>
                </Section>

                <Section background="white">
                    <SectionHeader
                        subtitle="For Everyone"
                        title="Comprehensive Learning Platform"
                        description="Designed to benefit teachers, students, and institutions alike."
                    />
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card">
                            <Users className="w-12 h-12 text-primary-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">For Teachers</h3>
                            <ul className="space-y-3">
                                {teacherFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card">
                            <BookOpen className="w-12 h-12 text-primary-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">For Students</h3>
                            <ul className="space-y-3">
                                {studentFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card">
                            <Calendar className="w-12 h-12 text-primary-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">For Institutes</h3>
                            <ul className="space-y-3">
                                {instituteFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Section>

                <Section background="gray">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeader
                                subtitle="Virtual Classroom"
                                title="Seamless Learning Experience"
                                description="Create an engaging virtual learning environment."
                                centered={false}
                            />
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mr-4">
                                        <Video className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Live Virtual Classes</h4>
                                        <p className="text-gray-600">Conduct interactive live sessions with screen sharing, whiteboard, and recording capabilities.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mr-4">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Content Management</h4>
                                        <p className="text-gray-600">Organize and share study materials, presentations, videos, and documents efficiently.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mr-4">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Collaboration Tools</h4>
                                        <p className="text-gray-600">Foster better communication between teachers and students with discussion forums and messaging.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h3 className="text-2xl font-bold mb-4">Acquire Seamless Learning</h3>
                            <p className="text-gray-600 mb-6">
                                Students can interact better with educators, get access to content at all times, and acquire seamless learning experiences. Teachers can plan lessons in advance, provide individual guidance, and track student progress effectively.
                            </p>
                            <div className="bg-primary-50 p-6 rounded-lg">
                                <p className="text-gray-700 font-medium mb-4">
                                    Strengthen teacher-student collaboration and provide a modern structure to education with our comprehensive LMS platform.
                                </p>
                                <Button variant="primary" href="https://meetings.hubspot.com/viral-dedhiya">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section background="gradient">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="heading-lg mb-6">
                            Transform Your Virtual Learning
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Discover how our LMS can enhance your institution's online education delivery.
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

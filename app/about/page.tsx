import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import { Target, Eye, Heart, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

export default function AboutPage() {
    const values = [
        { icon: <CheckCircle className="w-6 h-6" />, title: 'Deliver Right Solutions', description: 'We focus on providing solutions that truly meet our clients\' needs.' },
        { icon: <Users className="w-6 h-6" />, title: 'Ownership', description: 'We take complete ownership of implementation success.' },
        { icon: <Heart className="w-6 h-6" />, title: 'Collaborate', description: 'We work closely with institutions to achieve their goals.' },
        { icon: <Award className="w-6 h-6" />, title: 'Wow Experience', description: 'We strive to exceed expectations in everything we do.' },
        { icon: <TrendingUp className="w-6 h-6" />, title: 'Keep It Simple', description: 'We believe in simplifying complex processes.' },
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                <Section background="gradient" className="pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">
                            About <span className="text-gradient">Onfees</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Transforming education management since 2017 with innovative ERP solutions for schools and colleges.
                        </p>
                    </div>
                </Section>

                <Section background="white">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeader
                                subtitle="Who We Are"
                                title="About Us"
                                centered={false}
                            />
                            <p className="text-gray-600 leading-relaxed mb-4">
                                OnFees by EasyTech Innovations Pvt Ltd founded in 2017, is a platform for educational institutes to make their fee payments online. With other solutions to make the system automated, we aim at creating the educational space digital.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We also acknowledge the need of digital awareness for education sector and build a futuristic tech advanced ecosystem. To facilitate much needed awareness, we have partnered with government agency NPCI (National Payments Corporation of India) and executed various activities, research and workshops in the institutes both digitally as well as at the ground level.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                            <p className="text-gray-600 leading-relaxed">
                                It was during the time in 2016, when demonetization hit the whole country; it created a need for the society to go cashless. While most of the sectors were already driven by digital transactions, education sector witnessed no improvements. Students still had to stand in queues & manage cash to make fee payments.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                This is when the founders saw an opportunity to have an online fee payment platform for students & parents to make their payments from anywhere anytime using digital transactions.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section background="gray">
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="card text-center">
                            <div className="p-4 rounded-full bg-primary-100 text-primary-600 w-fit mx-auto mb-4">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                            <p className="text-gray-600">
                                Be a market leader in the EdTech space providing easy solutions to customers with complete ownership.
                            </p>
                        </div>
                        <div className="card text-center">
                            <div className="p-4 rounded-full bg-primary-100 text-primary-600 w-fit mx-auto mb-4">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                            <p className="text-gray-600">
                                Our mission is to successfully deliver EdTech solutions for customers giving them easy access to administrative information.
                            </p>
                        </div>
                        <div className="card text-center">
                            <div className="p-4 rounded-full bg-primary-100 text-primary-600 w-fit mx-auto mb-4">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                            <p className="text-gray-600">
                                Guided by principles of excellence, collaboration, and customer-centricity in everything we do.
                            </p>
                        </div>
                    </div>

                    <SectionHeader
                        subtitle="Core Values"
                        title="What Drives Us"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="card text-center">
                                <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mx-auto mb-3">
                                    {value.icon}
                                </div>
                                <h4 className="font-semibold mb-2">{value.title}</h4>
                                <p className="text-sm text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section background="white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="heading-md mb-6">Extraordinary Talent, Extraordinary Results</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            An experience like OnFees could never be produced by ordinary individuals. Our team brings together familiarity with practical scenarios at schools and colleges, in-depth understanding of educational processes, tech expertise to simplify complex fee methods, and dedication to improving the fee payment experience every day.
                        </p>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}

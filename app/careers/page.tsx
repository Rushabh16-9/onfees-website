import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import { Briefcase, TrendingUp, Users, Zap } from 'lucide-react';

export default function CareersPage() {
    const benefits = [
        { icon: <TrendingUp className="w-6 h-6" />, title: 'Growth Opportunities', description: 'Continuous learning and career advancement' },
        { icon: <Users className="w-6 h-6" />, title: 'Collaborative Culture', description: 'Work with passionate and talented individuals' },
        { icon: <Zap className="w-6 h-6" />, title: 'Innovation Focus', description: 'Be part of groundbreaking EdTech solutions' },
        { icon: <Briefcase className="w-6 h-6" />, title: 'Impactful Work', description: 'Transform education for thousands of students' },
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                <Section background="gradient" className="pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">
                            <span className="text-gradient">Careers</span> at Onfees
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Join the team that's revolutionizing education management in India.
                        </p>
                    </div>
                </Section>

                <Section background="white">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            subtitle="Join The Team"
                            title="Be Part of Something Big"
                        />
                        <div className="card mb-8">
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                You enjoy a challenge? You have a thirst for knowledge and desire to be one of the best. With a job at OnFees translate it into career fulfillment and you will know the real benefits of joining a company of people that is constantly innovating to inspire ground breaking results.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Because whatever your job profile is here, you'll be part of something big.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="card-feature">
                                    <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="card bg-gradient-to-br from-primary-50 to-accent-50 text-center">
                            <Briefcase className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Interested in Joining Us?</h3>
                            <p className="text-gray-600 mb-6">
                                Send your resume and cover letter to start your journey with Onfees.
                            </p>
                            <a
                                href="mailto:enquiries@onfees.com"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                            >
                                Email: enquiries@onfees.com
                            </a>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}

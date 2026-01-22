import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import { BookOpen, Calendar, User } from 'lucide-react';

export default function BlogPage() {
    const blogPosts = [
        {
            title: 'The Future of Education Management',
            excerpt: 'Exploring how technology is transforming the way educational institutions operate.',
            author: 'Onfees Team',
            date: '2024',
            category: 'Technology',
        },
        {
            title: 'Going Cashless: A Guide for Educational Institutions',
            excerpt: 'Step-by-step guide to implementing digital payment systems in schools and colleges.',
            author: 'Onfees Team',
            date: '2024',
            category: 'Digital Transformation',
        },
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                <Section background="gradient" className="pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">
                            <span className="text-gradient">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Insights, tips, and updates from the world of education technology.
                        </p>
                    </div>
                </Section>

                <Section background="white">
                    <SectionHeader
                        subtitle="Latest Posts"
                        title="Recent Articles"
                    />
                    <div className="grid md:grid-cols-2 gap-8">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="card-feature">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <User className="w-4 h-4 mr-2" />
                                    <span>{post.author}</span>
                                    <span className="mx-2">•</span>
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded-full mb-3">
                                    {post.category}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <a href="#" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                                    Read more →
                                </a>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section background="gray">
                    <div className="max-w-3xl mx-auto text-center">
                        <BookOpen className="w-16 h-16 text-primary-600 mx-auto mb-6" />
                        <h2 className="heading-md mb-4">Subscribe to Our Blog</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Get the latest insights and updates delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input-field flex-1"
                            />
                            <button className="btn-primary whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}

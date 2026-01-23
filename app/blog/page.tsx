import { Metadata } from 'next';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog - Education ERP Insights & Best Practices',
    description: 'Read the latest articles about education ERP, digital transformation, fee management, and best practices for educational institutions.',
    keywords: ['education blog', 'ERP insights', 'digital transformation', 'education technology', 'best practices', 'school management'],
    openGraph: {
        title: 'Blog - Education ERP Insights | Onfees',
        description: 'Latest articles about education ERP and digital transformation.',
        url: 'https://www.onfees.com/blog',
    },
};

export default function BlogPage() {
    const blogPosts = [
        {
            title: 'Way to choosing right ERP Vendor!',
            excerpt: 'Discover the essential factors to consider when selecting the perfect ERP vendor for your educational institution.',
            href: 'https://onfees.com/blogs/way-to-choosing-right-erp-vendor/',
            category: 'ERP Selection',
        },
        {
            title: 'The Peril of Missed Deadlines: How Streamlined Communication Boosts Admissions',
            excerpt: 'Learn how effective communication strategies can prevent missed deadlines and improve your admission process.',
            href: 'https://onfees.com/blogs/the-peril-of-missed-deadlines-how-streamlined-communication-boosts-admissions/',
            category: 'Admissions',
        },
        {
            title: 'Survive an ERP failure!',
            excerpt: 'Essential strategies and best practices to recover from and prevent ERP implementation failures.',
            href: 'https://onfees.com/blogs/survive-an-erp-failure/',
            category: 'ERP Implementation',
        },
        {
            title: 'Revolutionizing Education: How a Library Management System Empowers Your Institute',
            excerpt: 'Explore how modern library management systems are transforming educational institutions and empowering students.',
            href: 'https://onfees.com/blogs/revolutionizing-education-how-a-library-management-system-empowers-your-institute/',
            category: 'Library Management',
        },
        {
            title: 'Importance of Patterns and Analytics to Drive Admissions',
            excerpt: 'Understand how data patterns and analytics can significantly improve your institution\'s admission strategy.',
            href: 'https://onfees.com/blogs/importance-of-patterns-and-analytics-to-drive-admissions/',
            category: 'Analytics',
        },
        {
            title: 'Choosing an ERP, Check for the Right Fit',
            excerpt: 'Key considerations and checklist items to ensure your ERP system is the perfect fit for your institution.',
            href: 'https://onfees.com/blogs/choosing-an-erp-check-for-the-right-fit/',
            category: 'ERP Selection',
        },
        {
            title: 'Building an A+ Website for Your Educational Institution: Tips and Tricks',
            excerpt: 'Professional tips and best practices for creating an outstanding website for your school or college.',
            href: 'https://onfees.com/blogs/building-an-a-website-for-your-educational-institution-tips-and-tricks/',
            category: 'Web Development',
        },
        {
            title: '2 Biggest Hurdles in an ERP Implementation',
            excerpt: 'Identify and overcome the two most common challenges faced during ERP implementation in educational institutions.',
            href: 'https://onfees.com/blogs/2-biggest-hurdles-in-an-erp-implementation/',
            category: 'ERP Implementation',
        },
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                <Section background="gradient" className="pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">
                            <span className="text-gradient">Blogs</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Insights, tips, and updates from the world of education technology and ERP solutions.
                        </p>
                    </div>
                </Section>

                <Section background="white">
                    <SectionHeader
                        subtitle="Latest Posts"
                        title="Recent Articles"
                        description="Stay informed with our latest insights on educational technology, ERP systems, and institutional management."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="card group hover:shadow-xl transition-shadow duration-300">
                                <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded-full mb-4">
                                    {post.category}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                                <Link
                                    href={post.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group-hover:translate-x-1 transition-transform"
                                >
                                    Read More
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section background="gray">
                    <div className="max-w-3xl mx-auto text-center">
                        <BookOpen className="w-16 h-16 text-primary-600 mx-auto mb-6" />
                        <h2 className="heading-md mb-4">Stay Updated</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Get the latest insights on educational technology, ERP solutions, and best practices delivered to your inbox.
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

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import { Newspaper, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
    const newsItems = [
        {
            title: 'Education fees portal looking to raise funds to expand nationally',
            date: 'May 17, 2017',
            description: 'OnFees, an online platform for educational institutions to collect fees digitally, is in talks to raise funds to expand its operations nationally.',
            category: 'Press Release',
            source: 'Times of India',
            link: 'https://timesofindia.indiatimes.com/venture-capital/education-fees-portal-looking-to-raise-funds-to-expand-nationally/articleshow/58715463.cms',
        },
        {
            title: 'No more queuing up for fee payment with OnFees',
            date: 'May 16, 2017',
            description: 'Most of us would remember paying our school or college fees as a painful exercise—standing in a long queue, going through disproportionate paperwork and, not to forget, keeping tabs on the due date. For people on the other side of the counter, i.e., the school or college administration....',
            category: 'Press Release',
            source: 'VCCircle',
            link: 'https://www.vccircle.com/this-startup-ensures-you-dont-have-to-queue-up-for-tedious-fee-payments/',
        },
        {
            title: 'Expansion plans for OnFees',
            date: 'May 14, 2017',
            description: 'Mumbai, May 14 (PTI) Cash may have been the most-prevalent payment mode for educational institutions traditionally, but a push for digital economy post-demonetisation is making them change too and this has prompted three young professionals to start OnFees -- an online platform...',
            category: 'Press Release',
            source: 'India Today',
            link: 'https://www.indiatoday.in/pti-feed/story/online-fee-platform-onfees-in-talks-for-next-funding-round-925861-2017-05-14',
        },
        {
            title: 'Demonetisation prompted start of OnFees',
            date: 'May 16, 2017',
            description: 'Cash may have been the most-prevalent payment mode for educational institutions traditionally, but a push for digital economy post-demonetisation is making them change too and this has prompted three young professionals to start OnFees an online fee platform....',
            category: 'Press Release',
            source: 'Financial Express',
            link: 'https://www.financialexpress.com/industry/online-fee-platform-onfees-in-talks-for-next-funding-round/668274/',
        },
        {
            title: 'Gujarat Samachar',
            date: 'May 17, 2017',
            description: 'Featured coverage in Gujarat Samachar newspaper.',
            category: 'Print Media',
            source: 'Gujarat Samachar',
            link: 'https://onfees.com/assets/images/gujarat_samachar.jpg',
        },
        {
            title: 'Dainik Bhaskar',
            date: 'May 14, 2017',
            description: 'Featured coverage in Dainik Bhaskar newspaper.',
            category: 'Print Media',
            source: 'Dainik Bhaskar',
            link: 'https://onfees.com/assets/images/article.png',
        },
    ];

    return (
        <>
            <Header />

            <main className="pt-20">
                <Section background="gradient" className="pt-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">
                            <span className="text-gradient">News & PR</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Stay updated with the latest news, press releases, and media coverage about Onfees.
                        </p>
                    </div>
                </Section>

                <Section background="white">
                    <SectionHeader
                        subtitle="Press Coverage"
                        title="In the News"
                        description="Read what leading publications are saying about Onfees and our mission to digitize education fee management."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item, index) => (
                            <div key={index} className="card group hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span>{item.date}</span>
                                </div>
                                <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded-full mb-3">
                                    {item.category}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{item.description}</p>
                                <div className="text-sm text-gray-500 mb-4">
                                    <span className="font-medium">Source:</span> {item.source}
                                </div>
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                                >
                                    Read Article
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section background="gray">
                    <div className="max-w-3xl mx-auto text-center">
                        <Newspaper className="w-16 h-16 text-primary-600 mx-auto mb-6" />
                        <h2 className="heading-md mb-4">Stay Connected</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Follow us for the latest updates, news, and announcements about Onfees and the education technology sector.
                        </p>
                        <p className="text-gray-600">
                            For media inquiries, please contact us at{' '}
                            <a href="mailto:info@onfees.com" className="text-primary-600 hover:text-primary-700 font-medium">
                                info@onfees.com
                            </a>
                        </p>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}

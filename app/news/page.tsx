import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section, { SectionHeader } from '@/components/ui/Section';
import { Newspaper, Calendar } from 'lucide-react';

export default function NewsPage() {
    const newsItems = [
        {
            title: 'Partnership with NPCI',
            date: '2023',
            description: 'Onfees partners with National Payments Corporation of India to promote digital awareness in education sector.',
            category: 'Partnership',
        },
        {
            title: '#BeCashless Initiative',
            date: '2023',
            description: 'Launching nationwide campaign to promote cashless transactions in educational institutions.',
            category: 'Initiative',
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
                            Stay updated with the latest news and announcements from Onfees.
                        </p>
                    </div>
                </Section>

                <Section background="white">
                    <SectionHeader
                        subtitle="Latest Updates"
                        title="Recent News"
                    />
                    <div className="grid md:grid-cols-2 gap-8">
                        {newsItems.map((item, index) => (
                            <div key={index} className="card">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span>{item.date}</span>
                                    <span className="mx-2">•</span>
                                    <span className="text-primary-600 font-medium">{item.category}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section background="gray">
                    <div className="max-w-3xl mx-auto text-center">
                        <Newspaper className="w-16 h-16 text-primary-600 mx-auto mb-6" />
                        <h2 className="heading-md mb-4">Stay Connected</h2>
                        <p className="text-lg text-gray-600">
                            Follow us for the latest updates, news, and announcements about Onfees and the education technology sector.
                        </p>
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}

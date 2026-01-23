'use client';

import Section, { SectionHeader } from '@/components/ui/Section';
import FAQSchema from '@/components/seo/FAQSchema';

export default function HomeFAQ() {
    const faqs = [
        {
            question: "What is Onfees ERP and how does it help educational institutions?",
            answer: "Onfees is a comprehensive ERP (Enterprise Resource Planning) solution designed specifically for educational institutions. It helps schools and colleges manage admissions, fee collection, examinations, learning management, HR & payroll, library operations, and more - all from a single integrated platform. This streamlines operations, reduces manual work, and improves transparency."
        },
        {
            question: "How does the fee management system work?",
            answer: "Our fee management system automates the entire fee collection process. It supports multiple payment methods including online payments, UPI, cards, and cash. The system automatically generates invoices, sends payment reminders, tracks pending fees, and integrates with your accounting software for seamless financial management."
        },
        {
            question: "Can Onfees integrate with our existing systems?",
            answer: "Yes, Onfees is designed to integrate seamlessly with existing systems. We support integration with popular accounting software, payment gateways, SMS providers, and other third-party tools. Our implementation team works closely with you to ensure smooth integration with your current infrastructure."
        },
        {
            question: "Is the platform suitable for both schools and colleges?",
            answer: "Absolutely! Onfees is designed to cater to educational institutions of all sizes and types - from K-12 schools to universities and professional colleges. Our modular approach allows you to choose and customize features based on your specific requirements."
        },
        {
            question: "How secure is student and financial data on Onfees?",
            answer: "Security is our top priority. Onfees uses bank-grade encryption for all data transmission and storage. We implement multi-layer security protocols, regular security audits, secure backup systems, and comply with data protection regulations. All financial transactions are processed through PCI-DSS compliant payment gateways."
        },
        {
            question: "What kind of support and training do you provide?",
            answer: "We provide comprehensive support including initial training for your staff, detailed documentation, video tutorials, and ongoing technical support. Our implementation framework includes strategy planning, data migration, phased rollout, and continuous support to ensure successful adoption across your institution."
        },
        {
            question: "How long does it take to implement Onfees?",
            answer: "Implementation time varies based on your institution's size and requirements. Typically, a basic setup can be completed in 2-4 weeks, while a full-scale implementation with all modules may take 2-3 months. We follow a phased approach to ensure minimal disruption to your operations."
        },
        {
            question: "What is the pricing model for Onfees?",
            answer: "We offer flexible pricing based on your institution's size and the modules you need. We have three service levels: Level 1 (Implementation Framework), Level 2 (Implementation + Hardware), and Level 3 (Complete Solution). Contact us for a free consultation and customized quote based on your specific requirements."
        }
    ];

    return (
        <Section background="white">
            <SectionHeader
                subtitle="Frequently Asked Questions"
                title="Got Questions? We've Got Answers"
                description="Find answers to common questions about Onfees ERP platform"
            />
            <div className="max-w-4xl mx-auto">
                <FAQSchema faqs={faqs} />
            </div>
        </Section>
    );
}

import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    background?: 'white' | 'gray' | 'gradient';
    id?: string;
}

const Section = ({ children, className = '', background = 'white', id }: SectionProps) => {
    const backgroundStyles = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        gradient: 'bg-gradient-to-br from-primary-50 via-white to-accent-50',
    };

    return (
        <section id={id} className={`section-padding ${backgroundStyles[background]} ${className}`}>
            <div className="container-custom">
                {children}
            </div>
        </section>
    );
};

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    centered?: boolean;
}

export const SectionHeader = ({ title, subtitle, description, centered = true }: SectionHeaderProps) => {
    return (
        <div className={`mb-12 lg:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
            {subtitle && (
                <p className="text-accent-600 font-semibold text-sm uppercase tracking-wide mb-3">
                    {subtitle}
                </p>
            )}
            <h2 className="heading-lg text-gray-900 mb-4">
                {title}
            </h2>
            {description && (
                <p className="text-lg text-gray-600 leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};

export default Section;

import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    href?: string;
}

const Card = ({ children, className = '', hover = true, href }: CardProps) => {
    const baseStyles = 'rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200';
    const hoverStyles = hover ? 'hover:shadow-md hover:border-primary-200' : '';
    const combinedClassName = `${baseStyles} ${hoverStyles} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return <div className={combinedClassName}>{children}</div>;
};

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    href?: string;
}

export const FeatureCard = ({ icon, title, description, href }: FeatureCardProps) => {
    return (
        <Card href={href} className="group">
            <div className="flex flex-col items-start space-y-4">
                <div className="p-3 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </Card>
    );
};

export default Card;

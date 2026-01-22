import { Quote } from 'lucide-react';

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    institution: string;
}

const TestimonialCard = ({ quote, author, role, institution }: TestimonialProps) => {
    return (
        <div className="card h-full flex flex-col">
            <Quote className="w-10 h-10 text-primary-200 mb-4" />
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                "{quote}"
            </p>
            <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{author}</p>
                <p className="text-sm text-gray-600">{role}</p>
                <p className="text-sm text-primary-600 font-medium">{institution}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;

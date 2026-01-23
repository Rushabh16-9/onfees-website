'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
    reversed?: boolean;
    index?: number;
}

const FeatureSection = ({
    title,
    description,
    imageSrc,
    imageAlt,
    href,
    reversed = false,
    index = 0
}: FeatureSectionProps) => {
    return (
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 py-16`}>
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
                <div className={`relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group`}>
                    <div className="aspect-[4/3] relative">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                    <span>Feature {index + 1}</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {title}
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                    {description}
                </p>

                <Link
                    href={href}
                    className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 hover:translate-x-1 transition-all group"
                >
                    <span>Learn more about {title}</span>
                    <ArrowRight className="w-5 h-5 group-hover:ml-1 transition-all" />
                </Link>
            </div>
        </div>
    );
};

export default FeatureSection;

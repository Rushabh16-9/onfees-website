'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        { name: 'Admission Management', href: '/features/admission' },
        { name: 'Fee Management', href: '/features/fees' },
        { name: 'Examination Management', href: '/features/examination' },
        { name: 'Learning Management System', href: '/features/lms' },
        { name: 'HR & Payroll', href: '/features/hr-payroll' },
        { name: 'Library Management', href: '/features/library' },
        { name: 'Attendance Management', href: '/features/attendance' },
        { name: 'Document Management', href: '/features/document-management' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-md'
                : 'bg-white'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/images/header_logo.png"
                            alt="Onfees"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                            Home
                        </Link>

                        {/* Features Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsFeaturesOpen(true)}
                            onMouseLeave={() => setIsFeaturesOpen(false)}
                        >
                            <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors">
                                <span>Features</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {isFeaturesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                                    {features.map((feature) => (
                                        <Link
                                            key={feature.href}
                                            href={feature.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                        >
                                            {feature.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/careers"
                            className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                            Careers
                        </Link>
                        <Link
                            href="/news"
                            className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                            News & PR
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/blog"
                            className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                            Blog
                        </Link>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link href="/login" className="btn-outline px-5 py-2.5 text-sm">
                            Login
                        </Link>
                        <a
                            href="https://meetings.hubspot.com/viral-dedhiya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-5 py-2.5 text-sm"
                        >
                            Book a Demo
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <div>
                                <button
                                    onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                                    className="flex items-center justify-between w-full text-gray-700 hover:text-primary-600 font-medium"
                                >
                                    <span>Features</span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {isFeaturesOpen && (
                                    <div className="mt-2 ml-4 space-y-2">
                                        {features.map((feature) => (
                                            <Link
                                                key={feature.href}
                                                href={feature.href}
                                                className="block text-sm text-gray-600 hover:text-primary-600"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {feature.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Link
                                href="/about"
                                className="text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/careers"
                                className="text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Careers
                            </Link>
                            <Link
                                href="/news"
                                className="text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                News & PR
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/blog"
                                className="text-gray-700 hover:text-primary-600 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <div className="pt-4 space-y-3">
                                <Link
                                    href="/login"
                                    className="block btn-outline text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <a
                                    href="https://meetings.hubspot.com/viral-dedhiya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block btn-primary text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Book a Demo
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

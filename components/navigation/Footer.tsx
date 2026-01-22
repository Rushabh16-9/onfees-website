import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container-custom py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="text-2xl font-bold text-white mb-4">
                            Onfees
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Complete ERP solution for educational institutes. Streamline admissions, fees, examinations, and more with our comprehensive platform.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                            <Phone className="w-4 h-4" />
                            <a href="tel:+918104502268" className="hover:text-white transition-colors">
                                +91 8104502268
                            </a>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                            <Mail className="w-4 h-4" />
                            <a href="mailto:info@onfees.com" className="hover:text-white transition-colors">
                                info@onfees.com
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-sm hover:text-white transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-sm hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-sm hover:text-white transition-colors">
                                    News & PR
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a href="https://onfees.com/help_center.html" className="text-sm hover:text-white transition-colors">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <Link href="/login" className="text-sm hover:text-white transition-colors">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <div className="flex items-start space-x-2 text-sm text-gray-400">
                            <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                            <p>
                                138/139, Hindustan Kohinoor Complex, LBS Road, Vikhroli (W), Mumbai, 400083
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-gray-400">
                        © {currentYear} Onfees. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a
                            href="https://onfees.com/privacy_policy.html"
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="https://onfees.com/terms_conditons.html"
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            Terms of Use
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

'use client';

import { useState } from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { LogIn, Mail, Lock, GraduationCap, Building2, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
    const [loginType, setLoginType] = useState<'student' | 'institute' | null>(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login
        console.log('Login attempt:', { ...formData, loginType });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value,
        });
    };

    return (
        <>
            <Header />

            <main className="pt-20">
                <Section background="gray" className="min-h-screen flex items-center">
                    <div className="max-w-md mx-auto w-full">
                        {/* Login Type Selection */}
                        {!loginType ? (
                            <>
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                                        <LogIn className="w-8 h-8" />
                                    </div>
                                    <h1 className="heading-lg mb-2">Welcome Back</h1>
                                    <p className="text-gray-600">Choose your login type to continue</p>
                                </div>

                                <div className="space-y-4">
                                    {/* Student Login Option */}
                                    <a
                                        href="https://student.onfees.com/panelLogin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full card hover:shadow-lg hover:border-primary-300 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="flex items-center space-x-4 p-2">
                                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                <GraduationCap className="w-8 h-8" />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                                    Login as Student
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    Access your courses, assignments, and grades
                                                </p>
                                            </div>
                                            <div className="text-gray-400 group-hover:text-primary-600 transition-colors">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Institute Login Option */}
                                    <a
                                        href="https://institute.onfees.com/panelLogin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full card hover:shadow-lg hover:border-primary-300 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="flex items-center space-x-4 p-2">
                                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                                <Building2 className="w-8 h-8" />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                                    Login as Institute
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    Manage your institution and students
                                                </p>
                                            </div>
                                            <div className="text-gray-400 group-hover:text-primary-600 transition-colors">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="mt-8 text-center">
                                    <p className="text-sm text-gray-600">
                                        Need help?{' '}
                                        <a href="/contact" className="font-medium text-primary-600 hover:text-primary-500">
                                            Contact Support
                                        </a>
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Login Form */}
                                <div className="text-center mb-8">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${loginType === 'student'
                                        ? 'bg-blue-100 text-blue-600'
                                        : 'bg-purple-100 text-purple-600'
                                        }`}>
                                        {loginType === 'student' ? (
                                            <GraduationCap className="w-8 h-8" />
                                        ) : (
                                            <Building2 className="w-8 h-8" />
                                        )}
                                    </div>
                                    <h1 className="heading-lg mb-2">
                                        {loginType === 'student' ? 'Student Login' : 'Institute Login'}
                                    </h1>
                                    <p className="text-gray-600">
                                        {loginType === 'student'
                                            ? 'Sign in to access your student portal'
                                            : 'Sign in to manage your institution'}
                                    </p>
                                </div>

                                <div className="card">
                                    {/* Back Button */}
                                    <button
                                        onClick={() => setLoginType(null)}
                                        className="flex items-center text-sm text-gray-600 hover:text-primary-600 mb-6 transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-1" />
                                        Change login type
                                    </button>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Mail className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="input-field pl-10"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                                Password
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Lock className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    required
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className="input-field pl-10"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember"
                                                    name="remember"
                                                    type="checkbox"
                                                    checked={formData.remember}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                                />
                                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="text-sm">
                                                <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>

                                        <Button type="submit" variant="primary" size="lg" className="w-full">
                                            <LogIn className="mr-2 w-5 h-5" />
                                            Sign In
                                        </Button>
                                    </form>

                                    <div className="mt-6 text-center">
                                        <p className="text-sm text-gray-600">
                                            Need help?{' '}
                                            <a href="/contact" className="font-medium text-primary-600 hover:text-primary-500">
                                                Contact Support
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <p className="text-sm text-gray-600">
                                        {loginType === 'institute' ? "Don't have an account? " : "Institution looking to get started? "}
                                        <a href="https://meetings.hubspot.com/viral-dedhiya" className="font-medium text-primary-600 hover:text-primary-500">
                                            Book a demo
                                        </a>
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </Section>
            </main>

            <Footer />
        </>
    );
}

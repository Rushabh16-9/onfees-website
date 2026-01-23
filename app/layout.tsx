import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Onfees - Complete ERP Solution for Educational Institutes",
        template: "%s | Onfees"
    },
    description: "Leading education ERP platform for schools and colleges. Manage admissions, fees, examinations, LMS, HR, library, and more with Onfees. Trusted by 100+ institutions across India.",
    keywords: [
        "education ERP",
        "school management software",
        "college ERP",
        "fee management system",
        "online admission software",
        "examination management",
        "learning management system",
        "HR payroll software",
        "library management",
        "student information system",
        "educational institution software",
        "digital fee collection",
        "cashless payment",
        "RFID library system",
        "education technology India",
        "Mumbai ERP software"
    ],
    authors: [{ name: "Onfees" }],
    creator: "Onfees",
    publisher: "Onfees",
    metadataBase: new URL('https://www.onfees.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.onfees.com',
        siteName: 'Onfees',
        title: 'Onfees - Complete ERP Solution for Educational Institutes',
        description: 'Leading education ERP platform for schools and colleges. Manage admissions, fees, examinations, LMS, HR, library, and more with Onfees.',
        images: [
            {
                url: '/images/onfees_vector.png',
                width: 1200,
                height: 630,
                alt: 'Onfees - Education ERP Platform',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@Onfees',
        creator: '@Onfees',
        title: 'Onfees - Complete ERP Solution for Educational Institutes',
        description: 'Leading education ERP platform for schools and colleges. Manage admissions, fees, examinations, LMS, HR, library, and more.',
        images: ['/images/onfees_vector.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code', // Replace with actual verification code
    },
    category: 'technology',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/images/header_logo.png" />
                <meta name="theme-color" content="#3B82F6" />

                {/* Organization Schema - Enhanced for GEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Onfees",
                            "alternateName": "OnFees Education ERP",
                            "url": "https://www.onfees.com",
                            "logo": "https://www.onfees.com/images/header_logo.png",
                            "description": "Complete ERP solution for educational institutes including fee management, admissions, examinations, LMS, HR, and library management.",
                            "foundingDate": "2017",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "138/139, Hindustan Kohinoor Complex, LBS road, Vikhroli (W)",
                                "addressLocality": "Mumbai",
                                "addressRegion": "Maharashtra",
                                "postalCode": "400083",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "19.1136",
                                "longitude": "72.9342"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+91-8104502268",
                                "contactType": "Customer Service",
                                "email": "info@onfees.com",
                                "areaServed": "IN",
                                "availableLanguage": ["English", "Hindi"]
                            },
                            "sameAs": [
                                "https://www.facebook.com/onfeess/",
                                "https://twitter.com/Onfees",
                                "https://www.linkedin.com/company/onfees.com/",
                                "https://www.instagram.com/_onfees/"
                            ]
                        })
                    }}
                />

                {/* Local Business Schema - For GEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Onfees",
                            "image": "https://www.onfees.com/images/header_logo.png",
                            "@id": "https://www.onfees.com",
                            "url": "https://www.onfees.com",
                            "telephone": "+91-8104502268",
                            "priceRange": "$$",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "138/139, Hindustan Kohinoor Complex, LBS road, Vikhroli (W)",
                                "addressLocality": "Mumbai",
                                "addressRegion": "Maharashtra",
                                "postalCode": "400083",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 19.1136,
                                "longitude": 72.9342
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday"
                                ],
                                "opens": "09:00",
                                "closes": "18:00"
                            }
                        })
                    }}
                />

                {/* Software Application Schema - For AEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "Onfees ERP",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Web-based",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "INR",
                                "description": "Free demo available"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.8",
                                "ratingCount": "50"
                            },
                            "description": "Complete ERP solution for educational institutions with modules for admissions, fees, examinations, LMS, HR, and library management."
                        })
                    }}
                />

                {/* Service Schema - For AEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Education ERP Software",
                            "provider": {
                                "@type": "Organization",
                                "name": "Onfees"
                            },
                            "areaServed": {
                                "@type": "Country",
                                "name": "India"
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "ERP Modules",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Fee Management System"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Admission Management"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Examination Management"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Learning Management System"
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}

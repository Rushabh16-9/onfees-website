import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Onfees - Complete ERP Solution for Educational Institutes",
    description: "Leading education ERP platform for schools and colleges. Manage admissions, fees, examinations, LMS, HR, library, and more with Onfees.",
    keywords: "education ERP, school management software, college ERP, fee management, online admission, examination software, LMS, HR payroll",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

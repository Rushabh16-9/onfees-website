import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Onfees - Complete ERP Solution for Educational Institutes',
        short_name: 'Onfees',
        description: 'Leading education ERP platform for schools and colleges. Manage admissions, fees, examinations, LMS, HR, library, and more.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3B82F6',
        icons: [
            {
                src: '/images/header_logo.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}

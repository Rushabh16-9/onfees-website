/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [],
    },
    async rewrites() {
        return [
            {
                source: '/login.html',
                destination: '/login',
            },
        ];
    },
};

module.exports = nextConfig;

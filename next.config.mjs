/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: '**.placeholder.com',
            }
        ],
        unoptimized: true,
    },
    devIndicators: false,
    experimental: {
        serverActions: {
            bodySizeLimit: '5mb',
        },
    },
};

export default nextConfig;

import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    reactStrictMode: true,
    transpilePackages: ['three'],
    experimental: {
        optimizePackageImports: ['lucide-react', 'react-icons', '@hugeicons/react', 'framer-motion', 'gsap'],
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.resolve.alias = {
                ...config.resolve.alias,
                'three': false,
                'three-globe': false,
                '@splinetool/react-spline': false,
                '@splinetool/runtime': false,
                '@react-three/fiber': false,
                '@react-three/drei': false,
                '@react-three/rapier': false,
            };
        }
        return config;
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'assets.aceternity.com' }
        ],
        formats: ['image/avif', 'image/webp'],
    },
    allowedDevOrigins: ['behalf-matched-novelty-toll.trycloudflare.com'],
};

export default withNextIntl(nextConfig);

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

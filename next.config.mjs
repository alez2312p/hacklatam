/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ipfs.io',
                pathname: '/ipfs/**',
            },
        ],
    },
};

export default nextConfig;

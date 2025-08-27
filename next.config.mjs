/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.unsplash.com"
            },
            {
                protocol: 'https',
                hostname: "i.ibb.co.com"

            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
            },
            {
                protocol: "https",
                hostname: "www.pexels.com",
            },
        ]
    }
};

export default nextConfig;

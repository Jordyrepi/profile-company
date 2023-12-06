/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
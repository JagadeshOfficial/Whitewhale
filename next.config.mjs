/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https'
                ,hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https'
                ,hostname: 'logodix.com'
            },
            {
                protocol: 'https'
                ,hostname: 'picsum.photos'
            },
            {
                protocol: 'https'
                ,hostname: 'whitewhalesoft.in'
            },
            {
                protocol: 'https'
                ,hostname: 'placehold.co'
            },
            {
                protocol: 'https'
                ,hostname: 'images.pexels.com'
            }
        ]
    }
};

export default nextConfig;

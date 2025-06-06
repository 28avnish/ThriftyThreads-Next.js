/** @type {import('next').NextConfig} */
const nextConfig = {  
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.hm.com',
        port: '',
        pathname: '/**',

      },
    ],
  },};
export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    domains: ['pbs.twimg.com'], // Add allowed domains here
    
  },eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },};

export default nextConfig;

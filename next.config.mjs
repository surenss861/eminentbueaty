/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Ensure proper output for Vercel
  output: 'standalone',
  // Optimize for production
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;


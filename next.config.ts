// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
  async headers() {
    return [
      {
        source: '/:path',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live/",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/",
              "font-src 'self' https://fonts.gstatic.com/ data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://vercel.live/ https://vitals.vercel-insights.com/",
              "frame-src 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path',
        has: [
          {
            type: 'host',
            value: 'webbloxito.netlify.app',
          },
        ],
        destination: 'https://bloxito.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

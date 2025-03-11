import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.notion.so', 'prod-files-secure.s3.us-west-2.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.notion.so', 'prod-files-secure.s3.us-west-2.amazonaws.com',
        pathname: '/image/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=31536000, stale-while-revalidate',
          },
        ],
      },
    ];
  },
};

export default withVanillaExtract(nextConfig);

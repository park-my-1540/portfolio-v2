import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/\*\* @type {import('next').NextConfig} \*/;
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
        pathname: '/**',// 모든 경로 허용
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);

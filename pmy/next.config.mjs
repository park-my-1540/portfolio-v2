import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/\*\* @type {import('next').NextConfig} \*/;
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['amusing-sparrow-b19.notion.site', 'res.cloudinary.com'],
  },
};

export default withVanillaExtract(nextConfig);

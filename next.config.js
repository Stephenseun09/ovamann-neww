/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  env: {
    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
  },
};

module.exports = nextConfig;

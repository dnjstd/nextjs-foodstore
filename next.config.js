/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"],
  },
};

// module.exports = nextConfig;

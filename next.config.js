/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/test',
        destination: 'https://minersstudios.com',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;

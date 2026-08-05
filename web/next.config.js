/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // We currently use plain <img> for the remote logo assets; allow them if
  // we later migrate to next/image.
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'customer-assets.emergentagent.com' },
    ],
  },
  // Lint is run separately; don't fail production builds on lint warnings.
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;

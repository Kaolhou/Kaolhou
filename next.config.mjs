/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.kaolhou.dev",
        protocol: "https",
      },
      {
        hostname: "github.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;

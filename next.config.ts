import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "slametandfatma.wedding",
      },
      {
        protocol: "https",
        hostname: "calaraya.vercel.app",
      },
    ],
  },
};
export default nextConfig;

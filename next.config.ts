import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.0.16:3000", "http://192.168.0.0/16"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "davidjordanoski.vercel.app",
        port: "", // leave empty for default
        pathname: "/**", // allow all paths
      },
      {
        protocol: "https",
        hostname: "davidjordanoski.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

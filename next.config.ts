import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://192.168.0.16:3000", // your local network origin
    "http://192.168.0.0/16", // optional LAN CIDR or other hosts
  ],
};

export default nextConfig;

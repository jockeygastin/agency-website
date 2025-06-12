import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
  },
  
  
  typescript: {
    ignoreBuildErrors: true
  },

  images: {
    domains: ["flowbite.s3.amazonaws.com", "images.unsplash.com"],
  },
  /* config options here */
};

export default nextConfig;

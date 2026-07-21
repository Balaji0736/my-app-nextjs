import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.160"],
  images:{
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns:[
      {
        protocol:"http",
        hostname:"192.168.29.160",
        pathname: "/wordpress-7.0/**",
      },
      {
        protocol:"http",
        hostname:"localhost",
        pathname: "/wordpress-7.0/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;

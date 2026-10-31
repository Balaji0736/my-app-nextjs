import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.160"],
  images:{
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns:[
      {
        protocol:"https",
        hostname:"floralwhite-owl-682074.hostingersite.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol:"http",
        hostname:"localhost",
        pathname: "/wordpress-7.0/wp-content/uploads/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;

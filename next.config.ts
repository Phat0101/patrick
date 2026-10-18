import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // The chat route reads the résumé from disk at request time.
  outputFileTracingIncludes: {
    "/api/chat": ["./public/Patrick_Resume.md"],
  },
};

export default nextConfig;

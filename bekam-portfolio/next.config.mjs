
import { BASE_PATH } from "./src/lib/asset-path.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? BASE_PATH : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/MyResume" : "",
  assetPrefix: isProd ? "/MyResume/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

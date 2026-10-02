/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_BUILD_TARGET === "verify" ? ".build-verify" : ".next",
};

export default nextConfig;

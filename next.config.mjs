/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a fully static site in `out/` so it can be served by GitHub Pages.
  output: "export",
  // next/image optimization requires a server; disable it for static export.
  images: {
    unoptimized: true,
  },
  
};

export default nextConfig;

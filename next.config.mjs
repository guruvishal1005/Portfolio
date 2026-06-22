/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a fully static site in `out/` so it can be served by GitHub Pages.
  output: "export",
  // next/image optimization requires a server; disable it for static export.
  images: {
    unoptimized: true,
  },
  // Emit `path/index.html` so deep links resolve correctly on static hosting.
  trailingSlash: true,
};

export default nextConfig;

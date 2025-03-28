/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/zhuoyang-research-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zhuoyang-research-website/' : '',
  images: {
    unoptimized: true,
  },
  // Required for static HTML export
  output: 'export',
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/zhuoyang-research-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zhuoyang-research-website/' : '',
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true, // This is important for GitHub Pages
}

module.exports = nextConfig
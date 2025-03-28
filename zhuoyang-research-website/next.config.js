/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Configure for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/zhuoyang-research-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zhuoyang-research-website/' : '',
  
  // Images configuration
  images: {
    unoptimized: true,
  },
  
  // Required for static HTML export
  output: 'export',
  
  // Use trailing slashes for better static site compatibility
  trailingSlash: true,
}

module.exports = nextConfig
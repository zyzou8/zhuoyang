/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/zhuoyang-research-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zhuoyang-research-website/' : '',
  
  // Required for static export
  output: 'export',
  
  // Fix routing issues with trailing slashes
  trailingSlash: true,
  
  // Images will be unoptimized for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
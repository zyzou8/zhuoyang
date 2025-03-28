/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Use the correct repository name
  basePath: process.env.NODE_ENV === 'production' ? '/zhuoyang' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zhuoyang/' : '',
  
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
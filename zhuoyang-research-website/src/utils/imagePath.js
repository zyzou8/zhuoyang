// src/utils/imagePath.js
export function getImagePath(path) {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    
    // In production (GitHub Pages), add the repository name to the path
    if (process.env.NODE_ENV === 'production') {
      return `/zhuoyang/${cleanPath}`;  // Changed from zhuoyang-research-website
    }
    
    // In development, use the path as is with a leading slash
    return `/${cleanPath}`;
  }
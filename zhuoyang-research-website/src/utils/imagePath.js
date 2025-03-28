/**
 * Helper function to get the correct image path based on environment
 */
export function getImagePath(path) {
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    
    if (process.env.NODE_ENV === 'production') {
      return `/zhuoyang-research-website/${cleanPath}`;
    }
    
    return `/${cleanPath}`;
  }
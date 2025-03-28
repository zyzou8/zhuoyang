export function getImagePath(path) {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    
    // In production (GitHub Pages), add the repository name to the path
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      return `/zhuoyang-research-website/${cleanPath}`;
    }
    
    // In development, use the path as is, ensuring it has a leading slash
    return `/${cleanPath}`;
  }
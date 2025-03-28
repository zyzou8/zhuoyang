// src/components/GithubLink.js
import Link from 'next/link';

export default function GithubLink({ href, children, ...props }) {
  // For client-side navigation, use the Next.js Link component
  // For static export on GitHub Pages, adjust the href path
  const basePath = process.env.NODE_ENV === 'production';
  const adjustedHref = href.startsWith('/') ? `${basePath}${href}` : href;
  
  return (
    <Link href={adjustedHref} {...props}>
      {children}
    </Link>
  );
}
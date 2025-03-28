// src/components/CustomLink.js
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CustomLink({ href, children, ...props }) {
  const router = useRouter();
  
  // For client-side navigation
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
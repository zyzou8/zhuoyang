import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  
  // Helper to determine if link is active
  const isActive = (path) => router.pathname === path;
  
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <Link href="/" className="hover:text-blue-200 transition duration-300">
              Zhuoyang Zou
            </Link>
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" 
                  className={`hover:text-blue-200 transition duration-300 ${isActive('/') ? 'font-bold border-b-2 border-white' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/research"
                  className={`hover:text-blue-200 transition duration-300 ${isActive('/research') ? 'font-bold border-b-2 border-white' : ''}`}>
                  Research
                </Link>
              </li>
              <li>
                <Link href="/blog"
                  className={`hover:text-blue-200 transition duration-300 ${isActive('/blog') ? 'font-bold border-b-2 border-white' : ''}`}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

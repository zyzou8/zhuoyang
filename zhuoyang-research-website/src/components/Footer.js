import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Zhuoyang Zou. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:mintzou2000@gmail.com" className="hover:text-blue-800 transition duration-300">
              <FaEnvelope className="text-xl" />
            </a>
            {/* Update these with your actual profiles */}
            <a href="https://github.com/zyzou8" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition duration-300">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/zhuoyang-zou-44b2b3238/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition duration-300">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://scholar.google.com/citations?user=n8gewTkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition duration-300">
              <SiGooglescholar className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

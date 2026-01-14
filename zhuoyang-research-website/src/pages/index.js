import Layout from '../components/Layout';
import Education from '../components/Education';
import Publications from '../components/Publications';
import ResearchInterests from '../components/ResearchInterests';
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { getAssetPath } from '../utils/assetPath';

export default function Home() {
  return (
    <Layout title="Zhuoyang Zou - AI Researcher">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                <img
                  src={getAssetPath("profile-photo.jpg")}
                  alt="Zhuoyang Zou"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 text-center">Zhuoyang Zou</h1>
              <p className="text-gray-600 text-center mt-2 font-medium">PhD Student</p>
              <p className="text-gray-600 text-center text-sm">Computer Science</p>
              <p className="text-gray-600 text-center text-sm">Pennsylvania State University</p>
            </div>

            {/* Contact Links */}
            <div className="space-y-3 mb-6 pb-6 border-b">
              <a
                href="mailto:mintzou2000@gmail.com"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaEnvelope className="text-blue-700 mr-3 flex-shrink-0" size={18} />
                <span className="text-sm">mintzou2000@gmail.com</span>
              </a>

              <a
                href="https://github.com/zyzou8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaGithub className="text-blue-700 mr-3 flex-shrink-0" size={18} />
                <span className="text-sm">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/zhuoyang-zou-44b2b3238/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="text-blue-700 mr-3 flex-shrink-0" size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href={getAssetPath("zhuoyangzou.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaFilePdf className="text-blue-700 mr-3 flex-shrink-0" size={18} />
                <span className="text-sm font-medium">CV / Resume</span>
              </a>
            </div>

            {/* Education */}
            <Education />
          </div>
        </div>

        {/* Main content */}
        <div className="md:col-span-2 space-y-6">
          {/* About Me */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">About Me</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I am a PhD student in Computer Science at Pennsylvania State University, working under the supervision of{' '}
                <a
                  href="https://www.wenpengyin.org/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Prof. Wenpeng Yin
                </a>
                . My research focuses on advancing Large Language Models (LLMs), with an emphasis on multi-agent collaboration and deep reasoning capabilities for scientific and healthcare applications.
              </p>
              <p>
                Previously, I completed my Master's degree in Artificial Intelligence at Northwestern University and my Bachelor's in Computer Science at The Chinese University of Hong Kong, where I worked on computer vision and surgical AI applications.
              </p>
            </div>
          </section>

          {/* Research Interests */}
          <ResearchInterests />

          {/* Publications */}
          <Publications />
        </div>
      </div>
    </Layout>
  );
}
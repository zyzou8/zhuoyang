import Layout from '../components/Layout';
import Education from '../components/Education';
import Publications from '../components/Publications';
import ResearchInterests from '../components/ResearchInterests';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import { getImagePath } from '../utils/imagePath';
export default function Home() {
  return (
    <Layout title="Zhuoyang Zou - AI Researcher">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
              <img
                src={getImagePath("profile-photo.jpg")}
                alt="Zhuoyang Zou"
                className="w-full h-full object-cover"
              />
              </div>
              <h1 className="text-2xl font-bold text-center">Zhuoyang Zou</h1>
              <p className="text-gray-600 text-center mt-1">PhD Student in Computer Science</p>
              <p className="text-gray-600 text-center">Pennsylvania State University</p>
              
              <div className="mt-4 w-full">
                <div className="flex items-center mb-2">
                  <FaEnvelope className="text-blue-800 mr-2" />
                  <a href="mailto:mintzou2000@gmail.com" className="text-blue-600 hover:underline">
                    mintzou2000@gmail.com
                  </a>
                </div>
                {/* <div className="flex items-center mb-2">
                  <FaPhone className="text-blue-800 mr-2" />
                  <span>(773) 290-4562</span>
                </div> */}
                {/* Update with your actual profiles */}
                <div className="flex items-center mb-2">
                  <FaGithub className="text-blue-800 mr-2" />
                  <a href="https://github.com/zyzou8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    GitHub
                  </a>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="text-blue-800 mr-2" />
                  <a href="https://www.linkedin.com/in/zhuoyang-zou-44b2b3238/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="md:col-span-2">
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-lg">
              I am a PhD student in Computer Science at Pennsylvania State University, working under the supervision of {''} 
              <a href="https://www.wenpengyin.org/home" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Prof. Wenpeng Yin
              </a>
              . My research focuses on advancing Large Language Models (LLMs), with an emphasis on multi-agent collaboration and deep reasoning capabilities for scientific and healthcare applications.
            </p>
            <p className="text-lg mt-4">
              Previously, I completed my Master's degree in Artificial Intelligence at Northwestern University and my Bachelor's in Computer Science at The Chinese University of Hong Kong, where I worked on computer vision and surgical AI applications.
            </p>
          </section>
          
          <ResearchInterests />
          <Education />
          <Publications />
        </div>
      </div>
    </Layout>
  );
}

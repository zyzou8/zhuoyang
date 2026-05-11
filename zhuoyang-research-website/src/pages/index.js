import Layout from '../components/Layout';
import Education from '../components/Education';
import Publications from '../components/Publications';
import ResearchInterests from '../components/ResearchInterests';
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
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
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-gray-100">
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
                <FaEnvelope className="text-blue-600 mr-3 flex-shrink-0" size={18} />
                <span className="text-sm">mintzou2000@gmail.com</span>
              </a>

              <a
                href="https://github.com/zyzou8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaGithub className="text-blue-600 mr-3 flex-shrink-0" size={18} />
                <span className="text-sm">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/zhuoyang-zou-44b2b3238/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="text-blue-600 mr-3 flex-shrink-0" size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href="https://scholar.google.com/citations?user=n8gewTkAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <SiGooglescholar className="text-blue-600 mr-3 flex-shrink-0" size={18} />
                <span className="text-sm">Google Scholar</span>
              </a>

              <a
                href={getAssetPath("zhuoyangzou.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaFilePdf className="text-blue-600 mr-3 flex-shrink-0" size={18} />
                <span className="text-sm font-medium">CV / Resume</span>
              </a>
            </div>

            {/* Updates */}
            <div className="mt-6 pt-6 border-t">
              <h2 className="text-base font-bold text-gray-800 mb-3">Updates</h2>
              <ul className="space-y-2.5">
                {[
                  { date: "May 2026", text: "Paper accepted at AI4HE @ CSEDU 2026: AI-Enabled Automated Scaffolding for Undergraduate Students' Learning to Debug and Reason." },
                  { date: "May 2026", text: "New preprint: Bridging the Know-Act Gap via Task-Level Autoregressive Reasoning.", link: "https://arxiv.org/abs/2603.22619" },
                  { date: "Apr 2026", text: "New preprint: M2-Verify — A Large-Scale Multidomain Benchmark for Checking Multimodal Claim Consistency.", link: "https://arxiv.org/abs/2604.01306" },
                  { date: "Jan 2026", text: "New preprint: DIAGPaper — Diagnosing Valid and Specific Weaknesses in Scientific Papers via Multi-Agent Reasoning.", link: "https://arxiv.org/abs/2601.07611" },
                  { date: "Jun 2025", text: "HRScene accepted at ICCV 2025.", link: "https://arxiv.org/abs/2504.18406" },
                  { date: "May 2025", text: "AAAR-1.0 received the Workshop Best Paper Award at ICML 2025.", link: "https://arxiv.org/abs/2410.22394" },
                  { date: "Sep 2024", text: "Started PhD in Computer Science at Pennsylvania State University." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-xs">
                    <span className="text-gray-400 font-medium w-16 flex-shrink-0 pt-0.5">{item.date}</span>
                    <span className="text-gray-600 leading-snug">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">{item.text}</a>
                      ) : item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="mt-6 pt-6 border-t">
              <Education />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="md:col-span-2 space-y-6">
          {/* About Me */}
          <section id="about" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">About Me</h2>
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
import Layout from '../components/Layout';
import Experience from '../components/Experience';
import { getImagePath } from '../utils/imagePath';

export default function Research() {
  const projects = [
    {
      title: "Multi-agent LLM System for Research Evaluation",
      period: "2024 - Present",
      description: "Developing a collaborative AI system where multiple language models work together to identify weaknesses in research papers, generate critiques, and suggest improvements.",
      technologies: ["GPT-4", "Llama", "Claude", "Agent", "Science"],
      image: "agent.png"
    },
    {
      title: "iTox: Deep Learning for Pneumonitis Prediction",
      period: "2023 - 2024",
      description: "Created a CNN-RNN model to predict radiation-induced pneumonitis risk from CT scans, achieving an AUC of 0.84. Developed Grad-CAM visualization tools to increase model interpretability.",
      technologies: ["CNN", "RNN", "Grad-CAM", "Radiology", "Medical Imaging","Pneumonitis","Lung Cancer"],
      image: "iTox_website.png"
    },
    {
      title: "VR Surgical Training System",
      period: "2022",
      description: "Built a virtual reality system for surgical training using Unity and C#, incorporating surgical video analysis and eye-tracking technologies to optimize training effectiveness.",
      technologies: ["Unity", "C#", "U-Net", "Computer Vision", "Eye-tracking"],
      image: "VR.png"
    }
  ];

  return (
    <Layout title="Research - Zhuoyang Zou">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-blue-900">My Experience</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Research Projects</h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1 bg-gray-100 flex items-center justify-center p-4">
                    {project.image ? (
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src={getImagePath(project.image)} 
                          alt={project.title}
                          className="w-full h-full object-cover" 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-200">
                              <p class="text-gray-500 italic p-2 text-center">Image not available</p>
                            </div>`;
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-48 bg-blue-100 flex items-center justify-center">
                        <p className="text-gray-500 italic">Project Image</p>
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-blue-900">{project.title}</h3>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {project.period}
                      </span>
                    </div>
                    <p className="my-4">{project.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Research Methodology</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="mb-4">
              My research methodology combines computational approaches with domain expertise in healthcare and scientific research. I follow these key principles:
            </p>
            
            <ol className="list-decimal ml-6 space-y-2">
              <li>
                <strong>Multi-modal Integration</strong>: Combining text, images, and structured data to create comprehensive AI models that better understand complex domains.
              </li>
              <li>
                <strong>Explainable AI</strong>: Developing methods to make AI decision-making transparent and interpretable, particularly for critical applications in healthcare.
              </li>
              <li>
                <strong>Collaborative Intelligence</strong>: Creating systems where multiple AI agents work together, sharing insights and strengthening overall performance.
              </li>
              <li>
                <strong>Real-world Validation</strong>: Ensuring that AI systems are tested and validated in realistic scenarios with appropriate metrics.
              </li>
            </ol>
          </div>
        </section> */}
        
        <Experience />
      </div>
    </Layout>
  );
}
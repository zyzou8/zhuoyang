export default function Experience() {
  const experiences = [
    {
      position: "Researcher - LLM Multi-Agent Systems",
      company: "Pennsylvania State University",
      period: "Sep. 2024 – Present",
      location: "University Park, PA",
      description: [
        "Developed a multi-agent LLM system designed to identify weaknesses in research papers across NLP, computer vision, and medical AI domains.",
        "Implemented a pipeline where multiple autonomous AI agents interact, critique, and generate counterarguments to refine research quality.",
        "Integrated GPT-4, Llama, and Claude models to simulate peer review processes and enhance research reproducibility."
      ]
    },
    {
      position: "Teaching Assistant, Department of Computer Science",
      company: "Pennsylvania State University",
      period: "Sep. 2024 – Present",
      location: "University Park, PA",
      description: [
        "Led recitations for CMPSC/DS 442 Artificial Intelligence courses, assisting 100+ students with AI models and Python implementations.",
        "Designed and led homeword on open-source LLMs with reinforcement learning; guided students in understanding fine-tuning concepts through hands-on application of Group Relative Policy Optimization (GRPO) using DeepSeek R1."
      ]
    },
    {
      position: "AI Specialist",
      company: "High Fashion Group",
      period: "May 2024 – Aug. 2024",
      location: "Hong Kong",
      description: [
        "Developed a fabric image recognition system using Siamese networks for pattern matching and quality control.",
        "Built a text-based fabric search engine powered by LLMs to improve semantic retrieval across the product database.",
        "Consolidated company-wide product and cost data to support a Retrieval-Augmented Generation (RAG) system that enables fashion trend forecasting and cost-performance analysis for internal teams and partner colleges."
      ]
    },
    {
      position: "Researcher",
      company: "Northwestern University Medical School",
      period: "Jul. 2023 – May. 2024",
      location: "Chicago, IL",
      description: [
        "Designed iTox, a CNN-RNN deep learning model predicting pneumonitis risk from CT scans (AUC: 0.84).",
        "Developed Grad-CAM-based visualization tools to identify lung regions most predictive of pneumonitis.",
        "Proposed a novel iTox metric to guide radiation dose recommendations, reducing pneumonitis risk by 20%."
      ]
    }
  ];

  return (
    <section id="experience" className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-900 border-b-2 border-blue-900 pb-2">Work Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-indigo-700 pl-4 py-2">
            <div className="flex flex-col md:flex-row justify-between">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <span className="text-gray-600">{exp.period}</span>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <p className="text-lg font-medium">{exp.company}</p>
              <p className="text-gray-700">{exp.location}</p>
            </div>
            <ul className="list-disc ml-5 mt-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-gray-800">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

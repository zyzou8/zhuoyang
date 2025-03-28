export default function Education() {
  const education = [
    {
      institution: "Pennsylvania State University",
      degree: "PhD in Computer Science",
      period: "Sep. 2024 – Present",
      location: "University Park, PA",
      details:<a href="https://www.wenpengyin.org/ai4research-lab" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
      PI: Prof. Wenpeng Yin
    </a>
    },
    {
      institution: "Northwestern University",
      degree: "Master of Science in Artificial Intelligence",
      period: "Sep. 2022 – Dec. 2023",
      location: "Evanston, IL",
      details:<a href="https://www.mccormick.northwestern.edu/artificial-intelligence/people/alumni/2023-graduates.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
      2023 Cohorts
    </a>
    },
    {
      institution: "The Chinese University of Hong Kong",
      degree: "Bachelor of Science in Computer Science",
      period: "Sep. 2017 – May 2022",
      location: "Hong Kong",
      details:<a href="https://www.cse.cuhk.edu.hk/~qdou/team.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
      PI: Prof. Qi Dou
    </a>
    }
  ];

  return (
    <section id="education" className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-900 border-b-2 border-blue-900 pb-2">Education</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-4 border-blue-700 pl-4 py-1">
            <div className="flex flex-col md:flex-row justify-between">
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <span className="text-gray-600">{edu.period}</span>
            </div>
            <p className="text-lg">{edu.degree}</p>
            <div className="flex justify-between">
              <p className="text-gray-700">{edu.location}</p>
              {edu.details && <p className="italic">{edu.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

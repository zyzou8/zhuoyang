export default function ResearchInterests() {
  const interests = [
    {
      area: "Multi-agent LLM Systems",
      description: "Developing collaborative AI systems where multiple language models work together to solve complex problems, critique research, and generate improved solutions."
    },
    {
      area: "Deep Reasoning within LLMs",
      description: "Enhancing the explainability and trustworthiness of large language models to make them more reliable for critical applications in science and healthcare."
    },
    {
      area: "LLM Applications in Healthcare",
      description: "Applying advanced language model methodologies to clinical decision support, disease prediction, and personalized medicine challenges."
    }
  ];

  return (
    <section id="research-interests" className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-900 border-b-2 border-blue-900 pb-2">Research Interests</h2>
      
      <p className="mb-4">
        My research focuses on advancing LLMs, particularly in multi-agent collaboration and deep reasoning capabilities, 
        with an emphasis on real-world scientific and healthcare applications.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {interests.map((interest, index) => (
          <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">{interest.area}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Publications() {
  const publications = [
      {
      title: "DIAGPaper: Diagnosing Valid and Specific Weaknesses in Scientific Papers via Multi-Agent Reasoning",
      authors: "Zhuoyang Zou, Wenpeng Yin, et al.",
      venue: "ACL 2026 Conference Submission",
      year: "2026",
      link: "https://arxiv.org/abs/2601.07611"
    },
    {
      title: "Optimizing Deep Learning Models: CNN-RNN Augmentation with Grad-CAM Analysis for Predicting Pneumonitis from Pre-Treatment CT Images",
      authors: "Z. Zou, P.T. Teo, A. Yalamanchili, M. Abazeed",
      venue: "International Journal of Radiation Oncology, Biology, Physics",
      year: "2024",
      link: "https://www.redjournal.org/article/S0360-3016(24)02234-X/fulltext"
    },
    {
      title: "AAAR-1.0: Assessing AI's Potential to Assist Research",
      authors: "Renze Lou, Hanzi Xu, Zhuoyang Zou, et al.",
      venue: "ICML 2025 Conference Submission. Workshop Best Paper Award",
      year: "2025",
      link: "https://arxiv.org/pdf/2410.22394"
    },
    {
      title: "HRScene: How Far Are VLMs from Effective High-Resolution Image Understanding?",
      authors: "Yusen Zhang, Wenliang Zheng, Zhuoyang Zou, et al.",
      venue: "ICCV 2025 Conference Submission",
      year: "2025",
      link: "https://arxiv.org/abs/2504.18406"
    }
  ];

  return (
    <section id="publications" className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-900 border-b-2 border-blue-900 pb-2">Publications</h2>
      
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="border-l-4 border-green-700 pl-4 py-2">
            <h3 className="text-lg font-semibold">{pub.title}</h3>
            <p className="italic">{pub.authors}</p>
            <p>
              {pub.venue} 
              {pub.year && <span>, {pub.year}</span>}
            </p>
            <a href={pub.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              [Link]
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

import { FaTrophy } from 'react-icons/fa';

const awards = [
  {
    title: "ICDS Rising Researcher Award",
    org: "Penn State Institute for Computational and Data Sciences",
    detail: "Semester stipend and tuition support · Award ID: ICDS_RR26_030179",
    year: "2026",
    link: "https://www.icds.psu.edu/",
  },
  {
    title: "Workday AI PhD Fellowship",
    org: "Workday",
    detail: "$100,000 grant",
    year: "2026",
  },
  {
    title: "NSF Research Traineeship Fellow",
    org: "Linguistic Diversity Across the Lifespan (LinDiv), NSF #2125865",
    year: "2026 – 2027",
    link: "https://lindiv.la.psu.edu/trainee-cohort/",
  },
  {
    title: "Workshop Best Paper Award",
    org: "ICML 2025 · AAAR-1.0: Assessing AI's Potential to Assist Research",
    year: "2025",
    link: "https://arxiv.org/abs/2410.22394",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">Awards &amp; Honors</h2>

      <ul className="space-y-4">
        {awards.map((award, index) => (
          <li key={index} className="flex gap-4 items-start">
            <FaTrophy className="text-gray-400 mt-1 flex-shrink-0" size={16} />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                {award.link ? (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-gray-900 hover:text-gray-600 hover:underline"
                  >
                    {award.title}
                  </a>
                ) : (
                  <span className="text-base font-semibold text-gray-900">{award.title}</span>
                )}
                <span className="text-xs text-gray-400">{award.year}</span>
              </div>
              <p className="text-sm text-gray-600 mt-0.5">{award.org}</p>
              {award.detail && <p className="text-xs text-gray-500 mt-0.5">{award.detail}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

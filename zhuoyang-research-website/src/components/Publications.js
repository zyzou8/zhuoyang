import { getImagePath } from '../utils/imagePath';

const publications = [
  {
    title: "AI-Enabled Automated Scaffolding for Undergraduate Students' Learning to Debug and Reason",
    authors: ["Brian Belland", "Wenpeng Yin", "Zhuoyang Zou", "Jack Mussoline", "Chanmin Kim"],
    venue: "AI4HE @ CSEDU 2026",
    venueShort: "AI4HE",
    year: "2026",
    arxiv: null,
    pdf: null,
    color: "bg-slate-100 text-slate-700",
    thumb: "kim.png",
  },
  {
    title: "Bridging the Know-Act Gap via Task-Level Autoregressive Reasoning",
    authors: ["JJ Ahn", "R Kamoi", "B Atil", "R Lou", "WW Kang", "H Park", "SSS Das", "Zhuoyang Zou", "X Lu", "et al."],
    venue: "arXiv",
    venueShort: "arXiv",
    year: "2026",
    arxiv: "https://arxiv.org/abs/2603.22619",
    pdf: "https://arxiv.org/pdf/2603.22619",
    color: "bg-slate-100 text-slate-700",
    thumb: "DeIllusinLLM.png",
  },
  {
    title: "M2-Verify: A Large-Scale Multidomain Benchmark for Checking Multimodal Claim Consistency",
    authors: ["A Ansari", "DC Zhang", "Zhuoyang Zou", "W Yin", "D Lee"],
    venue: "arXiv",
    venueShort: "arXiv",
    year: "2026",
    arxiv: "https://arxiv.org/abs/2604.01306",
    pdf: "https://arxiv.org/pdf/2604.01306",
    color: "bg-slate-100 text-slate-700",
    thumb: "M2_Verify.png",
  },
  {
    title: "DIAGPaper: Diagnosing Valid and Specific Weaknesses in Scientific Papers via Multi-Agent Reasoning",
    authors: ["Zhuoyang Zou", "A Ansari", "DC Zhang", "D Lee", "Wenpeng Yin"],
    venue: "arXiv",
    venueShort: "arXiv",
    year: "2026",
    arxiv: "https://arxiv.org/abs/2601.07611",
    pdf: "https://arxiv.org/pdf/2601.07611",
    color: "bg-slate-100 text-slate-700",
    thumb: "DIAGPaper.jpg",
  },
  {
    title: "HRScene: How Far Are VLMs from Effective High-Resolution Image Understanding?",
    authors: ["Yusen Zhang", "Wenliang Zheng", "A Madasu", "P Shi", "R Kamoi", "H Zhou", "Zhuoyang Zou", "S Zhao", "et al."],
    venue: "ICCV 2025",
    venueShort: "ICCV",
    year: "2025",
    arxiv: "https://arxiv.org/abs/2504.18406",
    pdf: "https://arxiv.org/pdf/2504.18406",
    color: "bg-slate-100 text-slate-700",
    thumb: "HRScene.png",
  },
  {
    title: "AAAR-1.0: Assessing AI's Potential to Assist Research",
    authors: ["Renze Lou", "Hanzi Xu", "S Wang", "J Du", "R Kamoi", "X Lu", "J Xie", "Y Sun", "Y Zhang", "JJ Ahn", "Zhuoyang Zou", "et al."],
    venue: "ICML 2025 · Workshop Best Paper",
    venueShort: "ICML",
    year: "2024",
    arxiv: "https://arxiv.org/abs/2410.22394",
    pdf: "https://arxiv.org/pdf/2410.22394",
    color: "bg-slate-100 text-slate-700",
    thumb: "AAAR.png",
  },
  {
    title: "Optimizing Deep Learning Models: CNN-RNN Augmentation with Grad-CAM Analysis for Predicting Pneumonitis from Pre-Treatment CT Images",
    authors: ["Zhuoyang Zou", "P.T. Teo", "A. Yalamanchili", "M. Abazeed"],
    venue: "Int. Journal of Radiation Oncology",
    venueShort: "IJROBP",
    year: "2024",
    arxiv: null,
    pdf: "https://www.redjournal.org/article/S0360-3016(24)02234-X/fulltext",
    color: "bg-slate-100 text-slate-700",
    thumb: "iTox_website.png",
  },
];

const VENUE_STYLE = {
  ICML:   { bg: '#334155', text: '#fff' },
  ICCV:   { bg: '#334155', text: '#fff' },
  arXiv:  { bg: '#334155', text: '#fff' },
  IJROBP: { bg: '#334155', text: '#fff' },
  AI4HE:  { bg: '#334155', text: '#fff' },
};

function PaperThumb({ venueShort, year, thumb }) {
  if (thumb) {
    return (
      <img src={getImagePath(thumb)} alt={venueShort} className="w-28 h-20 rounded border border-gray-200 object-cover flex-shrink-0 shadow-sm" />
    );
  }
  const s = VENUE_STYLE[venueShort] || VENUE_STYLE['arXiv'];
  return (
    <div
      className="w-28 h-20 rounded border border-gray-200 flex flex-col overflow-hidden flex-shrink-0 shadow-sm"
      style={{ backgroundColor: s.bg }}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-0.5">
        <span className="text-sm font-extrabold tracking-widest" style={{ color: s.text }}>{venueShort}</span>
        <span className="text-xs opacity-70" style={{ color: s.text }}>{year}</span>
      </div>
      <div className="h-4 bg-white flex flex-col justify-center gap-0.5 px-2">
        {[100, 75, 55].map((w, i) => (
          <div key={i} className="rounded-full" style={{ height: 2, width: `${w}%`, backgroundColor: '#d1d5db' }} />
        ))}
      </div>
    </div>
  );
}

function AuthorList({ authors }) {
  return (
    <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
      {authors.map((a, i) => (
        <span key={i}>
          {a === "Zhuoyang Zou" ? <strong className="text-gray-800">{a}</strong> : a}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2">Publications</h2>

      <div className="space-y-5">
        {publications.map((pub, index) => (
          <div key={index} className="flex gap-4 group">
            {/* Thumbnail */}
            <div className="pt-1">
              <PaperThumb venueShort={pub.venueShort} year={pub.year} thumb={pub.thumb} />
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <a
                href={pub.arxiv || pub.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-orange-900 hover:text-orange-600 hover:underline leading-snug"
              >
                {pub.title}
              </a>

              <AuthorList authors={pub.authors} />

              <div className="flex flex-wrap items-center gap-2 mt-1.5">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${pub.color}`}>
                  {pub.venue}
                </span>
                <span className="text-xs text-gray-400">{pub.year}</span>
              </div>

              <div className="flex gap-2 mt-2">
                {pub.arxiv && (
                  <a
                    href={pub.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-0.5 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    arXiv
                  </a>
                )}
                {pub.pdf && (
                  <a
                    href={pub.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-0.5 rounded border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                  >
                    PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';

const GLOBE_SRC = "//mapmyvisitors.com/globe.js?d=HaNGZGifjzp2ZUbs2C9aEPYTuZT8ofbd-RIKJqY9XTk";
const VIEWS_BADGE = "https://visitor-badge.laobi.icu/badge?page_id=zyzou8.zhuoyang&left_text=Page%20views&left_color=%23334155&right_color=%236b7280";

export default function VisitorMap() {
  const containerRef = useRef(null);

  useEffect(() => {
    // The widget inserts the globe right after its own <script id="mmvst_globe">,
    // so the script must be added inside this container (and only once).
    const container = containerRef.current;
    if (!container || document.getElementById('mmvst_globe')) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'mmvst_globe';
    script.src = GLOBE_SRC;
    container.appendChild(script);
  }, []);

  return (
    <div>
      <h2 className="text-base font-bold text-gray-800 mb-3">Visitors</h2>
      <div ref={containerRef} className="mx-auto" style={{ maxWidth: 240 }} />
      <div className="flex justify-center mt-3">
        <img src={VIEWS_BADGE} alt="Page views" />
      </div>
    </div>
  );
}

import { useEffect, useRef } from 'react';

const GLOBE = {
  id: "mmvst_globe",
  src: "//mapmyvisitors.com/globe.js?d=HaNGZGifjzp2ZUbs2C9aEPYTuZT8ofbd-RIKJqY9XTk",
};
const FLAT_MAP = {
  id: "mapmyvisitors",
  src: "https://mapmyvisitors.com/map.js?cl=c1b1b1&w=a&t=tt&d=JjXUs9TR6cK_MnENsQeq8koTy3QQZoq8uCKH_gSGSzg&co=6e8291&ct=ffd7d7&cmo=568b9b&cmn=a37cb7",
};
const VIEWS_BADGE = "https://visitor-badge.laobi.icu/badge?page_id=zyzou8.zhuoyang&left_text=Page%20views&left_color=%23334155&right_color=%236b7280";

// MapMyVisitors widgets insert themselves right after their own <script id=...>,
// so the script must be added inside the target container (and only once).
function MapMyVisitorsWidget({ id, src, maxWidth }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || document.getElementById(id)) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = id;
    script.src = src;
    container.appendChild(script);
  }, [id, src]);

  return <div ref={containerRef} className="mx-auto" style={{ maxWidth }} />;
}

export default function VisitorMap() {
  return (
    <div>
      <h2 className="text-base font-bold text-gray-800 mb-3">Visitors</h2>
      <MapMyVisitorsWidget {...GLOBE} maxWidth={240} />
      <div className="mt-4">
        <MapMyVisitorsWidget {...FLAT_MAP} />
      </div>
      <div className="flex justify-center mt-3">
        <img src={VIEWS_BADGE} alt="Page views" />
      </div>
    </div>
  );
}

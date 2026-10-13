import { useEffect, useRef } from 'react';

const GLOBE = {
  id: "mmvst_globe",
  src: "//mapmyvisitors.com/globe.js?d=HaNGZGifjzp2ZUbs2C9aEPYTuZT8ofbd-RIKJqY9XTk",
};

// The MapMyVisitors widget inserts itself right after its own <script id=...>,
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
    </div>
  );
}

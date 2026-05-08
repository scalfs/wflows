// Stats.jsx — stat-pill row on dark "room"
function Stats() {
  const items = [
    { num: '10×', lbl: 'faster pipelines' },
    { num: '24/7', lbl: 'always on' },
    { num: '3×', lbl: 'more replies' },
    { num: '<2m', lbl: 'time to first response' },
  ];
  return (
    <section className="section-dark">
      <div className="container">
        <div className="stat-row">
          {items.map((s, i) => (
            <div key={i} className="stat-pill">
              <span className="num">{s.num}</span>
              <span className="lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Stats = Stats;

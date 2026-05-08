// CTA.jsx — primary "build with us" closing block on blue "room"
function CTA({ onCta }) {
  return (
    <section className="section-blue">
      <div className="container">
        <div className="cta-block">
          <span className="kicker">Start building</span>
          <h2 style={{color:'#fff'}}>Let's design your flow.</h2>
          <p className="subhead" style={{color:'rgba(255,255,255,0.85)', maxWidth:560}}>
            30 minutes. No deck. We'll map one revenue motion and ship a working agent in week one.
          </p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center'}}>
            <button className="btn btn-dark btn-lg" onClick={onCta}>Book a session →</button>
            <button className="btn btn-secondary btn-lg">Browse Flows</button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CTA = CTA;

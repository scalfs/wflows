// Hero.jsx — headline + bento visual + ghost shapes
function Hero({ onCta }) {
  return (
    <section className="hero">
      <div className="hero-ghost g1"></div>
      <div className="hero-ghost g2"></div>
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="kicker">AI agents · GTM infra</span>
            <h1>Win More.<br/>Work Less.</h1>
            <p className="subhead hero-sub">
              We design AI-driven infrastructure for sales, service, and growth. From omnichannel automation to intelligent voice systems — we help you move with purpose, and win continuously.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg" onClick={onCta}>Build your first flow →</button>
              <button className="btn btn-secondary btn-lg">Talk to us</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-bento">
              <div className="cell c1">
                <div>
                  <div className="cell-label">Pipeline · Live</div>
                  <div className="cell-title">+38% velocity</div>
                  <div className="cell-sub">7-day rolling, all sources</div>
                </div>
                <div className="mini-chart">
                  {[44,28,52,36,68,40,72,48,82,60].map((h,i)=>(
                    <div key={i} className="bar" style={{height: h+'%'}}/>
                  ))}
                </div>
              </div>
              <div className="cell c2">
                <div>
                  <div className="cell-label">Voice agent</div>
                  <div className="cell-title">Always on</div>
                </div>
                <div className="cell-sub">324 calls handled today</div>
              </div>
              <div className="cell c3">
                <div>
                  <div className="cell-label">Outbound</div>
                  <div className="cell-title">3.2× reply rate</div>
                </div>
                <div className="cell-sub">vs. previous 30 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

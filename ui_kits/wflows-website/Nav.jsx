// Nav.jsx — sticky top navigation with scroll-shadow
function Nav({ onCta }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <div className="nav-logo" style={{display:'flex', alignItems:'center', gap:10}}>
            <img src="assets/wflows-mark.svg" alt="WFlows" style={{height:32, width:'auto'}} />
            <span style={{fontFamily:'Outfit, sans-serif', fontWeight:600, fontSize:18, letterSpacing:'-0.02em', color:'var(--wf-foreground)'}}>WFlows</span>
          </div>
          <div className="nav-links">
            <span className="nav-link">Platform</span>
            <span className="nav-link">Flows</span>
            <span className="nav-link">Customers</span>
            <span className="nav-link">Pricing</span>
            <span className="nav-link">Docs</span>
          </div>
          <div className="nav-cta-group">
            <button className="btn btn-ghost btn-sm">Sign in</button>
            <button className="btn btn-primary btn-sm" onClick={onCta}>Build your flow →</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;

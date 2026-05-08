// Footer.jsx — dark footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:16}}>
              <img src="assets/wflows-mark-light.svg" alt="WFlows" style={{height:32, width:'auto'}} />
              <span style={{fontFamily:'Outfit, sans-serif', fontWeight:600, fontSize:18, letterSpacing:'-0.02em', color:'#f6fafc'}}>WFlows</span>
            </div>
            <p>Quiet automation. Loud results. AI agents and GTM infrastructure for B2B teams that mean it.</p>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <a>Flows</a><a>Voice</a><a>Pipeline</a><a>Integrations</a>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <a>TradeFlows</a><a>Inbound</a><a>Outbound</a><a>Service</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a>About</a><a>Customers</a><a>Pricing</a><a>Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 WFlows. All rights reserved.</span>
          <span>São Paulo · Remote · wflows.ai</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;

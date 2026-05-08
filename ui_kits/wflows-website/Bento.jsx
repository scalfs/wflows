// Bento.jsx — 6-col asymmetric feature grid
function NodeIcon({ stroke }) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
         stroke={stroke || 'currentColor'} strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2"/>
      <circle cx="18" cy="8" r="2"/>
      <circle cx="12" cy="18" r="2"/>
      <path d="M7.5 6.6 Q12 7.5 16.5 7.6"/>
      <path d="M17.5 9.5 Q15 14 13 16.4"/>
      <path d="M11 16.5 Q8 13 6.7 7.7"/>
    </svg>
  );
}

function Bento() {
  return (
    <section className="section-cool">
      <div className="container">
        <span className="kicker">Platform</span>
        <h2 className="section-title">Quiet systems.<br/>Loud results.</h2>
        <p className="subhead section-sub" style={{marginBottom: 56}}>
          Flows are reusable orchestration units — agents, integrations, and logic that
          deploy in days, not quarters. Compose what you need, ship it once, run it forever.
        </p>
        <div className="bento">
          <div className="bento-card colspan-3 rowspan-2 brand">
            <div>
              <div className="b-icon"><NodeIcon /></div>
              <div className="b-title">Deploy Flows</div>
              <div className="b-sub">
                Pre-built and custom orchestration for the GTM stack. Connect any tool.
                Move logic out of spreadsheets and into systems that run themselves.
              </div>
            </div>
            <div style={{display:'flex', gap:8, marginTop:24}}>
              <span style={{padding:'6px 12px', borderRadius:9999, background:'rgba(255,255,255,0.18)', fontSize:12}}>HubSpot</span>
              <span style={{padding:'6px 12px', borderRadius:9999, background:'rgba(255,255,255,0.18)', fontSize:12}}>Salesforce</span>
              <span style={{padding:'6px 12px', borderRadius:9999, background:'rgba(255,255,255,0.18)', fontSize:12}}>Slack</span>
              <span style={{padding:'6px 12px', borderRadius:9999, background:'rgba(255,255,255,0.18)', fontSize:12}}>+40</span>
            </div>
          </div>
          <div className="bento-card colspan-3">
            <div>
              <div className="b-icon"><NodeIcon /></div>
              <div className="b-title">Voice Intelligence</div>
              <div className="b-sub">Inbound and outbound voice agents that sound like your best rep — every time.</div>
            </div>
          </div>
          <div className="bento-card colspan-3 dark">
            <div>
              <div className="b-icon"><NodeIcon /></div>
              <div className="b-title">Pipeline OS</div>
              <div className="b-sub">Forecasting, enrichment, and routing — observable, auditable, automatic.</div>
            </div>
          </div>
          <div className="bento-card colspan-2">
            <div>
              <div className="b-icon"><NodeIcon /></div>
              <div className="b-title">Omnichannel</div>
            </div>
            <div className="b-sub">WhatsApp, email, voice, web — one conversation, every channel.</div>
          </div>
          <div className="bento-card colspan-2">
            <div>
              <div className="b-icon"><NodeIcon /></div>
              <div className="b-title">Insight Engine</div>
            </div>
            <div className="b-sub">Every interaction becomes a signal you can act on tomorrow.</div>
          </div>
          <div className="bento-card colspan-2">
            <div>
              <div className="b-icon"><NodeIcon /></div>
              <div className="b-title">Always On</div>
            </div>
            <div className="b-sub">No queue, no shift change. The system is the team.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Bento = Bento;

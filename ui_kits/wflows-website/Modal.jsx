// Modal.jsx — "Build your flow" capture modal (interactive demo)
function Modal({ open, onClose }) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => { if (open) setStep(0); }, [open]);
  if (!open) return null;

  const steps = [
    { title: "What revenue motion needs a flow?", options: ["Outbound to enterprise", "Inbound qualification", "Voice for support", "Pipeline hygiene"] },
    { title: "Which stack are we plugging into?", options: ["HubSpot + Slack", "Salesforce", "Pipedrive", "Custom / other"] },
    { title: "When are you trying to ship?", options: ["This week", "This month", "This quarter", "Just exploring"] },
  ];
  const s = steps[step];
  const isFinal = step >= steps.length;

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(10,21,32,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 100, padding: 24,
      animation: 'fadeIn 200ms ease-out',
    }} onClick={onClose}>
      <div style={{
        background: '#fff', borderRadius: 32, width: 'min(560px, 100%)',
        padding: 40, boxShadow: 'var(--wf-shadow-floating)',
      }} onClick={(e) => e.stopPropagation()}>
        {!isFinal && (
          <>
            <div style={{display:'flex', gap:6, marginBottom: 28}}>
              {steps.map((_, i) => (
                <div key={i} style={{
                  flex: 1, height: 4, borderRadius: 9999,
                  background: i <= step ? 'var(--wf-primary)' : 'var(--wf-border)',
                  transition: 'background 200ms var(--ease-out)',
                }}/>
              ))}
            </div>
            <span className="kicker">Step {step+1} of {steps.length}</span>
            <h3 style={{marginTop: 8, marginBottom: 24}}>{s.title}</h3>
            <div style={{display:'grid', gap:10}}>
              {s.options.map((o, i) => (
                <button key={i} className="btn btn-secondary" style={{
                  justifyContent: 'space-between', padding: '14px 20px', fontSize: 15,
                }} onClick={() => setStep(step+1)}>
                  <span>{o}</span><span style={{opacity:0.5}}>→</span>
                </button>
              ))}
            </div>
          </>
        )}
        {isFinal && (
          <div style={{textAlign:'center', padding:'12px 0'}}>
            <div style={{
              width:64, height:64, borderRadius:9999, background:'var(--wf-primary)',
              margin:'0 auto 24px', display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'var(--wf-shadow-glow)',
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 style={{marginBottom: 12}}>You're in.</h3>
            <p style={{color:'var(--wf-muted-foreground)', marginBottom: 24}}>
              We'll email you within 24 hours with a session link and a one-page brief tailored to your motion.
            </p>
            <button className="btn btn-primary btn-lg" onClick={onClose}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
}
window.Modal = Modal;

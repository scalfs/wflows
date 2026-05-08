// Testimonial.jsx — quote + product screenshot card on cream "room"
function Testimonial() {
  return (
    <section className="section-cream">
      <div className="container">
        <div className="testimonial">
          <div>
            <span className="kicker">Customer story</span>
            <p className="testimonial-quote">
              "We replaced four SDR headcount and a 9-vendor stack with three Flows.
              Reply rates tripled. The team finally does the work only humans should."
            </p>
            <div className="testimonial-attr">
              <div className="attr-avatar">MR</div>
              <div>
                <div className="attr-name">Marina Reis</div>
                <div className="attr-role">VP Revenue · Praxis Industrial</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="tc-screen">
              <div className="row med"></div>
              <div className="row short"></div>
              <div className="row"></div>
              <div className="row med"></div>
              <div className="row short"></div>
              <div className="stat"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Testimonial = Testimonial;

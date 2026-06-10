import { Link } from 'react-router-dom'

export default function Give() {
  return (
    <main data-screen-label="Give">
      <section className="pagehero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span>Give</span></div>
          <span className="eyebrow">Partner with the mission</span>
          <h1>Your generosity <em>raises a generation</em></h1>
          <p className="lead">Every gift helps us reach more people across PEI, BC, and soon Nova Scotia — and beyond. Give securely, from anywhere.</p>
        </div>
      </section>

      <section className="section visit">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <span className="eyebrow">Ways to give</span>
              <h2 className="title">Choose what works for you</h2>
            </div>
          </div>
          <div className="steps">
            <div className="step">
              <div className="num">♥</div>
              <h3>Give online</h3>
              <p>The fastest way to give securely — one-time or recurring, from any device.</p>
              <a className="btn btn-sm" href="#" style={{ marginTop: '16px' }}>Give Online <span className="arrow">→</span></a>
            </div>
            <div className="step">
              <div className="num">✉</div>
              <h3>In person</h3>
              <p>Drop your gift in the offering at any campus on a Sunday — every gift matters.</p>
            </div>
            <div className="step">
              <div className="num">⟳</div>
              <h3>Recurring giving</h3>
              <p>Set up a regular gift to faithfully partner with the mission all year round.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section give" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="give-inner">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,.85)', justifyContent: 'center' }}>Every gift makes a difference</span>
            <h2>Ready to give today?</h2>
            <p className="lead">Thank you for partnering with us to raise a spirit-filled generation across Canada and beyond.</p>
            <div className="btn-row">
              <a className="btn btn-light" href="#">Give Online <span className="arrow">→</span></a>
              <Link className="btn btn-ghost" to="/locations" style={{ '--fg': '#fff', '--bd': 'rgba(255,255,255,.5)' }}>Give in person</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

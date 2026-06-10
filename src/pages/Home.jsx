import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main data-screen-label="Home">
      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">Welcome home</span>
            <h1 className="display">A people driven by purpose — raising a <em>spirit‑filled</em> generation.</h1>
            <p className="lead">Wherever you are on your journey, there's a place for you at Lighthouse. Come as you are — in person or online.</p>
            <div className="hero-actions">
              <Link className="btn" to="/plan-a-visit">Plan Your Visit <span className="arrow">→</span></Link>
              <Link className="btn btn-ghost" to="/watch"><span className="btn-play"><span className="ic">▶</span></span> Watch Online</Link>
            </div>
            <div className="hero-meta">
              <div className="m"><span className="k">Gather</span><span className="v">Sundays · 10:00 AM</span></div>
              <div className="m"><span className="k">Locations</span><span className="v">PEI · BC · NS soon</span></div>
            </div>
          </div>
          <div className="hero-media">
            <div className="ph"><span className="cap">photo · congregation in worship</span></div>
            <div className="float">
              <span className="ico">🕯️</span>
              <span className="t"><b>New here?</b><br />We'll save you a seat and walk you in.</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE HUB */}
      <section className="section visit">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <span className="eyebrow">Find your way in</span>
              <h2 className="title">Everything you need, one tap away</h2>
              <p className="lead">However you'd like to connect with Lighthouse, start here.</p>
            </div>
          </div>

          <div className="hub">
            <Link className="hub-card" to="/plan-a-visit">
              <span className="hc-ico">🕯️</span>
              <span className="hc-k">New here?</span>
              <h3>Plan a Visit</h3>
              <p>Know exactly what to expect before you walk through the doors on Sunday.</p>
              <span className="hc-go">What to expect <span className="arrow">→</span></span>
            </Link>
            <Link className="hub-card" to="/watch">
              <span className="hc-ico">▶</span>
              <span className="hc-k">Anytime, anywhere</span>
              <h3>Watch Online</h3>
              <p>Stream Sunday live or catch up on recent messages from the current series.</p>
              <span className="hc-go">Watch now <span className="arrow">→</span></span>
            </Link>
            <Link className="hub-card" to="/locations">
              <span className="hc-ico">📍</span>
              <span className="hc-k">One church, many shores</span>
              <h3>Locations</h3>
              <p>Find a campus near you across PEI and BC — with Nova Scotia coming soon.</p>
              <span className="hc-go">Find a campus <span className="arrow">→</span></span>
            </Link>
            <Link className="hub-card" to="/about">
              <span className="hc-ico">✦</span>
              <span className="hc-k">Who we are</span>
              <h3>About Us</h3>
              <p>Our mission to raise kingdom influencers and what we believe as a family.</p>
              <span className="hc-go">Read our story <span className="arrow">→</span></span>
            </Link>
            <Link className="hub-card" to="/events">
              <span className="hc-ico">📅</span>
              <span className="hc-k">What's happening</span>
              <h3>Events</h3>
              <p>Worship nights, first-timer lunches and gatherings for every season of life.</p>
              <span className="hc-go">See the calendar <span className="arrow">→</span></span>
            </Link>
            <Link className="hub-card" to="/give">
              <span className="hc-ico">♥</span>
              <span className="hc-k">Partner with the mission</span>
              <h3>Give</h3>
              <p>Your generosity helps us reach more people across Canada — and beyond.</p>
              <span className="hc-go">Ways to give <span className="arrow">→</span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE TIMES STRIP */}
      <section className="section locations">
        <div className="wrap">
          <div className="times-strip">
            <div>
              <span className="eyebrow" style={{ color: '#8fa9e6' }}>Gather with us</span>
              <h2 className="title" style={{ marginTop: '12px' }}>Service times</h2>
              <p className="lead">Join us in person at your nearest campus, or stream the service live from anywhere.</p>
              <Link className="btn btn-light" to="/watch" style={{ marginTop: '18px' }}>Watch Online <span className="arrow">→</span></Link>
            </div>
            <div className="ts-times">
              <div className="time-row"><span className="day">Sunday</span><span className="meta">Worship Service</span><span className="tm">10:00 AM</span></div>
              <div className="time-row"><span className="day">Wednesday</span><span className="meta">Midweek Bible Study</span><span className="tm">7:00 PM</span></div>
              <div className="time-row"><span className="day">Friday</span><span className="meta">Prayer &amp; Encounter</span><span className="tm">7:30 PM</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* GIVE */}
      <section className="section give">
        <div className="wrap">
          <div className="give-inner">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,.85)', justifyContent: 'center' }}>Partner with the mission</span>
            <h2>Your generosity raises a generation.</h2>
            <p className="lead">Every gift helps us reach more people across PEI, BC, and soon Nova Scotia — and beyond. Give securely, from anywhere.</p>
            <div className="btn-row">
              <Link className="btn btn-light" to="/give">Give Online <span className="arrow">→</span></Link>
              <Link className="btn btn-ghost" to="/give" style={{ '--fg': '#fff', '--bd': 'rgba(255,255,255,.5)' }}>Ways to Give</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

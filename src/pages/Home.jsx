import { Link } from 'react-router-dom'
import Data from '../../data.json';

export default function Home() {
  const data = Data.home;

  return (
    <main data-screen-label="Home">
      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow">{data.pageHero.eyebrow}</span>
            <h1 dangerouslySetInnerHTML={{ __html: data.pageHero.h1 }} className="display"></h1>
            <p className="lead">{data.pageHero.leadParagraph}</p>
            <div className="hero-actions">
              <Link className="btn" to="/plan-a-visit">Plan Your Visit <span className="arrow">→</span></Link>
              <Link className="btn btn-ghost" to="/watch"><span className="btn-play"><span className="ic">▶</span></span> Watch Online</Link>
            </div>
            {/* <div className="hero-meta">
              <div className="m"><span className="k">Gather</span><span className="v">Sundays · 10:00 AM</span></div>
              <div className="m"><span className="k">Locations</span><span className="v">PEI · BC · NS soon</span></div>
            </div> */}
          </div>
          <div className="hero-media">
            <div
              className="ph"
              style={{
                backgroundImage: `url('${data.heroImg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}>
                  <span className="cap">photo · congregation in worship</span>
            </div>
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

          {data?.infoCards.length &&
            <div className="hub">
              {data.infoCards.map(card => (
                <Link className="hub-card" to={card.link}>
                  <span className="hc-ico"><i className={card.icon}></i></span>
                  <span className="hc-k">{card.cardBrow}</span>
                  <h3>{card.cardTitle}</h3>
                  <p>{card.cardText}</p>
                  <span className="hc-go">{card.cardCtaText} <span className="arrow">→</span></span>
                </Link>
              ))}
            </div>
          }
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

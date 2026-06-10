import { Link } from 'react-router-dom'

export default function Watch() {
  return (
    <main data-screen-label="Watch">
      <section className="pagehero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span>Watch</span></div>
          <span className="eyebrow">Watch anytime, anywhere</span>
          <h1>Messages &amp; <em>live stream</em></h1>
          <p className="lead">Stream the Sunday service live from anywhere, or catch up on recent messages whenever it works for you.</p>
          <div className="ph-actions">
            <a className="btn" href="#"><span className="pulse" style={{ position: 'static', display: 'inline-block' }}></span> Watch Live Sunday <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      <section className="section watch">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <span className="eyebrow">Now playing</span>
              <h2 className="title">Current series &amp; recent messages</h2>
            </div>
            <a className="btn btn-light" href="#">All messages <span className="arrow">→</span></a>
          </div>

          <div className="watch-grid">
            <div className="feature">
              <div className="play-wrap">
                <div className="ph beacon"><span className="cap">video · latest message</span></div>
                <div className="playbtn">▶</div>
              </div>
              <div className="f-meta">
                <span className="f-series">Current Series · Kingdom Influence</span>
                <h3>Built to Shine</h3>
                <p className="f-sub">Ps. [Name] · 38 min · This past Sunday</p>
              </div>
            </div>

            <div className="recent">
              <div className="r-title">Recent messages</div>
              <div className="r-item">
                <div className="ph thumb beacon"><span className="cap" style={{ fontSize: '.62rem' }}>▶</span></div>
                <div><div className="ri-t">A Generation on Fire</div><div className="ri-s">Kingdom Influence · 41 min</div></div>
              </div>
              <div className="r-item">
                <div className="ph thumb beacon"><span className="cap" style={{ fontSize: '.62rem' }}>▶</span></div>
                <div><div className="ri-t">Carrying the Light</div><div className="ri-s">Kingdom Influence · 36 min</div></div>
              </div>
              <div className="r-item">
                <div className="ph thumb beacon"><span className="cap" style={{ fontSize: '.62rem' }}>▶</span></div>
                <div><div className="ri-t">Rooted &amp; Sent</div><div className="ri-s">Foundations · 44 min</div></div>
              </div>
              <a className="btn btn-ghost btn-sm" href="#" style={{ marginTop: '8px', color: '#cdd8ec', borderColor: 'rgba(255,255,255,.22)' }}>All messages <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

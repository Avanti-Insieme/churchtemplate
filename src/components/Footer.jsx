import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="cols">
          <div className="f-brand">
            <img src="/assets/logo.png" alt="Lighthouse Gospel Ministry" />
            <p>Raising a spirit-filled generation and kingdom influencers across Canada.</p>
            <div className="social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>
          <div>
            <h4>Visit</h4>
            <Link to="/plan-a-visit">Plan a Visit</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/plan-a-visit#times">Service Times</Link>
            <Link to="/watch">Watch Online</Link>
          </div>
          <div>
            <h4>Locations</h4>
            <Link to="/locations">Prince Edward Island</Link>
            <Link to="/locations">British Columbia</Link>
            <Link to="/locations">Nova Scotia (soon)</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <Link to="/about">About Us</Link>
            <Link to="/events">Events</Link>
            <Link to="/give">Give</Link>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="f-bottom">
          <span>© 2026 Lighthouse Gospel Ministry. All rights reserved.</span>
          <span>Sundays · 10:00 AM · In person &amp; online</span>
        </div>
      </div>
    </footer>
  )
}

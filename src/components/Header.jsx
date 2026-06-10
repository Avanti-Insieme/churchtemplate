import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <Link className="brand" to="/">
          <img src="/assets/logo.png" alt="Lighthouse Gospel Ministry" />
        </Link>
        <nav className="nav">
          <NavLink to="/plan-a-visit">Plan a Visit</NavLink>
          <NavLink to="/watch">Watch</NavLink>
          <NavLink to="/locations">Locations</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/events">Events</NavLink>
        </nav>
        <div className="cta">
          <Link className="btn btn-ghost btn-sm" to="/give">Give</Link>
          <Link className="btn btn-sm" to="/plan-a-visit">Plan a Visit <span className="arrow">→</span></Link>
        </div>
      </div>
    </header>
  )
}

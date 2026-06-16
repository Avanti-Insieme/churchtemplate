import { Link } from 'react-router-dom';
import Data from '../../data.json';

const EVENTS = [
  { mo: 'Jun', dy: '14', title: 'Community Worship Night', meta: ['7:00 PM', 'PEI Campus'] },
  { mo: 'Jun', dy: '22', title: 'First-Timers Lunch', meta: ['After service', 'BC Campus'] },
  { mo: 'Jul', dy: '02', title: 'Youth & Young Adults Encounter', meta: ['6:30 PM', 'Online & In person'] },
  { mo: 'Jul', dy: '13', title: 'Family Sunday & Potluck', meta: ['After service', 'PEI Campus'] },
  { mo: 'Jul', dy: '25', title: 'Prayer & Encounter Evening', meta: ['7:30 PM', 'All campuses'] },
]

export default function Events() {
  const data = Data.events;
  return (
    <main data-screen-label="Events">
      <section className="pagehero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span>Events</span></div>
          <span className="eyebrow">{data?.pageHero.eyebrow ?? "What's happening"}</span>
          <h1 dangerouslySetInnerHTML={{ __html: data.pageHero.h1 }}></h1>
          <p className="lead">
          {
            data.pageHero.leadParagraph ??
            "Worship nights, first-timer lunches and gatherings for every season of life. There's always a next step at Lighthouse."
          }
          </p>
        </div>
      </section>

      <section className="section events">
        <div className="wrap">
          <div className="event-list">
            {data.items.map((e, i) => (<>
              <div className="event" key={i}>
                <div className="date"><div className="mo">{e.mo}</div><div className="dy">{e.dy}</div></div>
                <div className="ev-body">
                  <h3>{e.title}</h3>
                  <div className="ev-meta">
                    <span>{e.meta[0]}</span><span>·</span><span>{e.meta[1]}</span>
                  </div>
                </div>
                <a className="btn btn-ghost btn-sm ev-cta" href="#">Details</a>
                {/* <div className="more-detail">{e.description}</div> */}
              </div>
                </>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

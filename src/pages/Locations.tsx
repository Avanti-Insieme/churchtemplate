import { Link } from 'react-router-dom'
import Data from '../../data.json';
import { Address, Cta, MeetingTime, PageHero } from '../types';

interface Location {
  image?: string;
  region: string;
  name: string;
  address: Address;
  meetingTimes: MeetingTime[];
  cta: Cta;
  onlineMessage?: OnlineMessage;
}

interface OnlineMessage {
  title: string;
  leadParagraph: string;
  meetingTimes: MeetingTime[];
}

export default function Locations() {
  const hero = Data.locations.pageHero as PageHero;
  const data = Data.locations.locations as Location[];
  const onlineMsg = Data.locations?.onlineMessage as OnlineMessage | undefined;

  return (
    <main data-screen-label="Locations">
      <section className="pagehero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span>Locations</span></div>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>{hero.h1}</h1>
          <p className="lead">{hero.leadParagraph}</p>
        </div>
      </section>

      <section className="section locations">
        <div className="wrap">
          <div className="loc-grid">
            {data.map(location => (
              <>
              <div className="loc-card">
                <div className="ph map"><span className="cap">map · Prince Edward Island</span></div>
                <div className="body">
                  <span className="region">{location.region}</span>
                  <h3>Charlottetown Campus</h3>
                  <p className="addr">{location.address.number} {location.address.street}, {location.address.city}, {location.address.province}</p>
                  {location.meetingTimes.map(time => (
                    <p className="svc">🕙 {time.day} · <b>{time.time}</b></p>
                  ))}
                  <div className="foot"><a className="btn btn-ghost btn-sm" href={location.cta.href}>{location.cta.label} <span className="arrow">→</span></a></div>
                </div>
              </div>
            </>
            ))}
          </div>

          {onlineMsg ?
            <div className="visit-aside" style={{ marginTop: '42px' }}>
              <div>
                <h2 className="title">{onlineMsg.title}</h2>
                <p className="lead">{onlineMsg.leadParagraph}</p>
                <Link className="btn btn-light" to="/watch" style={{ marginTop: '6px' }}>Watch Online <span className="arrow">→</span></Link>
              </div>
              <div className="times">
                {onlineMsg.meetingTimes.map(time => (
                  <div className="time-row">
                    <span className="day">{time.day}</span>
                    <span className="meta">{time.meta}</span>
                    <span className="tm">{time.time}</span>
                  </div>
                ))}
              </div>
            </div>
            : null
          }
        </div>
      </section>
    </main>
  )
}

import { Link } from 'react-router-dom'
import { MeetingTime } from '../types'
import Data from '../../data.json';
import { useEffect, useState } from 'react';

export default function Visit() {
  const [meetingTimes, setMeetingTimes] = useState<MeetingTime[] | undefined>(undefined)
  const data = Data.visit;
  const times = Data.meetingTimes as any[];

  useEffect(() => {
    const v = times
      .map(data => data)
      .filter((meetData: { [key: string]: any }[]) => {
        const key = Object.keys(meetData)[0];
        return key == "pei";
      })[0] as { [key: string]: any };

    if (v) {
      setMeetingTimes(v.pei.meetingTimes);
    }
  }, [times])

  return (
    <main data-screen-label="Plan a Visit">
      <section className="pagehero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link><span className="sep">/</span><span>Plan a Visit</span></div>
          <span className="eyebrow">{data.pageHero.eyebrow}</span>
          <h1 dangerouslySetInnerHTML={{ __html: data.pageHero.h1 }}></h1>
          <p className="lead">{data.pageHero.leadParagraph}</p>
          <div className="ph-actions">
            <Link className="btn" to="/locations">Find your campus <span className="arrow">→</span></Link>
            <Link className="btn btn-ghost" to="/watch"><span className="btn-play"><span className="ic">▶</span></span> Watch a service first</Link>
          </div>
        </div>
      </section>

      <section className="section visit">
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <span className="eyebrow">How a Sunday flows</span>
              <h2 className="title">Three simple steps</h2>
            </div>
          </div>

          <div className="steps">
            <div className="step">
              <div className="num">1</div>
              <h3>Arrive &amp; be welcomed</h3>
              <p>A friendly host meets you at the door, helps with kids check-in, and points you to coffee before the service.</p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>Worship together</h3>
              <p>Around 70 minutes of heartfelt music and a practical, hope-filled message from God's Word.</p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>Connect &amp; belong</h3>
              <p>Stay a while afterward. We'd love to meet you and help you find your people in a group or ministry.</p>
            </div>
          </div>

          <div className="visit-aside" id="times">
            <div>
              <h2 className="title">Service times</h2>
              <p className="lead">Join us in person at your nearest campus, or stream the service live from anywhere.</p>
              <Link className="btn btn-light" to="/watch" style={{ marginTop: '6px' }}>Watch Online <span className="arrow">→</span></Link>
            </div>
            <div className="times">
              {meetingTimes?.length && meetingTimes.map((meet: MeetingTime, i: number) => (
                <div key={`${i}_${meet.day}`} className="time-row">
                  <span className="day">{meet.day}</span>
                  <span className="meta">{meet.meta}</span>
                  <span className="tm">{meet.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section locations" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="left">
              <span className="eyebrow">Good to know</span>
              <h2 className="title">Your questions, answered</h2>
            </div>
          </div>
          <div className="loc-grid">
            <div className="loc-card"><div className="body">
              <span className="region">What do I wear?</span>
              <h3>Come as you are</h3>
              <p className="addr">There's no dress code. You'll see everything from jeans to Sunday best — wear whatever's comfortable.</p>
            </div></div>
            <div className="loc-card"><div className="body">
              <span className="region">My kids</span>
              <h3>Kids are cared for</h3>
              <p className="addr">Safe, fun, age-appropriate environments run during service, with simple check-in at the door.</p>
            </div></div>
            <div className="loc-card"><div className="body">
              <span className="region">When to arrive</span>
              <h3>A few minutes early</h3>
              <p className="addr">Arriving 10–15 minutes before 10:00 AM gives you time for coffee and to get the kids settled.</p>
            </div></div>
          </div>
        </div>
      </section>
    </main>
  )
}

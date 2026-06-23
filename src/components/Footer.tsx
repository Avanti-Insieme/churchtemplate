import { Link } from 'react-router-dom'
import { useCampus } from '../context/CampusProvider'
import { useSiteData } from '../context/SiteDataProvider'
import { useEffect, useState } from 'react';
import { MeetingTime } from '../types';

interface SocialLink {
  name: string;
  link: string;
  iconClass: string;
}

export default function Footer() {
  const siteData = useSiteData()
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [meet, setMeet] = useState<MeetingTime>(undefined);
  const { campus } = useCampus();

  useEffect(() => {
    const campusData = siteData[campus as keyof typeof siteData] as any;
    const c = campusData?.social;
    const time = campusData?.meetingTimes?.find((m: MeetingTime) => m.day === "Sunday") as MeetingTime;
    if (c) {
      setLinks(c);
      setMeet(time);
    }
  }, [campus, siteData])

  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="cols">
          <div className="f-brand">
            <img src="/assets/logo.png" alt="Lighthouse Gospel Ministry" />
            <p>Raising a spirit-filled generation and kingdom influencers across Canada.</p>
            {links?.length &&
              <div className="social">
                {links.map((link, i) => (
                  <a key={`${i}_${link.name}`} href={link.link} aria-label="Facebook">
                    <i className={link.iconClass}></i>
                  </a>
                ))}
              </div>
            }
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
          <span>© 2021 Lighthouse Gospel Ministry. All rights reserved.</span>
          <span>{meet?.day}s · {meet?.time} · In person &amp; online</span>
        </div>
      </div>
    </footer>
  )
}

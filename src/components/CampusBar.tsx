import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Data from '../../data.json';
import { MeetingTime } from '../types';

const CAMPUSES = [
  { id: 'pei', label: 'Prince Edward Island' },
  { id: 'bc', label: 'British Columbia' },
]

export default function CampusBar() {
  const [active, setActive] = useState('pei')
  const [meetingTime, setMeetTime] = useState<MeetingTime | undefined>(undefined)

  useEffect(() => {
    if (Data[active]) {
      const time = Data[active]?.meetingTimes?.find((meet: MeetingTime) => meet.day == "Sunday" );
      setMeetTime(time)
    }
  }, [active])

  return (
    <div className="campusbar">
      <div className="wrap">
        <span className="cb-label">📍 Your campus</span>
        <div className="chips">
          {CAMPUSES.map((c) => (
            <span
              key={c.id}
              className={'chip' + (active === c.id ? ' active' : '')}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </span>
          ))}
          <span className="chip soon"><span className="dot"></span>Nova Scotia · Coming soon</span>
        </div>
        <div className="cb-right">
          <span className="cb-time">{meetingTime?.day}s <b>{meetingTime?.time}</b></span>
          <Link className="live" to="/watch"><span className="pulse"></span>Watch Live</Link>
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Data from '../../data.json';
import { MeetingTime } from '../types';
import { useCampus } from '../context/CampusProvider';

const CAMPUSES = [
  { id: 'pe', label: 'Prince Edward Island' },
  { id: 'bc', label: 'British Columbia' },
]

export default function CampusBar() {
  const { campus, setCampus } = useCampus();
  const [active, setActive] = useState('pe')
  const [meetingTime, setMeetTime] = useState<MeetingTime | undefined>(undefined)

  useEffect(() => {
    if (Data[active]) {
      setActive(campus)
      const time = Data[active]?.meetingTimes?.find((meet: MeetingTime) => meet.day == "Sunday");
      setMeetTime(time)
    }
  }, [active, campus])

  const handleCampusChange = (campus: string) => {
    setActive(campus)
    setCampus(campus as 'pe' | 'bc')
  }
  return (
    <div className="campusbar">
      <div className="wrap">
        <span className="cb-label">📍 Your campus</span>
        <div className="chips">
          {CAMPUSES.map((c) => (
            <span
              key={c.id}
              className={'chip' + (active === c.id ? ' active' : '')}
              onClick={() => handleCampusChange(c.id)}
            >
              {c.label}
            </span>
          ))}
          <span className="chip soon"><span className="dot"></span>Nova Scotia · Coming soon</span>
        </div>
        <div className="cb-right">
          {meetingTime &&
          <span className="cb-time">{meetingTime?.day}s <b>{meetingTime?.time}</b></span>
          }
          <Link className="live" to="/watch"><span className="pulse"></span>Watch Live</Link>
        </div>
      </div>
    </div>
  )
}

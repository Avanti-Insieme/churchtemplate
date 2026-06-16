import CampusBar from './CampusBar'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <CampusBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

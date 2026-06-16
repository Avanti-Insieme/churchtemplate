import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Visit from './pages/Visit'
import Watch from './pages/Watch.jsx'
import Locations from './pages/Locations.js'
import About from './pages/About.js'
import Events from './pages/Events'
import Give from './pages/Give.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/plan-a-visit" element={<Visit />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/give" element={<Give />} />
      </Route>
    </Routes>
  )
}

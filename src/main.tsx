import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import { CampusProvider } from './context/CampusProvider'
import { SiteDataProvider } from './context/SiteDataProvider'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SiteDataProvider>
        <CampusProvider>
          <App />
        </CampusProvider>
      </SiteDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

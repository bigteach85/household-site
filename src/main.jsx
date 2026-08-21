import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import OurStory from './OurStory.jsx'
import CommunityCounter from './CommunityCounter.jsx'

const isOurStory = window.location.pathname === '/our-story' || window.location.pathname === '/our-story/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isOurStory ? <OurStory /> : <><App /><CommunityCounter /></>}
  </StrictMode>,
)

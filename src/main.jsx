import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import OurStory from './OurStory.jsx'
import CommunityCounter from './CommunityCounter.jsx'

const isOurStory = window.location.pathname === '/our-story' || window.location.pathname === '/our-story/'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    {isOurStory ? <OurStory /> : <><App /><CommunityCounter /></>}
  </StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}

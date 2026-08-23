import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import CommunityCounter from './CommunityCounter.jsx'

export function render() {
  return renderToString(<><App /><CommunityCounter /></>)
}

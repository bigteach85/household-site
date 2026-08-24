import { useEffect, useState } from 'react'
import './HouseholdMosaic.css'

const MOSAIC_ENDPOINT = 'https://mauldbsheysonudkebcf.supabase.co/functions/v1/get-household-mosaic'

export default function HouseholdMosaic() {
  const [photos, setPhotos] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let active = true
    fetch(MOSAIC_ENDPOINT, { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : { photos: [] })
      .then((body) => {
        if (active) setPhotos(Array.isArray(body?.photos) ? body.photos : [])
      })
      .catch(() => {
        if (active) setPhotos([])
      })
      .finally(() => {
        if (active) setLoaded(true)
      })
    return () => { active = false }
  }, [])

  return (
    <section className="public-household-mosaic" aria-labelledby="household-mosaic-title">
      <div className="public-household-mosaic-inner">
        <header>
          <p className="eyebrow dark-eyebrow">THE HOUSEHOLD MOSAIC</p>
          <h2 id="household-mosaic-title">Real households.<br/><em>Growing together.</em></h2>
          <p>
            An optional, anonymous portrait of the households helping shape Household.
            Every photo is shared by its household owner and can be withdrawn at any time.
          </p>
        </header>

        {photos.length ? (
          <div className="public-household-mosaic-grid">
            {photos.map((photo) => (
              <figure key={photo.id}>
                <img src={photo.image_url} alt="A participating Household family" loading="lazy" />
              </figure>
            ))}
          </div>
        ) : (
          <div className="public-household-mosaic-empty" aria-live="polite">
            <span aria-hidden="true">h</span>
            <div>
              <strong>{loaded ? 'The mosaic is beginning.' : 'Opening the mosaic…'}</strong>
              <p>No stock families. The first portraits will appear only when real households choose to join.</p>
            </div>
          </div>
        )}

        <p className="public-household-mosaic-privacy">
          No names. No locations. No household details. No profile links.
        </p>
      </div>
    </section>
  )
}

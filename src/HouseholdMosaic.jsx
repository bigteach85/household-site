import { useEffect, useState } from 'react'
import './HouseholdMosaic.css'

const MOSAIC_ENDPOINT = 'https://mauldbsheysonudkebcf.supabase.co/functions/v1/get-household-mosaic'

const ILLUSTRATIVE_PHOTOS = [
  '/images/mosaic/illustrative-household-01.webp',
  '/images/mosaic/illustrative-household-02.webp',
  '/images/mosaic/illustrative-household-03.webp',
  '/images/mosaic/illustrative-household-04.webp',
  '/images/mosaic/illustrative-household-05.webp',
  '/images/mosaic/illustrative-household-06.webp',
  '/images/mosaic/illustrative-household-07.webp',
  '/images/mosaic/illustrative-household-08.webp',
  '/images/mosaic/illustrative-household-09.webp',
  '/images/mosaic/illustrative-household-10.webp',
  '/images/mosaic/illustrative-household-11.webp',
  '/images/mosaic/illustrative-household-12.webp',
].map((imageUrl, index) => ({
  id: `illustrative-household-${index + 1}`,
  image_url: imageUrl,
  illustrative: true,
}))

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

  const realPhotos = photos.map((photo) => ({ ...photo, illustrative: false }))
  const illustrativeCount = Math.max(0, ILLUSTRATIVE_PHOTOS.length - realPhotos.length)
  const displayPhotos = loaded
    ? [...realPhotos, ...ILLUSTRATIVE_PHOTOS.slice(0, illustrativeCount)]
    : []
  const hasIllustrations = illustrativeCount > 0

  return (
    <section className="public-household-mosaic" aria-labelledby="household-mosaic-title">
      <div className="public-household-mosaic-inner">
        <header>
          <p className="eyebrow dark-eyebrow">THE HOUSEHOLD MOSAIC</p>
          <h2 id="household-mosaic-title">
            {hasIllustrations ? <>A picture<br/><em>taking shape.</em></> : <>Real households.<br/><em>Growing together.</em></>}
          </h2>
          {hasIllustrations ? (
            <p>
              Illustrative portraits show how the mosaic will grow. Real household photos appear
              only when owners choose to share.
            </p>
          ) : (
            <p>
              An optional, anonymous portrait of the households helping shape Household.
              Every photo is shared by its household owner and can be withdrawn at any time.
            </p>
          )}
        </header>

        {hasIllustrations && (
          <p className="public-household-mosaic-preview-label">
            <span aria-hidden="true">✦</span> Illustrative preview · AI-generated portraits
          </p>
        )}

        {displayPhotos.length ? (
          <div className="public-household-mosaic-grid" aria-label="Household portrait mosaic">
            {displayPhotos.map((photo) => (
              <figure key={photo.id} className={photo.illustrative ? 'is-illustrative' : undefined}>
                <img
                  src={photo.image_url}
                  alt={photo.illustrative
                    ? 'Illustrative AI-generated household portrait'
                    : 'An owner-approved portrait from a participating Household family'}
                  loading="lazy"
                />
                {photo.illustrative && (
                  <figcaption aria-label="AI illustration">
                    <span className="public-household-mosaic-caption-long">AI illustration</span>
                    <span className="public-household-mosaic-caption-short" aria-hidden="true">AI</span>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        ) : (
          <div className="public-household-mosaic-empty" aria-live="polite">
            <span aria-hidden="true">h</span>
            <div>
              <strong>Opening the mosaic…</strong>
              <p>Loading the latest household portraits.</p>
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

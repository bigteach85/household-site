import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './CommunityCounter.css'

const CONFIRMED_HOUSEHOLD_COUNT = 1
const FOUNDING_GOAL = 100
const HOUSEHOLD_COUNT_URL =
  'https://mauldbsheysonudkebcf.supabase.co/functions/v1/public-household-count'

export default function CommunityCounter() {
  const [mountNode, setMountNode] = useState(null)
  const [householdCount, setHouseholdCount] = useState(CONFIRMED_HOUSEHOLD_COUNT)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return undefined

    const node = document.createElement('div')
    node.className = 'community-counter-mount'
    hero.insertAdjacentElement('afterend', node)
    setMountNode(node)

    return () => node.remove()
  }, [])

  useEffect(() => {
    let cancelled = false

    async function refreshCount() {
      try {
        const response = await fetch(HOUSEHOLD_COUNT_URL, {
          headers: { Accept: 'application/json' },
        })
        if (!response.ok) return

        const data = await response.json()
        const nextCount = Number(data?.households)

        if (!cancelled && Number.isInteger(nextCount) && nextCount >= CONFIRMED_HOUSEHOLD_COUNT) {
          setHouseholdCount(nextCount)
        }
      } catch {
        // The confirmed count remains visible if the live aggregate endpoint is unavailable.
      }
    }

    refreshCount()
    return () => {
      cancelled = true
    }
  }, [])

  if (!mountNode) return null

  const foundingProgress = Math.min((householdCount / FOUNDING_GOAL) * 100, 100)
  const householdLabel = householdCount === 1 ? 'household' : 'households'

  return createPortal(
    <section className="community-counter" aria-labelledby="community-counter-title">
      <div className="community-counter-inner">
        <div className="community-counter-copy">
          <p className="community-counter-eyebrow">THE HOUSEHOLD IS GROWING</p>
          <h2 id="community-counter-title">
            <strong>{householdCount.toLocaleString()}</strong>
            <span>{householdLabel} and counting.</span>
          </h2>
          <p>
            One household at a time, families are building a calmer way to understand
            the people, responsibilities, and things they depend on.
          </p>
        </div>

        <div className="community-counter-progress" aria-label={`${householdCount} of the Founding 100 households`}>
          <div className="community-counter-progress-labels">
            <span>Founding households</span>
            <strong>{householdCount} / {FOUNDING_GOAL}</strong>
          </div>
          <div className="community-counter-track" aria-hidden="true">
            <span style={{ width: `${foundingProgress}%` }} />
          </div>
          <a href="#founding-100">Build yours <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>,
    mountNode,
  )
}

import { useEffect, useRef } from 'react'
import './SponsorsSection.css'

import apscLogo from '../assets/pages/sponsorship/apsc-logo.webp'
import onshapeLogo from '../assets/pages/sponsorship/onshape-colour.svg'
import altiumLogo from '../assets/pages/sponsorship/altium-black.svg'
import atlassianLogo from '../assets/pages/sponsorship/atlassian-blue.svg'
import coastalDroneLogo from '../assets/pages/sponsorship/coastal-drone.webp'
import walterGageLogo from '../assets/pages/sponsorship/walter-gage.svg'
import cubepilotLogo from '../assets/pages/sponsorship/cubepilot.webp'
import zaberLogo from '../assets/pages/sponsorship/zaber.webp'
import dockerLogo from '../assets/pages/sponsorship/docker-blue.svg'
import simnetLogo from '../assets/pages/sponsorship/simnet.webp'
import stickerMuleLogo from '../assets/pages/sponsorship/sticker-mule.svg'
import rockWestCompositesLogo from '../assets/pages/sponsorship/rock-west-composites.webp'
import actuonixLogo from '../assets/pages/sponsorship/actuonix.webp'

const sponsorLogos = [
  apscLogo,
  onshapeLogo,
  altiumLogo,
  atlassianLogo,
  coastalDroneLogo,
  walterGageLogo,
  cubepilotLogo,
  zaberLogo,
  dockerLogo,
  simnetLogo,
  stickerMuleLogo,
  rockWestCompositesLogo,
  actuonixLogo,
]

const SponsorsSection = () => {
  const scrollRef = useRef(null)

  const scroll = direction => {
    const container = scrollRef.current
    if (!container) return
    const card = container.querySelector('.sponsors-section__card')
    if (!card) return

    const cardWidth = card.getBoundingClientRect().width
    const styles = window.getComputedStyle(container)
    const gapCandidates = [
      parseFloat(styles.columnGap),
      parseFloat(styles.gap),
      parseFloat(styles.getPropertyValue('column-gap')),
      parseFloat(styles.getPropertyValue('gap')),
    ]
    const gap = gapCandidates.find(value => Number.isFinite(value)) || 0
    const scrollAmount = cardWidth + gap

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return undefined

    let pointerId = null
    let startX = 0
    let startScroll = 0

    const onPointerDown = event => {
      if (!event.isPrimary) return
      pointerId = event.pointerId
      startX = event.clientX
      startScroll = container.scrollLeft
      container.classList.add('is-dragging')
      container.setPointerCapture?.(pointerId)
    }

    const onPointerMove = event => {
      if (pointerId !== event.pointerId) return
      const deltaX = event.clientX - startX
      container.scrollLeft = startScroll - deltaX
    }

    const onPointerRelease = event => {
      if (pointerId !== event.pointerId) return
      container.classList.remove('is-dragging')
      container.releasePointerCapture?.(pointerId)
      pointerId = null
    }

    container.addEventListener('pointerdown', onPointerDown)
    container.addEventListener('pointermove', onPointerMove)
    container.addEventListener('pointerup', onPointerRelease)
    container.addEventListener('pointercancel', onPointerRelease)
    container.addEventListener('pointerleave', onPointerRelease)

    return () => {
      container.removeEventListener('pointerdown', onPointerDown)
      container.removeEventListener('pointermove', onPointerMove)
      container.removeEventListener('pointerup', onPointerRelease)
      container.removeEventListener('pointercancel', onPointerRelease)
      container.removeEventListener('pointerleave', onPointerRelease)
    }
  }, [])

  return (
    <section className="sponsors-section" aria-labelledby="sponsors-title">
      <div className="sponsors-section__inner">
        <header className="sponsors-section__header">
          <p className="sponsors-section__eyebrow">Partners</p>
          <h2 className="sponsors-section__title" id="sponsors-title">
            Our Sponsors
          </h2>
          <p className="sponsors-section__body">
            Industry partners supply the resources, tooling, and mentorship that help UBC UAS push
            past prototypes and into repeatable flight systems.
          </p>
        </header>

        <div className="sponsors-section__track">
          <button
            className="sponsors-section__nav sponsors-section__nav--left"
            type="button"
            aria-label="Scroll sponsors left"
            onClick={() => scroll('left')}
          >
            &#10094;
          </button>

          <div className="sponsors-section__carousel" ref={scrollRef}>
            {sponsorLogos.map(logo => (
              <article key={logo} className="sponsors-section__card">
                <img src={logo} alt="UBC UAS sponsor" loading="lazy" />
              </article>
            ))}
          </div>

          <button
            className="sponsors-section__nav sponsors-section__nav--right"
            type="button"
            aria-label="Scroll sponsors right"
            onClick={() => scroll('right')}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection

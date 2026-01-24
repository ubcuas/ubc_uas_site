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

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return undefined

    let laneWidth = 0
    const images = Array.from(container.querySelectorAll('img'))

    const updateLaneWidth = () => {
      const lane = container.querySelector('.sponsors-section__lane')
      if (!lane) return
      const styles = window.getComputedStyle(container)
      const gapCandidates = [
        parseFloat(styles.columnGap),
        parseFloat(styles.gap),
        parseFloat(styles.getPropertyValue('column-gap')),
        parseFloat(styles.getPropertyValue('gap')),
      ]
      const gap = gapCandidates.find(value => Number.isFinite(value)) || 0
      laneWidth = lane.getBoundingClientRect().width + gap
      if (laneWidth > 0) {
        container.scrollLeft = laneWidth
      }
    }

    const onScroll = () => {
      if (!laneWidth) return
      if (container.scrollLeft <= laneWidth * 0.5) {
        container.scrollLeft += laneWidth
      } else if (container.scrollLeft >= laneWidth * 1.5) {
        container.scrollLeft -= laneWidth
      }
    }

    const onImageLoad = () => {
      updateLaneWidth()
    }

    updateLaneWidth()
    container.addEventListener('scroll', onScroll, { passive: true })
    const resizeObserver = new ResizeObserver(updateLaneWidth)
    resizeObserver.observe(container)
    images.forEach(img => {
      if (img.complete) return
      img.addEventListener('load', onImageLoad)
      img.addEventListener('error', onImageLoad)
    })

    return () => {
      container.removeEventListener('scroll', onScroll)
      resizeObserver.disconnect()
      images.forEach(img => {
        img.removeEventListener('load', onImageLoad)
        img.removeEventListener('error', onImageLoad)
      })
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
          <div className="sponsors-section__carousel" ref={scrollRef}>
            <div className="sponsors-section__marquee">
              <div className="sponsors-section__lane">
                {sponsorLogos.map(logo => (
                  <article key={logo} className="sponsors-section__card">
                    <img src={logo} alt="UBC UAS sponsor" loading="lazy" />
                  </article>
                ))}
              </div>
              <div className="sponsors-section__lane" aria-hidden="true">
                {sponsorLogos.map(logo => (
                  <article key={`${logo}-clone`} className="sponsors-section__card">
                    <img src={logo} alt="" loading="lazy" />
                  </article>
                ))}
              </div>
              <div className="sponsors-section__lane" aria-hidden="true">
                {sponsorLogos.map(logo => (
                  <article key={`${logo}-clone-2`} className="sponsors-section__card">
                    <img src={logo} alt="" loading="lazy" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection

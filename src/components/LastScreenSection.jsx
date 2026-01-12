import { Link } from 'react-router-dom'
import textureRibbon from '../assets/home/last-screen/drone.png'
import planeImage from '../assets/home/last-screen/sunDrone.png'
import './LastScreenSection.css'

const systems = [
  { title: 'Hydrone', body: 'Modular multi-rotor delivering precision drops and ISR.' },
  { title: 'GCOM', body: 'Ground control software consolidating telemetry, imagery, and reports.' },
]

const LastScreenSection = () => (
  <section
    className="last-screen"
    id="sponsors"
    aria-labelledby="last-screen-title"
    style={{ '--last-screen-background': `url(${planeImage})` }}
  >
      <div className="last-screen__inner">
        <div className="last-screen__hero-text">
          <p className="last-screen__eyebrow">Ready To Fly With Us?</p>
          <h2 className="last-screen__title" id="last-screen-title">
            Join the team building Canada’s most versatile autonomous systems.
          </h2>
          <p className="last-screen__body">
            Students from every discipline contribute to airframes, payloads, operations, and
            outreach. Whether you want to design composite structures, write flight code, or tell our
            story, there’s a squad waiting for you.
          </p>
          <div className="last-screen__cta-row">
            <Link className="last-screen__cta last-screen__cta--primary" to="/recruitment">
              Join The Team
            </Link>
            <Link className="last-screen__cta last-screen__cta--ghost" to="/sponsorship">
              Sponsor Us
            </Link>
          </div>
        </div>

        <div className="last-screen__systems-block">
          <p className="last-screen__systems-label">Systems In Focus</p>
          <div className="last-screen__system-grid">
            {systems.map(system => (
              <article key={system.title} className="last-screen__system-card">
                <strong>{system.title}</strong>
                <p>{system.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
  </section>
)

export default LastScreenSection

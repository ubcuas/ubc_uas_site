import missionImage from '../assets/home/mission/background.png'
import './MissionSection.css'

const highlights = [
  { value: '4', label: 'active airframes' },
  { value: '3', label: 'ground systems' },
  { value: '2', label: 'global competitions' },
]

const MissionSection = () => {
  return (
    <section
      className="mission"
      id="mission"
      aria-labelledby="mission-title"
      style={{ '--mission-background': `url(${missionImage})` }}
    >
      <div className="mission__inner">
        <div className="mission__content">
          <p className="mission__eyebrow">Mission</p>
          <h2 className="mission__title" id="mission-title">
            Build reliable autonomy for real-world impact.
          </h2>
          <p className="mission__statement">
            We are a multidisciplinary UBC design team specializing in autonomous drones and their
            support systems. We obsess over modular airframes, resilient software, and ground tools
            that can handle competition day chaos.
          </p>
          <ul className="mission__list">
            <li>Concept-to-flight programs across aircraft, payload, and software.</li>
            <li>Rapid validation loops with ground control and mission rehearsal tooling.</li>
            <li>Knowledge-sharing that prepares students to lead aerospace innovation.</li>
          </ul>
        </div>

        <div className="mission__media" aria-label="Mission highlights">
          <div className="mission__stat-grid">
            {highlights.map(item => (
              <article key={item.label} className="mission__stat">
                <span className="mission__stat-value">{item.value}</span>
                <span className="mission__stat-label">{item.label}</span>
              </article>
            ))}
          </div>
          <div className="mission__note">
            <p>Built for AEAC + SUAS: autonomous aircraft and the support systems that bring missions home</p>
            <strong>Build + Test + Compete</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection

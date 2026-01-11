import textureRibbon from '../assets/home/last-screen/drone.png'
import textureRibbonLight from '../assets/home/last-screen/drone-light.png'
import './TeamHighlightsSection.css'

const whatWeDo = [
  'Build mission-ready airframes for AEAC and SUAS missions every year.',
  'Prototype payloads, avionics, and ground control that move beyond classroom theory.',
  'Mentor students through reviews, masterclasses, and alumni-led critiques.',
]

const howWeDoIt = [
  'Design sprints that take concepts to CAD to composite structures.',
  'Software-in-the-loop testing with dedicated ground control hardware.',
  'Operations, sponsorship, and media teams keeping the program sustainable.',
]

const TeamHighlightsSection = () => (
  <section className="team-highlights" aria-labelledby="team-highlights-title">
    <div className="team-highlights__inner">
      <div className="team-highlights__grid">
        <article className="team-highlights__card">
          <p className="team-highlights__banner">What We Do</p>
          <ul className="team-highlights__list">
            {whatWeDo.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="team-highlights__card">
          <p className="team-highlights__banner">How We Do It</p>
          <ul className="team-highlights__list">
            {howWeDoIt.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="team-highlights__media">
          <img
            className="team-highlights__media-img team-highlights__media-img--dark"
            src={textureRibbon}
            alt="UBC UAS drone"
            loading="lazy"
          />
          <img
            className="team-highlights__media-img team-highlights__media-img--light"
            src={textureRibbonLight}
            alt="UBC UAS drone"
            loading="lazy"
          />
          <div className="team-highlights__media-note">
            <span>A team with real flying experience</span>
            <strong>180+ hours last season</strong>
          </div>
        </article>
      </div>
    </div>
  </section>
)

export default TeamHighlightsSection

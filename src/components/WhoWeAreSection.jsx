import backgroundImage from '../assets/home/who-we-are/background.png'
import './WhoWeAreSection.css'

const focusAreas = [
  { title: '4 sub-teams', body: 'Aircraft, Payload, Software, Electrical' },
  { title: '60+ members', body: 'Students from Applied Science, Science, and Sauder' },
  { title: '2 annual intakes', body: 'Our recruitment opens in September and January' },
]

const WhoWeAreSection = () => {
  return (
    <section className="who-we-are" id="who-we-are" aria-labelledby="who-we-are-title">
      <div className="who-we-are__inner">
        <div className="who-we-are__content">
          <p className="who-we-are__eyebrow">Team</p>
          <h2 className="who-we-are__title" id="who-we-are-title">
            Who Are We?
          </h2>
          <p className="who-we-are__description">
            UBC UAS is a cross-campus collective of builders, pilots, analysts, and storytellers.
            We operate like a product team: flight systems, autonomy, avionics, business, and ops
            pushing toward the same mission.
          </p>
          <div className="who-we-are__chips">
            <span>Design</span>
            <span>Flight Test</span>
            <span>Ground Control</span>
            <span>Business</span>
          </div>
          <div className="who-we-are__cards">
            {focusAreas.map(area => (
              <article key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="who-we-are__media" aria-hidden="true">
          <div className="who-we-are__media-card">
            <img src={backgroundImage} alt="" loading="lazy" />
            <div className="who-we-are__media-note">
              <span>UBC UAS 2025/2026 Roster</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreSection

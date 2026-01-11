import { Link } from 'react-router-dom'
import './HomeHero.css'

const HomeHero = () => {
  return (
    <section className="home-hero" id="top">
      <div className="home-hero__overlay" />
      <div className="home-hero__inner">
        <h1 className="home-hero__title">UBC UAS</h1>
        <p className="home-hero__tagline">UNCREWED AIRCRAFT SYSTEMS</p>
        <div className="home-hero__actions">
          <Link className="home-hero__cta" to="/recruitment">
            Join Us
          </Link>
          <Link className="home-hero__cta home-hero__cta--secondary" to="/sponsorship">
            Support Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeHero

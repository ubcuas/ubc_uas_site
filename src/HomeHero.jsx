import './HomeHero.css'

const HomeHero = () => {
  return (
    <section className="home-hero" id="top">
      <div className="home-hero__overlay" />
      <div className="home-hero__glow" aria-hidden="true" />
      <div className="home-hero__inner">
        <h1 className="home-hero__title">UBC UAS</h1>
        <p className="home-hero__tagline">Uncrewed Aircraft Systems</p>
        <div className="home-hero__actions">
          <a className="home-hero__cta" href="#join">
            Join Us
          </a>
          <a className="home-hero__cta home-hero__cta--secondary" href="#support">
            Support Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeHero

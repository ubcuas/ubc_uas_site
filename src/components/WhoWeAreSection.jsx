import backgroundImage from '../../figma_ss/first page/fourth screen/fourth background.png'
import './WhoWeAreSection.css'

const WhoWeAreSection = () => {
  return (
    <section
      className="who-we-are"
      id="who-we-are"
      style={{ '--who-we-are-background': `url(${backgroundImage})` }}
      aria-labelledby="who-we-are-title"
    >
      <div className="who-we-are__content">
        <h2 className="who-we-are__title" id="who-we-are-title">
          Who Are We?
        </h2>
        <p className="who-we-are__description">
          We are a multidisciplinary UBC design team focused on building autonomous
          drones and the ground systems that support them. Our members collaborate
          across engineering disciplines to prototype, test, and iterate on new
          aerial solutions for international competitions.
        </p>
      </div>
    </section>
  )
}

export default WhoWeAreSection

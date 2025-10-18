import missionTitleImg from '../../figma_ss/first page/third screen/OUR MISSIOn.png'
import missionPhotoImg from '../../figma_ss/first page/third screen/image 19.png'
import './MissionSection.css'

const MissionSection = () => {
  return (
    <section className="mission" id="mission" aria-labelledby="mission-title">
      <div className="mission__background" aria-hidden="true">
        <img
          src={missionPhotoImg}
          alt=""
          className="mission__background-image"
          loading="lazy"
        />
      </div>
      <div className="mission__content">
        <img
          src={missionTitleImg}
          alt="Our Mission"
          className="mission__title"
          id="mission-title"
          loading="lazy"
        />
        <p className="mission__statement">
          We are a multidisciplinary UBC design team that specializes in building
          autonomous drones and their support systems. We aim to push innovation
          and inspire the next generation of professionals.
        </p>
      </div>
    </section>
  )
}

export default MissionSection

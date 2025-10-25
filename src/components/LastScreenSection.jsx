import { Link } from 'react-router-dom'
import swirlWhat from '../../figma_ss/first page/Last screen/Frame 57.png'
import swirlHow from '../../figma_ss/first page/Last screen/Frame 58.png'
import textureRibbon from '../../figma_ss/first page/Last screen/Group 22.png'
import planeImage from '../../figma_ss/first page/Last screen/image 19.png'
import sponsorBand from '../../figma_ss/first page/Last screen/Group 47.png'
import './LastScreenSection.css'

const LastScreenSection = () => {
  return (
    <section className="last-screen" id="sponsors" aria-labelledby="last-screen-title">
      <div className="last-screen__canvas">
        <p className="last-screen__banner last-screen__banner--what">WHAT WE DO</p>
        <div className="last-screen__cluster last-screen__cluster--what">
          <img
            src={swirlWhat}
            alt=""
            aria-hidden="true"
            className="last-screen__accent last-screen__accent--what"
          />
          <p className="last-screen__label">What do we do?</p>
        </div>

        <img
          src={textureRibbon}
          alt=""
          className="last-screen__feature last-screen__feature--texture"
          aria-hidden="true"
          loading="lazy"
        />

        <img
          src={planeImage}
          alt="UBC UAS fixed-wing drone banking in flight"
          className="last-screen__feature last-screen__feature--plane"
          loading="lazy"
        />

        <p className="last-screen__banner last-screen__banner--how">HOW WE DO IT</p>
        <div className="last-screen__cluster last-screen__cluster--how">
          <img
            src={swirlHow}
            alt=""
            aria-hidden="true"
            className="last-screen__accent last-screen__accent--how"
          />
          <p className="last-screen__label">How we do it?</p>
        </div>

        <div className="last-screen__cluster last-screen__cluster--sponsors">
          <p className="last-screen__copy--sponsor">
            Of course, none of this could be done without our sponsors.
          </p>
          <p className="last-screen__sponsor-wordmark">OUR SPONSORS</p>
          <Link className="last-screen__cta" to="/sponsorship">
            Become a Sponsor
          </Link>
        </div>

        <img
          src={sponsorBand}
          alt="Primary sponsor logos"
          className="last-screen__sponsor-band"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default LastScreenSection

import { Link } from 'react-router-dom'
import { useState } from 'react'
import swirlWhat from '../assets/home/last-screen/frame-57.png'
import swirlHow from '../assets/home/last-screen/frame-58.png'
import textureRibbon from '../assets/home/last-screen/drone.png'
import planeImage from '../assets/home/last-screen/plane.png'
import sponsorBand from '../assets/home/last-screen/sponsor-band.png'
import './LastScreenSection.css'

const LastScreenSection = () => {
  
  return (
    <section className="last-screen" id="sponsors" aria-labelledby="last-screen-title">
      <div className="last-screen__canvas">
        <div className="last-screen__qblock">
          <div className="last-screen__group last-screen__group--what">
            <p className="last-screen__banner">WHAT DO WE DO?</p>
            <img
              src={swirlWhat}
              alt=""
              aria-hidden="true"
              className="last-screen__accent"
              loading="lazy"
            />
          </div>
          <img
            src={planeImage}
            alt="UBC UAS fixed-wing drone banking in flight"
            className="last-screen__feature last-screen__feature--plane"
            loading="lazy"
          />
        </div>
        <div className="last-screen__qblock">
          <div className="last-screen__group last-screen__group--imagery">
            <img
              src={textureRibbon}
              alt=""
              className="last-screen__feature last-screen__feature--texture"
              aria-hidden="true"
              loading="lazy"
            />
          </div>
          <div className="last-screen__group last-screen__group--how">
            <p className="last-screen__banner">HOW WE DO IT?</p>
            <img
              src={swirlHow}
              alt=""
              aria-hidden="true"
              className="last-screen__accent"
              loading="lazy"
            />
          </div>
        </div>

        <div className="last-screen__group last-screen__group--sponsors">
          <p className="last-screen__copy--sponsor">
            Of course, none of this could be done without our sponsors.
          </p>
          <p className="last-screen__sponsor-wordmark">OUR SPONSORS</p>
          <Link className="last-screen__cta" to="/sponsorship">
            Become a Sponsor
          </Link>
          <div className="last-screen__sponsor-message">
            <div className="last-screen__sponsor-carosel">
              <button> yes </button>
              <img
                src={sponsorBand}
                alt="Primary sponsor logos"
                loading="lazy"
              />
              <button> no </button>
            </div>
            <p className="last-screen__sponsor-text">We are so thankful and wahtever for hte money and wahtever blah blhablahbalbh cant do it without you bla hlab</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LastScreenSection

import { Link } from 'react-router-dom'
import { useState } from 'react'
import textureRibbon from '../assets/home/last-screen/drone.png'
import planeImage from '../assets/home/last-screen/plane.png'
import sponsorBand from '../assets/home/last-screen/sponsor-band.png'
import './LastScreenSection.css'

import apscLogo from '../assets/pages/sponsorship/apsc-logo.webp'
import onshapeLogo from '../assets/pages/sponsorship/onshape-colour.svg'
import altiumLogo from '../assets/pages/sponsorship/altium-black.svg'
import atlassianLogo from '../assets/pages/sponsorship/atlassian-blue.svg'
import coastalDroneLogo from '../assets/pages/sponsorship/coastal-drone.webp'
import walterGageLogo from '../assets/pages/sponsorship/walter-gage.svg'
import cubepilotLogo from '../assets/pages/sponsorship/cubepilot.webp'
import zaberLogo from '../assets/pages/sponsorship/zaber.webp'
import dockerLogo from '../assets/pages/sponsorship/docker-blue.svg'
import simnetLogo from '../assets/pages/sponsorship/simnet.webp'
import stickerMuleLogo from '../assets/pages/sponsorship/sticker-mule.svg'
import rockWestCompositesLogo from '../assets/pages/sponsorship/rock-west-composites.webp'
import actuonixLogo from '../assets/pages/sponsorship/actuonix.webp'

const LastScreenSection = () => {
  const whatWeDo = [
    'Build mission-specific aircraft for real world problems from scratch every year',
    'Compete annually in renowned competitions (AEAC and SUAS)',
    'Work with cutting edge technology in the UAV field to educate our members',
  ]

  const howWeDoIt = [
    'Provide members with alumni-led masterclasses for relevant skills like surface modelling, OnShape, and Altium',
    'Collaborate and hold design reviews bi-annually with alumni to encourage improvement',
    'Maintain a friendly and encouraging environment so that everyone can learn',
  ]
  const sponsors = [apscLogo,onshapeLogo,altiumLogo,atlassianLogo,coastalDroneLogo,walterGageLogo,cubepilotLogo,zaberLogo,dockerLogo,simnetLogo,stickerMuleLogo,rockWestCompositesLogo,actuonixLogo];
  const [countLeft, setCountLeft] = useState(0);
  const [count, setCount] = useState(1);
  const [countRight, setCountRight] = useState(2);
  const [animating, setAnimating] = useState(false);

const rightButton = () => {
  if (animating) 
    return false;
  const prev = count;
    
  setAnimating(true);
  setTimeout(() => {
    setCount((prev + 1) % sponsors.length);
    setCountLeft(prev );
    setCountRight((prev + 2) % sponsors.length);
    setAnimating(false);
  }, 400);
};

const leftButton = () => {
  if (animating) 
    return false;
  const prev = count;
    
  setAnimating(true);
  
  setTimeout(() => {
    setCount((prev - 1 + sponsors.length) % sponsors.length);
    setCountRight(prev);
    setCountLeft((prev - 2 + sponsors.length) % sponsors.length);
    setAnimating(false);
  }, 400);

};
  return (
    <section className="last-screen" id="sponsors" aria-labelledby="last-screen-title">
      <div className="last-screen__shell">
        <div className="last-screen__panels">
          <article className="last-screen__panel last-screen__panel--what">
            <div className="last-screen__panel-body">
              <p className="last-screen__banner">WHAT DO WE DO?</p>
              <ul className="last-screen__list">
                {whatWeDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="last-screen__visual last-screen__visual--drone" aria-hidden="true">
              <img
                src={textureRibbon}
                alt="UBC UAS drone composite"
                className="last-screen__layer last-screen__layer--drone"
                loading="lazy"
              />
            </div>
          </article>

          <article className="last-screen__panel last-screen__panel--how">
            <div className="last-screen__visual last-screen__visual--plane" aria-hidden="true">
              <img
                src={planeImage}
                alt="UBC UAS fixed-wing drone banking in flight"
                className="last-screen__layer last-screen__layer--plane"
                loading="lazy"
              />
            </div>
            <div className="last-screen__panel-body">
              <p className="last-screen__banner">HOW WE DO IT?</p>
              <ul className="last-screen__list">
                {howWeDoIt.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="last-screen__group last-screen__group--sponsors">
          <p className="last-screen__copy--sponsor">
            Of course, none of this could be done without...
          </p>
          <p className="last-screen__sponsor-wordmark">OUR SPONSORS</p>
          <Link className="last-screen__cta" to="/sponsorship">
            Become a Sponsor
          </Link>
          <div className="last-screen__sponsor-message">
            <div className="last-screen__sponsor-carosel">
              <button onClick={leftButton}> yes </button>
                <div className="image-stack-wrapper">
                <img
                  key={`sponsor-${countLeft}-${Math.random()}`}
                  src={sponsors[countLeft]}
                  className={`last-screen__sponsor-image pos-left`}
                  alt=""
                />
                <img
                  key={`sponsor-${count}-${Math.random()}`}
                  src={sponsors[count]}
                  className={`last-screen__sponsor-image pos-middle`}
                  alt=""
                />
                <img
                  key={`sponsor-${countRight}-${Math.random()}`}
                  src={sponsors[countRight]}
                  className={`last-screen__sponsor-image pos-right`}
                  alt=""
                />
                </div>
              <button onClick={rightButton}> no </button>
            </div>
            <p className="last-screen__sponsor-text">
              We are grateful for every donor that keeps UBC UAS innovating.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LastScreenSection

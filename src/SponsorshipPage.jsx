import sponsorshipPackage from './assets/documents/UAS-Sponsorship-Package-2025-2026.pdf'
import apscLogo from './assets/pages/sponsorship/apsc-logo.webp'
import onshapeLogo from './assets/pages/sponsorship/onshape-colour.svg'
import altiumLogo from './assets/pages/sponsorship/altium-black.svg'
import atlassianLogo from './assets/pages/sponsorship/atlassian-blue.svg'
import coastalDroneLogo from './assets/pages/sponsorship/coastal-drone.webp'
import walterGageLogo from './assets/pages/sponsorship/walter-gage.svg'
import cubepilotLogo from './assets/pages/sponsorship/cubepilot.webp'
import zaberLogo from './assets/pages/sponsorship/zaber.webp'
import dockerLogo from './assets/pages/sponsorship/docker-blue.svg'
import simnetLogo from './assets/pages/sponsorship/simnet.webp'
import stickerMuleLogo from './assets/pages/sponsorship/sticker-mule.svg'
import rockWestCompositesLogo from './assets/pages/sponsorship/rock-west-composites.webp'
import actuonixLogo from './assets/pages/sponsorship/actuonix.webp'
import './InfoPage.css'

const SponsorshipPage = () => {
  return (
    <>
      <section className="info-page info-page--sponsorship" aria-labelledby="sponsorship-title">
        <div className="info-page__content">
          <p className="info-page__eyebrow">Partner With Us</p>
          <h1 className="info-page__title" id="sponsorship-title">
            Sponsorship
          </h1>
          <p className="info-page__body">
            Sponsors are a crucial to the success of the team, and we are incredibly grateful for
            everyone who supports us. We are always looking for new sponsors to help us take our
            innovations to new heights. If you are interested in sponsoring us, please contact out
            the details below and contact us at sponsorship@ubcuas.com.
          </p>
        </div>
      </section>

      <section className="sponsorship-details" aria-labelledby="sponsorship-details-title">
        <div className="sponsorship-details__container">
          <h2 className="sponsorship-details__title" id="sponsorship-details-title">
            Why Sponsor Us?
          </h2>
          <p className="sponsorship-details__body">
            We reach thousands of Canadians through our active participation in national and
            international autonomous aircraft competitions. Additionally, we facilitate youth
            outreach events, hold info sessions, and host technical workshops that are open to all
            students. We are always delighted to speak with potential sponsors who will make these
            ventures possible.
          </p>
          <p className="sponsorship-details__body">
            The ongoing expansion of our team and projects allows us to broadcast our sponsors on
            national and international stages. We are proud to positively shape brands through our
            platform at UBC UAS.
          </p>
          <p className="sponsorship-details__body">
            Your support allows students to gain the most from their UBC education by creating
            opportunities to apply their classroom knowledge to the field, creating better engineers
            for the future.
          </p>
          <div className="sponsorship-details__actions">
            <a
              className="sponsorship-details__cta"
              href={sponsorshipPackage}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Sponsorship Package (2025-2026)
            </a>
            <a
              className="sponsorship-details__cta sponsorship-details__cta--secondary"
              href="https://donate.give.ubc.ca/page/80953/donate/1?transaction.dirgift=UBC+Uncrewed+Aircraft+Systems+%28UAS%29%20G2333"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate to UBC UAS
            </a>
          </div>
        </div>
      </section>

      <section className="sponsor-tiers" aria-labelledby="current-sponsors-title">
        <div className="sponsor-tiers__container">
          <h2 className="sponsor-tiers__title" id="current-sponsors-title">
            Current Sponsors
          </h2>

          <div className="sponsor-tiers__tier" aria-labelledby="title-sponsors-heading">
            <h3 className="sponsor-tiers__tier-title" id="title-sponsors-heading">
              Title Sponsors
            </h3>
            <ul className="sponsor-tiers__logos sponsor-tiers__logos--title">
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://apsc.ubc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="sponsor-tiers__image"
                    src={apscLogo}
                    alt="The University of British Columbia Faculty of Applied Science"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="sponsor-tiers__tier" aria-labelledby="gold-sponsors-heading">
            <h3 className="sponsor-tiers__tier-title" id="gold-sponsors-heading">
              Gold Sponsors
            </h3>
            <ul className="sponsor-tiers__logos sponsor-tiers__logos--gold">
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://onshape.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="sponsor-tiers__image"
                    src={onshapeLogo}
                    alt="Onshape"
                  />
                </a>
              </li>
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://altium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="sponsor-tiers__image"
                    src={altiumLogo}
                    alt="Altium"
                  />
                </a>
              </li>
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://atlassian.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="sponsor-tiers__image"
                    src={atlassianLogo}
                    alt="Atlassian"
                  />
                </a>
              </li>
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://coastaldrone.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="sponsor-tiers__image"
                    src={coastalDroneLogo}
                    alt="Coastal Drone"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="sponsor-tiers__tier" aria-labelledby="silver-sponsors-heading">
            <h3 className="sponsor-tiers__tier-title" id="silver-sponsors-heading">
              Silver Sponsors
            </h3>
            <ul className="sponsor-tiers__logos sponsor-tiers__logos--silver">
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://vpstudents.ubc.ca/walter-gage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sponsor-tiers__image" src={walterGageLogo} alt="Walter Gage" />
                </a>
              </li>
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://cubepilot.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sponsor-tiers__image" src={cubepilotLogo} alt="CubePilot" />
                </a>
              </li>
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://zaber.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sponsor-tiers__image" src={zaberLogo} alt="Zaber" />
                </a>
              </li>
            </ul>
          </div>

          <div className="sponsor-tiers__tier" aria-labelledby="bronze-sponsors-heading">
            <h3 className="sponsor-tiers__tier-title" id="bronze-sponsors-heading">
              Bronze Sponsors
            </h3>
            <ul className="sponsor-tiers__logos sponsor-tiers__logos--bronze">
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://docker.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sponsor-tiers__image" src={dockerLogo} alt="Docker" />
                </a>
              </li>
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://simnet.aero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sponsor-tiers__image" src={simnetLogo} alt="Simnet" />
                </a>
              </li>
            </ul>
          </div>

          <div className="sponsor-tiers__tier" aria-labelledby="contributor-sponsors-heading">
            <h3 className="sponsor-tiers__tier-title" id="contributor-sponsors-heading">
              Contributor
            </h3>
            <ul className="sponsor-tiers__logos sponsor-tiers__logos--contributor">
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://stickermule.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="sponsor-tiers__image"
                    src={stickerMuleLogo}
                    alt="Sticker Mule"
                  />
                </a>
              </li>
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://rockwestcomposites.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="sponsor-tiers__image"
                    src={rockWestCompositesLogo}
                    alt="Rock West Composites"
                  />
                </a>
              </li>
              <li>
                <a
                  className="sponsor-tiers__link"
                  href="https://www.actuonix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sponsor-tiers__image" src={actuonixLogo} alt="Actuonix" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default SponsorshipPage

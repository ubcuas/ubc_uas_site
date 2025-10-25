import uasLogo from './assets/uas-logo.png'
import './footer.css'
import github from '../src/assets/github-white.svg'
import instagram from '../src/assets/instagram-white.svg'
import facebook from '../src/assets/facebook-white.svg'
import linkedin from '../src/assets/linkedin-white.svg'
const Footer = () => {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="footer__visually-hidden">
        UBC UAS footer
      </h2>
      <div className="footer__brand">
        <img src={uasLogo} alt="UBC UAS logo" className="footer__logo" />
        <div className="footer__wordmark">
          <span className="footer__name">UBC UAS</span>
          <span className="footer__tagline">Uncrewed Aircraft Systems</span>
        </div>
      </div>
      <p className="footer__legal-stuff">Legal stuff goes here</p>
      <div className="footer__social-block">
        <p className="footer__email">ubcuasemail@ubc.ca</p>
        <nav className="footer__social" aria-label="Social links">
          <a
            className="footer__social-link footer__social-link--linkedin"
            href="https://www.linkedin.com/company/ubcuas"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin"/>
          </a>
          <a
            className="footer__social-link footer__social-link--instagram"
            href="https://www.instagram.com/ubcuas"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="Instagram"/>
          </a>
          <a
            className="footer__social-link footer__social-link--facebook"
            href="https://www.facebook.com/ubcuas"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="Facebook"/>
          </a>
          <a
            className="footer__social-link footer__social-link--github"
            href="https://github.com/ubcuas"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github"/>
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

import uasLogo from './assets/uas-logo.png'
import './footer.css'
import githubWhite from '../src/assets/github-white.svg'
import instagramWhite from '../src/assets/instagram-white.svg'
import facebookWhite from '../src/assets/facebook-white.svg'
import linkedinWhite from '../src/assets/linkedin-white.svg'
import githubDefault from '../src/assets/github.svg'
import instagramDefault from '../src/assets/instagram.svg'
import facebookDefault from '../src/assets/facebook.svg'
import linkedinDefault from '../src/assets/linkedin.svg'
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
      <p className="footer__legal-stuff">© 2026 UBC Uncrewed Aircraft Systems</p>
      <div className="footer__social-block">
        <p className="footer__email">info@ubcuas.com</p>
        <nav className="footer__social" aria-label="Social links">
          <a
            className="footer__social-link footer__social-link--linkedin"
            href="https://www.linkedin.com/company/ubcuas"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer__social-icon footer__social-icon--dark" src={linkedinWhite} alt="Linkedin" />
            <img className="footer__social-icon footer__social-icon--light" src={linkedinDefault} alt="Linkedin" />
          </a>
          <a
            className="footer__social-link footer__social-link--instagram"
            href="https://www.instagram.com/ubcuas"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer__social-icon footer__social-icon--dark" src={instagramWhite} alt="Instagram" />
            <img className="footer__social-icon footer__social-icon--light" src={instagramDefault} alt="Instagram" />
          </a>
          <a
            className="footer__social-link footer__social-link--facebook"
            href="https://www.facebook.com/ubcuas"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer__social-icon footer__social-icon--dark" src={facebookWhite} alt="Facebook" />
            <img className="footer__social-icon footer__social-icon--light" src={facebookDefault} alt="Facebook" />
          </a>
          <a
            className="footer__social-link footer__social-link--github"
            href="https://github.com/ubcuas"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer__social-icon footer__social-icon--dark" src={githubWhite} alt="Github" />
            <img className="footer__social-icon footer__social-icon--light" src={githubDefault} alt="Github" />
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

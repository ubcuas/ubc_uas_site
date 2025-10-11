import uasLogo from './assets/uas-logo.png'
import './footer.css'

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
      <nav className="footer__social" aria-label="Social links">
        <a
          className="footer__social-link footer__social-link--linkedin"
          href="https://www.linkedin.com/company/ubcuas"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true">in</span>
          <span className="footer__visually-hidden">LinkedIn</span>
        </a>
        <a
          className="footer__social-link footer__social-link--instagram"
          href="https://www.instagram.com/ubcuas"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true">IG</span>
          <span className="footer__visually-hidden">Instagram</span>
        </a>
        <a
          className="footer__social-link footer__social-link--facebook"
          href="https://www.facebook.com/ubcuas"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true">f</span>
          <span className="footer__visually-hidden">Facebook</span>
        </a>
        <a
          className="footer__social-link footer__social-link--github"
          href="https://github.com/ubcuas"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true">gh</span>
          <span className="footer__visually-hidden">GitHub</span>
        </a>
      </nav>
    </footer>
  )
}

export default Footer

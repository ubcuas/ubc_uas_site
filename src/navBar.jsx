import uasLogo from './assets/uas-logo.png'
import './navBar.css'

const NavBar = () => {
  return (
    <header className="nav-bar">
      <a className="nav-bar__logo" href="#top" aria-label="UBC UAS home">
        <img src={uasLogo} alt="UBC UAS logo" />
      </a>
      <nav className="nav-bar__links" aria-label="Primary">
        <a className="nav-bar__link nav-bar__link--active" href="#projects">
          Projects
        </a>
        <a className="nav-bar__link" href="#team">
          Our Team
        </a>
        <a className="nav-bar__cta" href="#get-involved">
          Get Involved
        </a>
      </nav>
    </header>
  )
}

export default NavBar

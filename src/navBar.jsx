import uasLogo from './assets/uas-logo.png'
import './navBar.css'

const NavBar = ({ activePage = 'home', onNavigate }) => {
  const handleHomeClick = (event, targetId) => {
    if (!onNavigate) {
      return
    }

    event.preventDefault()
    onNavigate('home', targetId)
  }

  const handleProjectsClick = (event) => {
    if (!onNavigate) {
      return
    }

    event.preventDefault()
    onNavigate('projects')
  }

  const handleTeamClick = (event) => {
    if (!onNavigate) {
      return
    }

    event.preventDefault()
    onNavigate('team')
  }

  const projectsClasses = ['nav-bar__link', 'nav-bar__link-button']
  if (activePage === 'projects') {
    projectsClasses.push('nav-bar__link--active')
  }

  const teamClasses = ['nav-bar__link', 'nav-bar__link-button']
  if (activePage === 'team') {
    teamClasses.push('nav-bar__link--active')
  }

  return (
    <header className="nav-bar">
      <a
        className="nav-bar__logo"
        href="#top"
        aria-label="UBC UAS home"
        onClick={(event) => handleHomeClick(event, 'top')}
      >
        <img src={uasLogo} alt="UBC UAS logo" />
      </a>
      <nav className="nav-bar__links" aria-label="Primary">
        <button
          type="button"
          className={projectsClasses.join(' ')}
          onClick={handleProjectsClick}
          aria-current={activePage === 'projects' ? 'page' : undefined}
        >
          Projects
        </button>
        <button
          type="button"
          className={teamClasses.join(' ')}
          onClick={handleTeamClick}
          aria-current={activePage === 'team' ? 'page' : undefined}
        >
          Our Team
        </button>
        <a
          className="nav-bar__cta"
          href="#get-involved"
          onClick={(event) => handleHomeClick(event, 'get-involved')}
        >
          Get Involved
        </a>
      </nav>
    </header>
  )
}

export default NavBar

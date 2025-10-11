import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { createPortal } from 'react-dom'
import uasLogo from './assets/uas-logo.png'
import Register from './Register'
import './NavBar.css'

const NavBar = () => {
  const [showRegister, setShowRegister] = useState(false)

  const toggleRegister = (isOpen) => () => {
    setShowRegister(isOpen)
  }

  const navigationItems = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Team', to: '/team' },
  ]

  const portalTarget =
    typeof document !== 'undefined' ? document.getElementById('portal-login') : null

  return (
    <>
      <nav className="navbar" aria-label="Primary navigation">
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo" aria-label="UBC UAS home">
            <img src={uasLogo} alt="UBC UAS logo" />
          </Link>
          <p className="navbar__tagline">Unmanned Aerial Systems at UBC</p>
        </div>
        <div className="navbar__links" role="navigation">
          {navigationItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                ['navbar__link', isActive ? 'navbar__link--active' : null]
                  .filter(Boolean)
                  .join(' ')
              }
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="navbar__auth">
          <button type="button" className="navbar__button" onClick={toggleRegister(true)}>
            Log In
          </button>
          <Link className="navbar__button navbar__button--primary" to="/team">
            Join Us
          </Link>
        </div>
      </nav>
      {portalTarget &&
        showRegister &&
        createPortal(<Register onClose={toggleRegister(false)} />, portalTarget)}
    </>
  )
}

export default NavBar

import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import uasLogo from './assets/uas-logo.png'
import './NavBar.css'

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const navigationItems = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Team', to: '/team' },
  ]

  const dropdownItems = [
    { label: 'Recruitment', to: '/recruitment' },
    { label: 'Sponsorship', to: '/sponsorship' },
  ]

  useEffect(() => {
    if (!isDropdownOpen) {
      return
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('pointerdown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isDropdownOpen])

  useEffect(() => {
    setDropdownOpen(false)
  }, [location.pathname])

  const handleJoinToggle = () => {
    setDropdownOpen((open) => !open)
  }

  return (
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
            end={to === '/'}
            className={({ isActive }) =>
              [
                'navbar__button',
                isActive ? 'navbar__button--active' : 'navbar__button--basic',
              ]
                .filter(Boolean)
                .join(' ')
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
      <div className="navbar__join" ref={dropdownRef}>
        <button
          type="button"
          className={[
            'navbar__button',
            'navbar__button--has-arrow',
            isDropdownOpen ? 'navbar__button--dropdown-open' : 'navbar__button--basic',
          ].join(' ')}
          onClick={handleJoinToggle}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
          aria-controls="navbar-join-dropdown"
        >
          Join Us
        </button>
        {isDropdownOpen && (
          <div className="navbar__dropdown" id="navbar-join-dropdown" role="menu">
            {dropdownItems.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [
                    'navbar__button',
                    isActive ? 'navbar__button--active' : 'navbar__button--basic',
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
                role="menuitem"
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar

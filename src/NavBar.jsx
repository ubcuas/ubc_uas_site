import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import uasLogo from './assets/uas-logo.png'
import uasLogoLight from './assets/logo.png'
import './NavBar.css'

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }
    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  })
  const dropdownRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const mobileToggleRef = useRef(null)
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
    if (!isMobileMenuOpen) {
      return
    }

    const handleClickOutside = (event) => {
      const menuEl = mobileMenuRef.current
      const toggleEl = mobileToggleRef.current
      const isInsideMenu = menuEl && menuEl.contains(event.target)
      const isToggle = toggleEl && toggleEl.contains(event.target)

      if (!isInsideMenu && !isToggle) {
        setMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setDropdownOpen(false)
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setDropdownOpen(false)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const handleJoinToggle = () => {
    setDropdownOpen((open) => !open)
  }

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((open) => !open)
  }

  const handleThemeToggle = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar__brand">
        <Link to="/" className="navbar__logo" aria-label="UBC UAS home">
          <img
            className="navbar__logo-img navbar__logo-img--dark"
            src={uasLogo}
            alt="UBC UAS logo"
          />
          <img
            className="navbar__logo-img navbar__logo-img--light"
            src={uasLogoLight}
            alt="UBC UAS logo"
          />
        </Link>
      </div>
      <button
        type="button"
        className={`navbar__menu-toggle ${isMobileMenuOpen ? 'navbar__menu-toggle--open' : ''}`}
        onClick={handleMobileMenuToggle}
        aria-haspopup="true"
        aria-expanded={isMobileMenuOpen}
        aria-controls="navbar-menu"
        aria-label="Toggle navigation menu"
        ref={mobileToggleRef}
      >
        <span className="navbar__hamburger">
          <span />
          <span />
          <span />
        </span>
      </button>
      <div
        className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}
        id="navbar-menu"
        ref={mobileMenuRef}
      >
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
              isDropdownOpen
                ? 'navbar__button--dropdown-open'
                : 'navbar__button--basic',
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
                      isActive
                        ? 'navbar__button--active'
                        : 'navbar__button--basic',
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
        <button
          type="button"
          className="navbar__theme-toggle"
          onClick={handleThemeToggle}
          aria-pressed={theme === 'light'}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <svg className="navbar__theme-icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          ) : (
            <svg className="navbar__theme-icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}

export default NavBar

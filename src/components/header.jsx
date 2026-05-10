import { useState } from 'react'
import logoImage from '../assets/logooo.png'

const navItems = [
  { label: 'Home', href: '#home', key: 'home' },
  {
    label: 'Destinations',
    href: '#destinations',
    key: 'destinations',
  },
  { label: 'Trek', href: '#trek', key: 'trek', region: 'Trek' },
  { label: 'Stories', href: '#stories', key: 'stories' },
  {
    label: 'Support',
    href: '#support',
    key: 'support',
    menu: [
      { label: 'About Us', href: '#about', key: 'about' },
      { label: 'Ask for help / Contact us', href: '#support-contact', key: 'support-contact' },
    ],
  },
]

function Header({ activePage = 'home', onNavigate, variant = 'hero' }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeNav = activePage
  const isNavActive = (item) =>
    item.key === activeNav ||
    (item.key === 'support' && (activeNav === 'about' || activeNav === 'support-contact'))

  const navigate = (event, key) => {
    setIsMenuOpen(false)

    if ((key === 'home' || key === 'destinations' || key === 'trek' || key === 'stories' || key === 'support' || key === 'support-contact' || key === 'about') && onNavigate) {
      event.preventDefault()
      onNavigate(key === 'trek' ? 'destinations' : key === 'support' ? 'support-contact' : key, key === 'trek' ? { region: 'Trek' } : {})
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const searchDestinations = (event) => {
    event.preventDefault()

    if (onNavigate) {
      setIsMenuOpen(false)
      onNavigate('destinations', { searchQuery: searchTerm.trim() })
    }
  }

  const navigateDestinationMenu = (event, menuItem, itemKey) => {
    setIsMenuOpen(false)

    if (menuItem.searchQuery && onNavigate) {
      event.preventDefault()
      setSearchTerm(menuItem.searchQuery)
      onNavigate('destinations', { searchQuery: menuItem.searchQuery })
      return
    }

    navigate(event, menuItem.key || itemKey)
  }

  return (
    <header className={`header ${variant === 'page' ? 'is-page-header' : ''}`}>
      <a
        className="brand"
        href="#home"
        aria-label="Aariyana Tours and Travels home"
        onClick={(event) => navigate(event, 'home')}
      >
        <span className="brand-logo" aria-hidden="true">
          <img className="brand-logo-mark" src={logoImage} alt="" />
        </span>
        <span>Aariyana Tours and Travels</span>
      </a>

      <p className="offer">
        <span>GET 20% OFF Book Now</span>
      </p>

      <button
        className="header-menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((currentState) => !currentState)}
      >
        <span />
        <span />
        <span />
      </button>

      <form className="destination-search" onSubmit={searchDestinations}>
        <button className="search-submit-icon" type="submit" aria-label="Search destinations">
          <span className="search-icon" aria-hidden="true" />
        </button>
        <input
          type="search"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>

      <nav
        className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}
        id="main-navigation"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <div className="nav-item" key={item.key}>
            <a
              className={isNavActive(item) ? 'active' : undefined}
              href={item.href}
              onClick={(event) => navigate(event, item.key)}
              aria-current={isNavActive(item) ? 'page' : undefined}
              aria-haspopup={item.menu ? 'true' : undefined}
            >
              {item.label}
              {item.menu && <span className="nav-arrow" aria-hidden="true" />}
            </a>

            {item.menu && (
              <div className="nav-dropdown" role="menu" aria-label={`${item.label} menu`}>
                {item.menu.map((menuItem) => (
                  <a
                    href={menuItem.href}
                    key={menuItem.label}
                    role="menuitem"
                    onClick={(event) => navigateDestinationMenu(event, menuItem, item.key)}
                  >
                    {menuItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  )
}

export default Header

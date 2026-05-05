import { useEffect, useState } from 'react'
import logoImage from '../assets/Logo.png'
import planeImage from '../assets/Plane.png'

const navItems = [
  { label: 'Home', href: '#home', key: 'home' },
  {
    label: 'Destinations',
    href: '#destinations',
    key: 'destinations',
    menu: [
      { label: 'Bali', href: '#destinations' },
      { label: 'India', href: '#destinations' },
      { label: 'Bhutan', href: '#destinations' },
      { label: 'Tibet', href: '#destinations' },
    ],
  },
  { label: 'Bookings', href: '#bookings', key: 'bookings' },
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
  const [activeNav, setActiveNav] = useState(activePage)

  useEffect(() => {
    setActiveNav(activePage)
  }, [activePage])

  const navigate = (event, key) => {
    setActiveNav(key)

    if ((key === 'home' || key === 'destinations' || key === 'bookings' || key === 'support-contact' || key === 'about') && onNavigate) {
      event.preventDefault()
      onNavigate(key)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
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
          <img className="brand-logo-plane" src={planeImage} alt="" />
        </span>
        <span>Aariyana Tours and Travels</span>
      </a>

      <p className="offer">
        <span>GET 20% OFF</span>
      </p>

      <label className="destination-search">
        <span className="search-icon" aria-hidden="true" />
        <input type="search" placeholder="Search destinations..." />
      </label>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <div className="nav-item" key={item.key}>
            <a
              className={activeNav === item.key ? 'active' : undefined}
              href={item.href}
              onClick={(event) => navigate(event, item.key)}
              aria-current={activeNav === item.key ? 'page' : undefined}
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
                    onClick={(event) => navigate(event, menuItem.key || item.key)}
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

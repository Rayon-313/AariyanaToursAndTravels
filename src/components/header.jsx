import { useState } from 'react'
import logoImage from '../assets/Logo.png'
import planeImage from '../assets/Plane.png'

const navItems = [
  { label: 'Home', href: '#home', key: 'home' },
  { label: 'Destinations', href: '#destinations', key: 'destinations', hasArrow: true },
  { label: 'Bookings', href: '#bookings', key: 'bookings' },
  { label: 'Support', href: '#support', key: 'support', hasArrow: true },
]

function Header() {
  const [activeNav, setActiveNav] = useState('home')

  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Aariyana Tours and Travels home">
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
          <a
            className={activeNav === item.key ? 'active' : undefined}
            href={item.href}
            key={item.key}
            onClick={() => setActiveNav(item.key)}
            aria-current={activeNav === item.key ? 'page' : undefined}
          >
            {item.label}
            {item.hasArrow && <span className="nav-arrow" aria-hidden="true" />}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header

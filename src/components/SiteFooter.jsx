import { companyPhoneNumber } from './WhatsAppButton'

function SiteFooter({ onNavigate }) {
  const navigate = (event, page) => {
    if (!onNavigate) {
      return
    }

    event.preventDefault()
    onNavigate(page)
  }

  return (
    <footer className="site-footer" id="support">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>Aariyana Tours and Travels</h2>
          <p>Join us and see the world from a different lens.</p>
          <div className="footer-contact" aria-label="Contact options">
            <a href="mailto:info@aariyanatours.com" aria-label="Email Aariyana Tours and Travels">
              <span className="footer-mail-icon" aria-hidden="true" />
            </a>
            <a
              href={`https://wa.me/${companyPhoneNumber}`}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Chat with Aariyana Tours and Travels on WhatsApp"
            >
              <span className="footer-phone-icon" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav className="footer-links" aria-label="Explore">
          <h3>Explore</h3>
          <a href="#destinations" onClick={(event) => navigate(event, 'destinations')}>Destination</a>
          <a href="#stories" onClick={(event) => navigate(event, 'stories')}>Stories</a>
          <a href="#support-contact" onClick={(event) => navigate(event, 'support-contact')}>Support</a>
        </nav>

        <nav className="footer-links" aria-label="Company">
          <h3>Company</h3>
          <a href="#about" onClick={(event) => navigate(event, 'about')}>About Us</a>
          <a href="#support-contact" onClick={(event) => navigate(event, 'support-contact')}>Contact Us</a>
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  )
}

export default SiteFooter

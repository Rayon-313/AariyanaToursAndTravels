import Header from './header'
import SiteFooter from './SiteFooter'

const philosophyCards = [
  {
    icon: 'diamond',
    title: 'Curated Excellence',
    text: 'Every destination and accommodation is hand-selected and rigorously vetted to ensure it meets our exacting standards for beauty, service and authenticity.',
  },
  {
    icon: 'compass',
    title: 'Personalized Journeys',
    text: 'No two travelers are the same. We design itineraries from a blank canvas, tailored specifically to your curiosities, pace, and lifestyle preferences.',
  },
  {
    icon: 'earth',
    title: 'Global Stewardship',
    text: 'We are committed to preserving the wonders we showcase. Our journeys support local communities and prioritize eco-friendly practices for a lasting positive impact.',
  },
]

function AboutIcon({ name }) {
  const commonProps = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  }

  if (name === 'diamond') {
    return (
      <svg {...commonProps}>
        <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
        <path d="M2 9h20" />
        <path d="m8 9 4 12 4-12" />
      </svg>
    )
  }

  if (name === 'compass') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2.1 5-4.9 2 2.1-5 4.9-2Z" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  )
}

function AboutPage({ image, onNavigate }) {
  return (
    <div className="about-page">
      <section className="about-page-hero">
        <Header activePage="support" onNavigate={onNavigate} />
        <img src={image} alt="" />
        <div className="about-page-hero-overlay" />
        <div className="about-hero-content">
          <h1>Crafting Unforgettable Journeys for the Modern Soul.</h1>
        </div>
      </section>

      <main className="about-page-main">
        <section className="about-philosophy" aria-labelledby="about-philosophy-title">
          <div className="about-section-heading">
            <h2 id="about-philosophy-title">Our Philosophy</h2>
            <span aria-hidden="true" />
          </div>

          <p>
            At Aariyana Tours & Travels, we believe travel is more than a change of scenery-it is a
            transformation of the spirit. Our commitment lies in crafting bespoke, magic travel
            experiences that resonate with your personal narrative. We focus on the intangible
            details: the perfect light at a hidden sanctuary, the authentic rhythm of a local
            village, and the seamless luxury that allows you to simply exist in the moment.
          </p>
        </section>

        <section className="philosophy-card-grid" aria-label="Aariyana philosophy values">
          {philosophyCards.map((card) => (
            <article className="philosophy-card" key={card.title}>
              <span aria-hidden="true">
                <AboutIcon name={card.icon} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default AboutPage

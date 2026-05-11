import Header from './header'
import SiteFooter from './SiteFooter'

const helpTopics = [
  {
    icon: 'calendar',
    title: 'Booking & Cancellations',
    text: 'Modify your itinerary, cancel trips, or check your reservation status.',
  },
  {
    icon: 'card',
    title: 'Payment & Invoices',
    text: 'Manage billings, download receipts, and view payment history.',
  },
  {
    icon: 'globe',
    title: 'Destinations and Visas',
    text: 'Find destination guides and entry requirements for your next trip.',
  },
  {
    icon: 'star',
    title: 'Loyalty Program',
    text: 'Earn and redeem points.',
  },
  {
    icon: 'user',
    title: 'Account Settings',
    text: 'Update profile details, security settings, and notifications.',
  },
  {
    icon: 'shield',
    title: 'Safety & Travel Advice',
    text: 'Stay informed with latest travel advisories and safety protocols.',
  },
]

const faqs = [
  {
    question: 'How do I cancel my booking?',
    answer:
      'You can cancel your booking through the My Bookings section in your account. Select the trip you wish to cancel and follow the prompts. Refund eligibility depends on the specific booking terms.',
  },
  {
    question: 'What is the refund policy?',
    answer:
      'Refunds depend on the package, supplier rules, and cancellation date. Our support team can review your booking and confirm the exact refundable amount.',
  },
  {
    question: 'How do I earn points?',
    answer:
      'You earn loyalty points when you complete eligible bookings through Aariyana Tours and Travels.',
  },
  {
    question: 'Can I change my travel dates after booking?',
    answer:
      'Many bookings can be changed before departure, depending on availability and supplier policies. Some changes may include fare or service differences.',
  },
]

function HelpIcon({ name }) {
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

  if (name === 'calendar') {
    return (
      <svg {...commonProps}>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
      </svg>
    )
  }

  if (name === 'card') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h3" />
      </svg>
    )
  }

  if (name === 'globe') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    )
  }

  if (name === 'star') {
    return (
      <svg {...commonProps}>
        <path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6-4.3-4.2 6-.9L12 3Z" />
      </svg>
    )
  }

  if (name === 'user') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
        <path d="M18 5l1 1" />
        <path d="M19 3v3h3" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function SupportPage({ image, onNavigate }) {
  return (
    <div className="support-page">
      <section className="support-page-hero">
        <img src={image} alt="" />
        <div className="support-page-hero-overlay" />
        <Header activePage="support" onNavigate={onNavigate} />

        <div className="support-hero-content">
          <h1>How can I help you?</h1>
          <label className="support-search">
            <input type="search" placeholder="Search for booking, visas or travel advice..." />
          </label>
        </div>
      </section>

      <main className="support-page-main" id="support-contact">
        <section className="help-topic-grid" aria-label="Support topics">
          {helpTopics.map((topic) => (
            <article className="help-topic-card" key={topic.title}>
              <span aria-hidden="true">
                <HelpIcon name={topic.icon} />
              </span>
              <h2>{topic.title}</h2>
              <p>{topic.text}</p>
            </article>
          ))}
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="faq-heading">
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p>Quick Answers to your most common travel concerns</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default SupportPage

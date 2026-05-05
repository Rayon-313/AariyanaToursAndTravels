import Header from './header'
import SiteFooter from './SiteFooter'

const bookingStats = [
  { label: 'Travelers', value: '2 Adults' },
  { label: 'Stay', value: 'Oct 14 - Oct 21' },
  { label: 'Status', value: 'Confirmed' },
]

const tripHistory = [
  { title: 'Kyoto Cultural Tour', date: 'June 2024' },
  { title: 'Annapurna View Escape', date: 'April 2024' },
  { title: 'Dubai Skyline Break', date: 'January 2024' },
]

function BookingsPage({ images, onNavigate, onViewItinerary }) {
  const [heroImage, adventureImage, ...historyImages] = images

  return (
    <div className="bookings-page">
      <section className="destination-page-hero bookings-page-hero">
        <img className="destination-page-hero-image" src={heroImage} alt="" />
        <div className="destination-page-hero-overlay" />
        <Header activePage="bookings" onNavigate={onNavigate} />
      </section>

      <main className="bookings-page-main" id="bookings">
        

        <section className="next-adventure" aria-labelledby="next-adventure-title">
          <div className="booking-section-title">
            <h2 id="next-adventure-title">Next Adventure</h2>
            <section className="booking-welcome" aria-labelledby="bookings-title">
          <a href="#manage-booking">Manage Booking</a>
        </section>
          </div>

          <article className="next-adventure-card">
            <img src={adventureImage} alt="" />
            <div className="next-adventure-body">
              <div>
                <h3>Maldives Island Hoping</h3>
                <ul className="booking-meta">
                  {bookingStats.map((stat) => (
                    <li key={stat.label}>
                      <span>{stat.label}</span>
                      {stat.value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="booking-progress" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <button
                type="button"
                id="manage-booking"
                onClick={() =>
                  onViewItinerary({
                    title: 'Maldives Island Hoping',
                    location: 'Maldives',
                    price: 'Rs. 4,999',
                    rating: '4.9',
                    label: 'Confirmed Trip',
                    image: adventureImage,
                    source: 'booking',
                  })
                }
              >
                View Itinerary
              </button>
            </div>
          </article>
        </section>

        <section className="trip-history" aria-labelledby="trip-history-title">
          <h2 id="trip-history-title">Trip History</h2>
          <div className="trip-history-grid">
            {tripHistory.map((trip, index) => (
              <article className="trip-history-card" key={trip.title}>
                <img src={historyImages[index % historyImages.length]} alt="" />
                <div>
                  <h3>{trip.title}</h3>
                  <p>{trip.date}</p>
                  <span>Completed</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default BookingsPage

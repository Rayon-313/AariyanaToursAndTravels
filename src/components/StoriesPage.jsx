import Header from './header';
import SiteFooter from './SiteFooter';

import hero from '../assets/8d79f0d9-62cf-4237-a351-07d7329955d7.jpg';
import maldivesImg from '../assets/56a87116-9e51-414f-9e59-a9056595db4b.jpg';
import everestImg from '../assets/835a4b7a-2751-405d-8a84-c0ca1a6cdb75.jpg';
import pokharaImg from '../assets/0a9fa572-3c0b-47f8-ad7b-a20b30a5a88f.jpg';

const completedAdventures = [
  {
    id: 1,
    title: 'Maldives Island Hopping',
    date: 'Oct 2025',
    price: 'Rs. 4,999',
    description: 'Island hopping in the Maldives feels like stepping through a dream painted in shades of turquoise and gold. Each island offers its own charm — from crystal-clear lagoons and white sandy beaches to vibrant coral reefs and peaceful sunsets that melt into the ocean. Traveling by speedboat or seaplane between islands brings endless views of paradise, where luxury resorts, local island culture, and untouched nature blend perfectly together. Whether snorkeling with colorful marine life, enjoying fresh seafood by the shore, or simply relaxing under swaying palm trees, every stop in the Maldives creates unforgettable memories and a story worth sharing.',
    image: maldivesImg,
    stats: [
      { label: 'Travelers', value: '2 Adults' },
      { label: 'Stay', value: '7 Days' },
      { label: 'Status', value: 'Completed' },
    ]
  },
  {
    id: 2,
    title: 'Everest Base Camp',
    date: 'Jan 2026',
    price: 'Rs. 12,500',
    description: 'Trekking to Everest Base Camp is more than an adventure — it’s a journey through breathtaking Himalayan landscapes, ancient Sherpa villages, and skies filled with towering snow-capped peaks. Every step along the trail brings a sense of achievement, from crossing suspension bridges to watching sunrise over the majestic Mount Everest. The crisp mountain air, peaceful monasteries, and unforgettable views create an experience that stays with you long after the trek ends.',
    image: everestImg,
    stats: [
      { label: 'Travelers', value: '1 Adult' },
      { label: 'Stay', value: '14 Days' },
      { label: 'Status', value: 'Completed' },
    ]
  },
  {
    id: 3,
    title: 'Pokhara Lakeside Retreat',
    date: 'March 2026',
    price: 'Rs. 2,999',
    description:'A retreat by Lakeside in Pokhara offers the perfect escape into tranquility and natural beauty. Surrounded by the calm waters of Phewa Lake and the reflection of the Annapurna mountains, the atmosphere feels peaceful and refreshing. From relaxing boat rides and cozy cafés to colorful sunsets and quiet morning walks by the lake, Pokhara blends relaxation with scenic charm, making it an unforgettable destination for every traveler.',
    image: pokharaImg,
    stats: [
      { label: 'Travelers', value: '4 Adults' },
      { label: 'Stay', value: '3 Days' },
      { label: 'Status', value: 'Completed' },
    ]
  }
];

const tripHistory = [
  { title: 'Kyoto Cultural Tour', date: 'June 2024' },
  { title: 'Annapurna View Escape', date: 'April 2024' },
  { title: 'Dubai Skyline Break', date: 'January 2024' },
];

function StoriesPage({ onNavigate, onViewItinerary }) {  
  const heroImage = hero;

  return (
    <div className="bookings-page">
      <section className="destination-page-hero bookings-page-hero">
        <img className="destination-page-hero-image" src={heroImage} alt="Hero" />
        <div className="destination-page-hero-overlay" />
        <Header activePage="stories" onNavigate={onNavigate} />
      </section>

      <main className="bookings-page-main" id="bookings">
        <section className="next-adventure" aria-labelledby="recent-adventure-title">
          <div className="booking-section-title">
            <h2 id="recent-adventure-title">Past Adventures</h2>
            <div className="booking-welcome">
               <a href="#destinations" onClick={(e) => { e.preventDefault(); onNavigate('destinations'); }}>
                 Book Your Next Trip
               </a>
            </div>
          </div>

          {completedAdventures.map((trip) => (
            <article className="next-adventure-card completed-card" key={trip.id}>
              <img src={trip.image} alt={trip.title} />
              <div className="next-adventure-body">
                <div>
                  <div className="status-container">
                    <h3>{trip.title}</h3>
                    <span className="completed-badge">✓ Done</span>
                    <p>{trip.description}</p>
                  </div>
                  <ul className="booking-meta">
                    {trip.stats.map((stat) => (
                      <li key={stat.label}>
                        <span>{stat.label}</span>
                        {stat.value}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="booking-progress completed" aria-hidden="true">
                  <div className="progress-line full" style={{ width: '100%', backgroundColor: '#4CAF50' }} />
                </div>

                <button
                  className="view-itinerary-button"
                  type="button"
                  onClick={() =>
                    onViewItinerary({
                      title: trip.title,
                      location: trip.title.split(' ')[0],
                      price: trip.price,
                      rating: '5.0',
                      label: 'Trip Summary',
                      image: trip.image,
                      source: 'history',
                    })
                  }
                >
                  Book Your Trip
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="trip-history" aria-labelledby="trip-history-title">
          <h2 id="trip-history-title">Mini Gallery</h2>
          <div className="trip-history-grid">
            {tripHistory.map((trip, index) => (
              <article className="trip-history-card" key={trip.title}>
                <img src={completedAdventures[index % 3].image} alt={trip.title} />
                <div className="trip-history-info">
                  <h3>{trip.title}</h3>
                  <p>{trip.date}</p>
                  <span className="status-badge">Archived</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}

export default StoriesPage;

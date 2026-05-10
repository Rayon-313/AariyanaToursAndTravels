import { useState } from "react";
import Header from "./header";
import SiteFooter from "./SiteFooter";
import { companyPhoneNumber } from "./WhatsAppButton";
import { getDetailPageReviews } from "./reviewData";

const defaultTrip = {
  title: "Bali Tour",
  location: "Bali, Indonesia",
  duration: "10 days / 9 nights",
  group: "Max 12 people",
  language: "Indonesian / English",
  price: "Rs. 4,999",
  rating: "4.9",
  label: "Best Seller",
};

const defaultItinerary = [
  {
    title: "Arrival & Relaxation",
    text: "Land in Ngurah Rai International Airport and head to your hotel in Seminyak or Nusa Dua. Spend the day settling in by the beach, enjoying sunset views, and trying local Balinese food.",
  },
  {
    title: "Culture & Nature in Ubud",
    text: "Travel to Ubud, visit the Sacred Monkey Forest Sanctuary, explore rice terraces, and stop by Tegallalang Rice Terrace. End the day with a traditional dance performance.",
  },
  {
    title: "Temples & Scenic Spots",
    text: "Visit iconic temples like Tanah Lot Temple and Uluwatu Temple. Enjoy ocean views and catch a sunset Kecak dance at Uluwatu.",
  },
  {
    title: "Adventure or Island Trip",
    text: "Choose between water activities, snorkeling around the Nusa islands, or a day trip to Nusa Penida for dramatic cliffs and beaches.",
  },
];

const parsePrice = (price) => Number(String(price).replace(/[^0-9]/g, "")) || 0;

const formatPrice = (price) => `Rs. ${price.toLocaleString("en-IN")}`;

function TripInfoIcon({ name }) {
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

  if (name === 'duration') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    )
  }

  if (name === 'group') {
    return (
      <svg {...commonProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

function TripDetailPage({ trip, images, onNavigate }) {
  const selectedTrip = { ...defaultTrip, image: images[0], ...trip };
  const tripItinerary = selectedTrip.itinerary || defaultItinerary;
  const tripReviews = getDetailPageReviews(selectedTrip.reviewIndex ?? selectedTrip.title);
  const sideImage = selectedTrip.image || images[3];
  const [guestCount, setGuestCount] = useState(2);
  const pricePerPerson = parsePrice(selectedTrip.price);
  const earlyBirdDiscount = 500;
  const subtotal = pricePerPerson * guestCount;
  const total = Math.max(subtotal - earlyBirdDiscount, 0);
  const guestLabel = `${guestCount} ${guestCount === 1 ? "Adult" : "Adults"}`;

  return (
    <div className="trip-detail-page">
      <section className="trip-detail-hero">
        <img src={selectedTrip.image} alt="" />
        <div className="trip-detail-hero-overlay" />
        <Header
          activePage={
            selectedTrip.source === "booking" ? "bookings" : "destinations"
          }
          onNavigate={onNavigate}
        />
      </section>

      <main className="trip-detail-main">
        <section
          className="trip-detail-content"
          aria-labelledby="trip-detail-title"
        >
          <div className="trip-title-block">
            <div>
              <span>{selectedTrip.label}</span>
              <strong>{selectedTrip.rating}</strong>
            </div>
            <h1 id="trip-detail-title">{selectedTrip.title}</h1>
            <p>
              {selectedTrip.description ||
                'Discover beaches, temples, waterfalls, rice terraces, and unforgettable cultural activities with a curated journey designed for comfort, culture, and adventure.'}
            </p>
          </div>

          <div className="trip-info-grid" aria-label="Trip information">
            <article>
              <span className="trip-info-icon">
                <TripInfoIcon name="duration" />
              </span>
              <strong>Duration</strong>
              <p>{selectedTrip.duration}</p>
            </article>
            <article>
              <span className="trip-info-icon">
                <TripInfoIcon name="group" />
              </span>
              <strong>Group</strong>
              <p>{selectedTrip.group}</p>
            </article>
            <article>
              <span className="trip-info-icon">
                <TripInfoIcon name="language" />
              </span>
              <strong>Languages</strong>
              <p>{selectedTrip.language}</p>
            </article>
          </div>

          <section
            className="itinerary-section"
            aria-labelledby="itinerary-title"
          >
            <h2 id="itinerary-title">Itinerary</h2>
            <ol className="itinerary-list">
              {tripItinerary.map((item, index) => (
                <li key={item.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="guest-review-section"
            aria-labelledby="guest-review-title"
          >
            <div className="guest-review-heading">
              <div>
                <h2 id="guest-review-title">Guest Review</h2>
                <p>
                  <strong>4.9</strong>
                  <span>Based on 58 reviews</span>
                </p>
              </div>
              {/* <button type="button">Write a review</button> */}
            </div>

            <div className="review-detail-list">
              {tripReviews.map((review) => (
                <article key={review.name}>
                  <img
                    className="review-avatar"
                    src={review.avatar}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="review-title-row">
                      <div>
                        <h3>{review.name}</h3>
                        <p>{review.date}</p>
                      </div>
                      <span>{'*'.repeat(review.stars)}</span>
                    </div>
                    <p>{review.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

        <aside className="trip-booking-panel" aria-label="Booking summary">
           <img className="trip-side-image" src={sideImage} alt="" />
          <div className="trip-price-card">
            <p>
              <strong>{selectedTrip.price}</strong>
              <span>/ per person</span>
            </p>

            <label>
              Select Date
              <select defaultValue="May 12 - May 21, 2024">
                <option>May 12 - May 21, 2024</option>
                <option>June 10 - June 19, 2024</option>
                <option>July 08 - July 17, 2024</option>
              </select>
            </label>

            <label>
              Guests
              <span className="guest-stepper">
                <button
                  type="button"
                  onClick={() =>
                    setGuestCount((currentCount) =>
                      Math.max(currentCount - 1, 1),
                    )
                  }
                  disabled={guestCount === 1}
                  aria-label="Decrease guests"
                >
                  -
                </button>
                <strong>{guestLabel}</strong>
                <button
                  type="button"
                  onClick={() =>
                    setGuestCount((currentCount) => currentCount + 1)
                  }
                  aria-label="Increase guests"
                >
                  +
                </button>
              </span>
            </label>

            <div className="price-lines">
              <p>
                <span>
                  {formatPrice(pricePerPerson)} x {guestCount}
                </span>
                <strong>{formatPrice(subtotal)}</strong>
              </p>
              <p>
                <span>Early Bird Discount</span>
                <strong>-{formatPrice(earlyBirdDiscount)}</strong>
              </p>
            </div>

            <div className="trip-total">
              <span>Total</span>
              <div>
                <strong>{formatPrice(total)}</strong>
                <button className="book-now-button" type="button">
                  <a
                    rel="noopener noreferrer"
                    target="_blank" // Added this so it opens in a new tab
                    href={`https://wa.me/${companyPhoneNumber}`} //Added so it opens the company whats app chat
                    aria-label="Chat on WhatsApp"
                  >
                    Book now
                  </a>
                </button>
              </div>
            </div>
          </div>

         
        </aside>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}

export default TripDetailPage;

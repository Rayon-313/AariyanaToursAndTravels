const reviews = [
  { stars: 5, name: 'Manthan Maharjan', avatar: '/travellers/traveller-1.png', text: 'Amazing experience from start to finish. Everything was well-organized, and I never had to worry about any details during the trip.' },
  { stars: 5, name: 'Rayon Maharjan', avatar: '/travellers/traveller-2.png', text: 'The team was professional, friendly, and always ready to help. They made the whole journey feel comfortable and stress-free.' },
  { stars: 5, name: 'Ashutosh Ghimire', avatar: '/travellers/traveller-3.png', text: 'Great value for money with a well-planned itinerary. Every part of the trip felt thoughtfully arranged and enjoyable.' },
  { stars: 3, name: 'Mandeep Acharya', avatar: '/travellers/traveller-4.png', text: 'Booking was simple and smooth, and communication was quick and clear. I always felt informed and confident in my plans.' },
  { stars: 5, name: 'Snigdha Joshi', avatar: '/travellers/traveller-5.png', text: 'A smooth and memorable journey overall. The service exceeded my expectations, and I would definitely travel with them again.' },
  { stars: 4, name: 'Priyanshui Labh', avatar: '/travellers/traveller-6.png', text: 'Excellent planning and support throughout the trip. Every detail was handled carefully, making it a truly relaxing experience.' },
]

function Stars({ rating }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {'\u2605'.repeat(rating)}
      <span>{'\u2605'.repeat(5 - rating)}</span>
    </div>
  )
}

function TravellerSay() {
  return (
    <section className="traveller-section">
      <div className="section-heading">
        <h2>What Our Travellers Says</h2>
        <p>Travel experiences of our clients who recently returned from their trips.</p>
        <span className="chat-line" aria-hidden="true" />
      </div>

      <div className="review-grid">
        {reviews.map((review, index) => (
          <article className="review-card" key={index}>
            <Stars rating={review.stars} />
            <p>"{review.text}"</p>
            <div className="reviewer">
              <img src={review.avatar} alt={review.name} loading="lazy" />
              <div>
                <strong>{review.name}</strong>
                <small>Travelled to Bali</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TravellerSay

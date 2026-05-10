import { travellerReviews } from './reviewData'

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
        {travellerReviews.map((review, index) => (
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

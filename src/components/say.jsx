const reviews = [
  { stars: 5, text: 'Aariyana Tours made our honeymoon absolutely perfect. Every detail of our Bali trip was handled with such professionalism. Truly a worry-free experience!' },
  { stars: 5, text: 'The package felt personal from start to finish. Hotels, transport, and support were all arranged beautifully.' },
  { stars: 4, text: 'Our family trip was easy and memorable. The team helped us pick the right plan and stayed in touch throughout.' },
  { stars: 3, text: 'Good service and quick answers whenever we had questions. The trip was comfortable and well planned.' },
  { stars: 5, text: 'Aariyana Tours gave us a smooth vacation with no stress. We loved how simple everything felt.' },
  { stars: 4, text: 'Great destinations, friendly support, and a simple booking process. We would travel with them again.' },
]

function Stars({ rating }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
      <span>{'★'.repeat(5 - rating)}</span>
    </div>
  )
}

function TravellerSay() {
  return (
    <section className="traveller-section">
      <div className="section-heading">
        <h2>What Our Travellers Says</h2>
        <p>Travel experiences of our clients who recently returned from their trips.</p>
        <span className="chat-line" aria-hidden="true">▱</span>
      </div>

      <div className="review-grid">
        {reviews.map((review, index) => (
          <article className="review-card" key={index}>
            <Stars rating={review.stars} />
            <p>“{review.text}”</p>
            <div className="reviewer">
              <span />
              <div>
                <strong>Sarah Otters</strong>
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

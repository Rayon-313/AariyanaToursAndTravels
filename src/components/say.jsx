const reviews = [
  { stars: 5, text: 'Aariyana Tours made our honeymoon absolutely perfect. Every detail of our Bali trip was handled with such professionalism. Truly a worry-free experience!' },
  { stars: 5, text: 'Aariyana Tours made our honeymoon absolutely perfect. Every detail of our Bali trip was handled with such professionalism. Truly a worry-free experience!' },
  { stars: 5, text: 'Aariyana Tours made our honeymoon absolutely perfect. Every detail of our Bali trip was handled with such professionalism. Truly a worry-free experience!' },
  { stars: 3, text: 'Aariyana Tours made our honeymoon absolutely perfect. Every detail of our Bali trip was handled with such professionalism. Truly a worry-free experience!' },
  { stars: 5, text: 'Aariyana Tours made our honeymoon absolutely perfect. Every detail of our Bali trip was handled with such professionalism. Truly a worry-free experience!' },
  { stars: 4, text: 'Aariyana Tours made our honeymoon absolutely perfect. Every detail of our Bali trip was handled with such professionalism. Truly a worry-free experience!' },
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
        <span className="chat-line" aria-hidden="true" />
      </div>

      <div className="review-grid">
        {reviews.map((review, index) => (
          <article className="review-card" key={index}>
            <Stars rating={review.stars} />
            <p>"{review.text}"</p>
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

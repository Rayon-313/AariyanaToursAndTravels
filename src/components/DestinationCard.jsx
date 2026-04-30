function DestinationCard({ image, label = 'Popular', title = 'Bali, Indonesia', duration = '7 Days Tour', price = 'Rs 89999', featured = false }) {
  return (
    <article className={`destination-card${featured ? ' is-featured' : ''}`}>
      <img src={image} alt="" />
      <div className="card-shade" />
      <div className="card-content">
        <span className={`tag ${label.toLowerCase().replace(' ', '-')}`}>{label}</span>
        <div className="destination-meta">
          <div>
            <h3>{title}</h3>
            <p>{duration}</p>
          </div>
          <strong>{price}</strong>
        </div>
      </div>
    </article>
  )
}

export default DestinationCard

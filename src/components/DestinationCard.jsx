function DestinationCard({
  image,
  label = 'Popular',
  title = 'Bali, Indonesia',
  duration = '7 Days Tour',
  price = 'Rs 89999',
  featured = false,
  onClick,
}) {
  const handleKeyDown = (event) => {
    if (!onClick || (event.key !== 'Enter' && event.key !== ' ')) {
      return
    }

    event.preventDefault()
    onClick()
  }

  return (
    <article
      className={`destination-card${featured ? ' is-featured' : ''}${onClick ? ' is-clickable' : ''}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <img src={image} alt="" />
      <div className="card-shade" />
      <div className="card-content">
        <span className={`tag ${label.toLowerCase().replace(' ', '-')}`}>{label}</span>
        <div className="destination-meta">
          <div>
            <h3>{title}</h3>
            {duration && <p>{duration}</p>}
          </div>
          {price && <strong>{price}</strong>}
        </div>
      </div>
    </article>
  )
}

export default DestinationCard

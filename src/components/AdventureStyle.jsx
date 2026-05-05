function AdventureStyle({ images, onViewAll }) {
  return (
    <section className="adventure-section">
      <div className="section-title-row">
        <h2>Different Adventure Styles For You</h2>
        <button type="button" onClick={onViewAll}>View All</button>
      </div>

      <div className="adventure-gallery">
        <img className="adventure-large" src={images[0]} alt="" />
        <img src={images[1]} alt="" />
        <img src={images[2]} alt="" />
        <img src={images[3]} alt="" />
        <img src={images[0]} alt="" />
      </div>

    </section>
  )
}

export default AdventureStyle

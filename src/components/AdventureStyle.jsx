function AdventureStyle({ images }) {
  return (
    <section className="adventure-section">
      <h2>Different Adventure Styles For You</h2>

      <div className="adventure-gallery">
        <img className="adventure-large" src={images[0]} alt="" />
        <img src={images[1]} alt="" />
        <img src={images[2]} alt="" />
        <img src={images[3]} alt="" />
        <img src={images[0]} alt="" />
      </div>

      <div className="adventure-action">
        <button type="button">View All</button>
      </div>
    </section>
  )
}

export default AdventureStyle

const benefits = ['Custom tours', 'Easy stays', 'Visa help', 'Smooth travel', '24/7 support']

function ExploreWorld({ image }) {
  return (
    <section className="explore-section">
      <h2>Explore the world with us</h2>

      <div className="explore-content">
        <div className="globe-frame" aria-hidden="true">
          <div className="globe-sphere" style={{ '--globe-image': `url(${image})` }}>
            <span className="globe-texture" />
          </div>
        </div>

        <ol className="benefit-list">
          {benefits.map((benefit, index) => (
            <li key={benefit}>
              <span>{index + 1}</span>
              {benefit}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ExploreWorld

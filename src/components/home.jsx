import Header from './header'

const filters = ['Choose Destination', 'Choose Package', 'Choose Duration']

function Home({ images, onNavigate }) {
  const [heroImage] = images

  return (
    <section className="hero-section" id="home">
      <img className="hero-image" src={heroImage} alt="" />
      <div className="hero-overlay" />
      <Header activePage="home" onNavigate={onNavigate} />

      <div className="hero-content">
        <h1>Experience The Magic</h1>
        <form className="booking-search">
          {filters.map((filter) => (
            <button type="button" key={filter}>
              {filter}
              <span className="filter-chevron" aria-hidden="true" />
            </button>
          ))}
          <button type="submit" className="search-submit">Search</button>
        </form>
        <p>Immerse yourself in breathtaking journeys</p>
      </div>
    </section>
  )
}

export default Home

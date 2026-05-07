import Header from "./header";

const filters = ["Choose Destination", "Choose Package", "Choose Duration"];

function Home({ images, onNavigate }) {
  const [heroImage] = images;

  return (
    <section className="hero-section" id="home">
      <img className="hero-image" src={heroImage} alt="" />
      <div className="hero-overlay" />
      <Header activePage="home" onNavigate={onNavigate} />

      <div className="hero-content">
        <h1>Experience The Magic</h1>
        <form className="booking-search">
          {filters.map((filter) => (
            <div key={filter} className="filter-button">
              <select className="filter-dropdown">
                <option value="">{filter}</option>
                {filter === "Choose Destination" && (
                  <>
                    <option>Nepal</option>
                    <option>India</option>
                    <option>Bhutan</option>
                  </>
                )}

                {filter === "Choose Package" && (
                  <>
                    <option>Standard</option>
                    <option>Premium</option>
                    <option>Luxury</option>
                  </>
                )}

                {filter === "Choose Duration" && (
                  <>
                    <option>3 Days</option>
                    <option>5 Days</option>
                    <option>7 Days</option>
                  </>
                )}
              </select>

              <span className="filter-chevron" aria-hidden="true" />
            </div>
          ))}
          <button type="submit" className="search-submit">
            Search
          </button>
        </form>
        <p>Immerse yourself in breathtaking journeys</p>
      </div>
    </section>
  );
}

export default Home;

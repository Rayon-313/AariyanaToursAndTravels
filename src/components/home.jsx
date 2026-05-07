import { useState, useEffect } from 'react'
import Header from './header'

// Select Banner Manually
import banner1 from '../assets/0a9fa572-3c0b-47f8-ad7b-a20b30a5a88f.jpg';
import banner2 from '../assets/56a87116-9e51-414f-9e59-a9056595db4b.jpg';
import banner3 from '../assets/d8a40a5f-73da-41dd-9fbc-c7a5a7289c14.jpg';
import banner4 from '../assets/56a87116-9e51-414f-9e59-a9056595db4b.jpg';
import banner5 from '../assets/b4052342-1379-48ae-87d9-83d6b67b7317.jpg';

const filters = ['Choose Destination', 'Choose Package', 'Choose Duration']

function Home({ images, onNavigate }) {

  // For adding the banner
  const bannerImages = [banner1, banner2, banner3, banner4, banner5]; //for selecting images
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    },1900) // Changes every 5 seconds
    return () => clearInterval(interval)
  }, [bannerImages.length])
  // const [heroImage] = images (commented because it selectes the firstimage from the assests)

  return (
    <section className="hero-section" id="home">

      {/* Banner Section */}
      <div className="banner-container">
        {bannerImages.map((img, index) => (
          <img key={index} src={img} alt={`banner ${index}`} className="hero-image"
          style={{
            opacity: index === currentSlide ? 1: 0,
            position: 'absolute',
            transition: 'opacity 1.5s ease-in-out',
            height: '100%',
            width: '100%',
            objectFit: 'cover'
          }}/>
        ))}
      </div>
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
        </form>
        <p>Immerse yourself in breathtaking journeys</p>
      </div>
    </section>
  )
}

export default Home

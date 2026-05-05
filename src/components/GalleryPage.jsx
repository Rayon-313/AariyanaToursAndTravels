import Header from './header'
import SiteFooter from './SiteFooter'

function GalleryPage({ images, onNavigate }) {
  const galleryImages = [
    images[0],
    images[1],
    images[0],
    images[2],
    images[1],
    images[3],
    images[0],
    images[2],
  ]

  return (
    <div className="gallery-page">
      <section className="destination-page-hero gallery-page-hero">
        <img className="destination-page-hero-image" src={images[0]} alt="" />
        <div className="destination-page-hero-overlay" />
        <Header activePage="home" onNavigate={onNavigate} />
      </section>

      <main className="gallery-page-main">
        <div className="gallery-heading">
          <h1>Gallery</h1>
          <p>Moments captured from our unforgettable journeys</p>
        </div>

        <div className="photo-gallery-grid" aria-label="Travel photo gallery">
          {galleryImages.map((image, index) => (
            <img
              className={index === 0 ? 'wide' : index === 1 || index === 4 ? 'tall' : undefined}
              src={image}
              alt=""
              key={`${image}-${index}`}
            />
          ))}
        </div>

        <button className="more-photos-button" type="button">
          View more Photos
          <span aria-hidden="true" />
        </button>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default GalleryPage

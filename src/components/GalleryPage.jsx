import { useEffect, useState } from 'react'
import Header from './header'
import SiteFooter from './SiteFooter'

function GalleryPage({ images, onNavigate }) {
  const [selectedImage, setSelectedImage] = useState(null)

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

  useEffect(() => {
    if (!selectedImage) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

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
            <button
              className={index === 0 ? 'wide' : index === 1 || index === 4 ? 'tall' : undefined}
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>

        <button className="more-photos-button" type="button">
          View more Photos
          <span aria-hidden="true" />
        </button>
      </main>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-lightbox-close"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery image preview"
          >
            
          </button>
          <img src={selectedImage} alt="" onClick={(event) => event.stopPropagation()} />
        </div>
      )}

      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default GalleryPage

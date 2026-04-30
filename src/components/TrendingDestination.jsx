import DestinationCard from './DestinationCard'

const destinations = [
  { label: 'Cultural', title: 'Amalfi Coast, Italy', duration: '10 Days Tour', price: 'Rs 129999' },
  { label: 'Hot Deal', title: 'Bali, Indonesia', duration: '7 Days Tour', price: 'Rs 89999' },
  { label: 'Popular', title: 'Bali, Indonesia', duration: '7 Days Tour', price: 'Rs 89999', featured: true },
  { label: 'Cultural', title: 'Amalfi Coast, Italy', duration: '10 Days Tour', price: 'Rs 129999' },
  { label: 'Hot Deal', title: 'Bali, Indonesia', duration: '7 Days Tour', price: 'Rs 89999' },
  { label: 'Popular', title: 'Bali, Indonesia', duration: '7 Days Tour', price: 'Rs 89999' },
]

function TrendingDestination({ images }) {
  return (
    <section className="destination-section" id="destinations">
      <div className="section-title-row">
        <h2>Trending Destinations</h2>
        <button type="button">View All</button>
      </div>

      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} image={images[index % images.length]} {...destination} />
        ))}
      </div>
    </section>
  )
}

export default TrendingDestination

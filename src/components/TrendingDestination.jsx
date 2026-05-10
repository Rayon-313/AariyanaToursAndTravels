import DestinationCard from './DestinationCard'
import { baseDestinations, getDestinationImage } from './destinationData'

const labels = ['Popular', 'Hot Deal', 'Popular', 'Cultural', 'Hot Deal', 'Popular']
const featuredRegions = ['Indonesia', 'Singapore', 'Dubai', 'Bhutan', 'Nepal', 'Trek']
const destinations = featuredRegions.map((region) =>
  baseDestinations.find((destination) => destination.region === region),
).filter(Boolean).map((destination, index) => ({
  ...destination,
  label: labels[index],
  featured: index === 2,
}))

function TrendingDestination({ images, onViewAll }) {
  return (
    <section className="destination-section" id="destinations">
      <div className="section-title-row">
        <h2>Trending Destinations</h2>
        <button type="button" onClick={onViewAll}>View All</button>
      </div>

      <div className="destination-grid">
        {destinations.map((destination) => (
          <DestinationCard key={`${destination.title}-${destination.duration}`} image={getDestinationImage(destination, images)} {...destination} />
        ))}
      </div>
    </section>
  )
}

export default TrendingDestination

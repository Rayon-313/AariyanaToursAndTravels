import DestinationCard from './DestinationCard'

const choices = [
  { label: 'Cultural', title: 'Amalfi Coast, Italy', duration: '10 Days Tour', price: 'Rs 129999' },
  { label: 'Hot Deal', title: 'Bali, Indonesia', duration: '7 Days Tour', price: 'Rs 89999' },
  { label: 'Popular', title: 'Bali, Indonesia', duration: '7 Days Tour', price: 'Rs 89999' },
  { label: 'Cultural', title: 'Amalfi Coast, Italy', duration: '10 Days Tour', price: 'Rs 129999' },
  { label: 'Hot Deal', title: 'Bali, Indonesia', duration: '7 Days Tour', price: 'Rs 89999' },
  { label: 'Popular', title: 'Bali, Indonesia', duration: '7 Days Tour', price: 'Rs 89999' },
]

function ChooseDestination({ images, onViewAll }) {
  return (
    <section className="destination-section choose-section">
      <div className="section-title-row">
        <h2>Choose Your Destinations</h2>
        <button type="button" onClick={onViewAll}>View All</button>
      </div>

      <div className="destination-grid">
        {choices.map((choice, index) => (
          <DestinationCard key={index} image={images[(index + 2) % images.length]} {...choice} />
        ))}
      </div>
    </section>
  )
}

export default ChooseDestination

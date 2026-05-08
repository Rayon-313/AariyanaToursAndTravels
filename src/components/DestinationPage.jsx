import { useMemo, useState } from 'react'
import Header from './header'
import SiteFooter from './SiteFooter'

const regions = ['Southeast Asia', 'Europe', 'Middle East', 'Oceania']

export const baseDestinations = [
  { title: 'Bali, Indonesia', price: 'Rs. 3,999', priceValue: 3999, rating: '4.9', region: 'Southeast Asia', imageIndex: 0 },
  { title: 'India Golden Triangle', price: 'Rs. 1,999', priceValue: 1999, rating: '4.8', region: 'Southeast Asia', imageIndex: 1 },
  { title: 'Bhutan Happiness Trail', price: 'Rs. 2,599', priceValue: 2599, rating: '4.9', region: 'Southeast Asia', imageIndex: 2 },
  { title: 'Tibet Himalayan Route', price: 'Rs. 3,599', priceValue: 3599, rating: '4.8', region: 'Southeast Asia', imageIndex: 3 },
  { title: 'Amalfi Coast, Italy', price: 'Rs. 2,299', priceValue: 2299, rating: '4.9', region: 'Europe', imageIndex: 4 },
  { title: 'Dubai Skyline Break', price: 'Rs. 3,499', priceValue: 3499, rating: '4.8', region: 'Middle East', imageIndex: 5 },
  { title: 'Maldives Island Hopping', price: 'Rs. 3,899', priceValue: 3899, rating: '4.9', region: 'Oceania', imageIndex: 6 },
  { title: 'Kyoto Cultural Tour', price: 'Rs. 3,299', priceValue: 3299, rating: '4.8', region: 'Southeast Asia', imageIndex: 7 },
]

function DestinationPage({ images, onNavigate, onViewDetails, searchQuery = '' }) {
  const [heroImage] = images
  const [selectedRegions, setSelectedRegions] = useState(regions)
  const [maxBudget, setMaxBudget] = useState(3999)
  const [extraCount, setExtraCount] = useState(0)
  const hasLoadedMore = extraCount > 0
  const normalizedSearchQuery = searchQuery.trim().toLowerCase()

  const destinationPool = useMemo(
    () => {
      const repeatedFirstRow = Array.from({ length: extraCount }, (_, index) => {
        const destination = baseDestinations[index % 4]

        return {
          ...destination,
          key: `loaded-${destination.region}-${destination.price}-${index}`,
        }
      })

      return [
        ...baseDestinations.map((destination, index) => ({
          ...destination,
          key: `base-${destination.region}-${destination.price}-${index}`,
        })),
        ...repeatedFirstRow,
      ]
    },
    [extraCount],
  )

  const filteredDestinations = destinationPool.filter((destination) => {
    const regionMatches = selectedRegions.length === 0 || selectedRegions.includes(destination.region)
    const searchMatches =
      normalizedSearchQuery.length === 0 ||
      `${destination.title} ${destination.region}`.toLowerCase().includes(normalizedSearchQuery)

    return regionMatches && destination.priceValue <= maxBudget && searchMatches
  })

  const toggleRegion = (region) => {
    setSelectedRegions((currentRegions) =>
      currentRegions.includes(region)
        ? currentRegions.filter((currentRegion) => currentRegion !== region)
        : [...currentRegions, region],
    )
  }

  const clearFilters = () => {
    setSelectedRegions([])
    setMaxBudget(3999)
    setExtraCount(0)
  }

  return (
    <div className="destination-page">
      <section className="destination-page-hero">
        <img className="destination-page-hero-image" src={heroImage} alt="" />
        <div className="destination-page-hero-overlay" />
        <Header activePage="destinations" onNavigate={onNavigate} />
      </section>

      <main className="destination-page-main">
        <aside className="destination-filter-panel" aria-label="Destination filters">
          <div className="filter-title-row">
            <h2>Filters</h2>
            <button type="button" onClick={clearFilters}>
              Clear all
            </button>
          </div>

          <section>
            <h3>Region</h3>
            {regions.map((region) => (
              <label className="filter-check" key={region}>
                <input
                  type="checkbox"
                  checked={selectedRegions.includes(region)}
                  onChange={() => toggleRegion(region)}
                />
                <span>{region}</span>
              </label>
            ))}
          </section>

          <section>
            <h3>Budget Range</h3>
            <div className="budget-control">
              <input
                type="range"
                min="1999"
                max="3999"
                step="100"
                value={maxBudget}
                onChange={(event) => {
                  setMaxBudget(Number(event.target.value))
                }}
                aria-label="Maximum budget"
              />
              <span>Up to Rs. {maxBudget.toLocaleString('en-IN')}</span>
            </div>
          </section>
        </aside>

        <section className="destination-results" aria-labelledby="destination-page-title">
          <div className="destination-results-heading">
            <p>Explore Destinations</p>
            <h1 id="destination-page-title">
              {searchQuery ? `Search results for "${searchQuery}"` : 'Curated experiences across 4 continents'}
            </h1>
          </div>

          <div className="destination-results-grid">
            {filteredDestinations.map((destination) => (
              <article className="destination-result-card" key={destination.key}>
                <img src={images[destination.imageIndex % images.length]} alt="" />
                <div className="result-card-body">
                  <div className="result-card-title">
                    <h2>{destination.title}</h2>
                    <span>{destination.rating}</span>
                  </div>
                  <p>Explore whitewashed villages and crystal clear water of the place...</p>
                </div>
                <div className="result-card-action">
                  <div>
                    <span>Starting from</span>
                    <strong>{destination.price}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onViewDetails({
                        title: destination.title,
                        location: destination.region,
                        price: destination.price,
                        rating: destination.rating,
                        image: images[destination.imageIndex % images.length],
                        source: 'destination',
                      })
                    }
                  >
                    Details
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <p className="empty-destination-message">No destinations match those filters.</p>
          )}

          <button
            className="load-destinations-button"
            type="button"
            onClick={() => setExtraCount(4)}
            disabled={hasLoadedMore}
          >
            {hasLoadedMore ? 'All Destinations Loaded' : 'Load More Destinations'}
            <span aria-hidden="true" />
          </button>
        </section>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default DestinationPage

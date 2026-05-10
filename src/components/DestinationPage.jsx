import { useMemo, useState } from 'react'
import Header from './header'
import SiteFooter from './SiteFooter'
import {
  baseDestinations,
  budgetMax,
  budgetMin,
  getDestinationImage,
  getDestinationTripDetails,
  regions,
  sortByCountryAndDuration,
} from './destinationData'
function DestinationPage({ images, onNavigate, onViewDetails, searchQuery = '', selectedRegion = '' }) {
  const [heroImage] = images
  const [selectedRegions, setSelectedRegions] = useState(() =>
    selectedRegion && regions.includes(selectedRegion) ? [selectedRegion] : regions,
  )
  const [maxBudget, setMaxBudget] = useState(budgetMax)
  const normalizedSearchQuery = searchQuery.trim().toLowerCase()

  const destinationPool = useMemo(
    () =>
      baseDestinations.map((destination, index) => ({
        ...destination,
        key: `base-${destination.region}-${destination.price}-${index}`,
        reviewIndex: index,
      })),
    [],
  )

  const filteredDestinations = destinationPool
    .filter((destination) => {
      const regionMatches = selectedRegions.length === 0 || selectedRegions.includes(destination.region)
      const searchMatches =
        normalizedSearchQuery.length === 0 ||
        `${destination.title} ${destination.region} ${destination.duration}`.toLowerCase().includes(normalizedSearchQuery)

      return regionMatches && destination.priceValue <= maxBudget && searchMatches
    })
    .sort(sortByCountryAndDuration)

  const toggleRegion = (region) => {
    setSelectedRegions((currentRegions) =>
      currentRegions.includes(region)
        ? currentRegions.filter((currentRegion) => currentRegion !== region)
        : [...currentRegions, region],
    )
  }

  const clearFilters = () => {
    setSelectedRegions([])
    setMaxBudget(budgetMax)
  }

  return (
    <div className="destination-page">
      <section className="destination-page-hero">
        <img className="destination-page-hero-image" src={heroImage} alt="" />
        <div className="destination-page-hero-overlay" />
        <Header activePage={selectedRegion === 'Trek' ? 'trek' : 'destinations'} onNavigate={onNavigate} />
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
            <h3>Places & Experiences</h3>
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
                min={budgetMin}
                max={budgetMax}
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
                <img src={getDestinationImage(destination, images)} alt="" />
                <div className="result-card-body">
                  <div className="result-card-title">
                    <h2>{destination.title}</h2>
                    <span>{destination.rating}</span>
                  </div>
                  <p>{destination.duration}</p>
                </div>
                <div className="result-card-action">
                  <div>
                    <span>Starting from</span>
                    <strong>{destination.price}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => onViewDetails(getDestinationTripDetails(destination, images))}
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
        </section>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default DestinationPage


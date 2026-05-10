import { useEffect, useMemo, useState } from 'react'
import Header from './header'
import SiteFooter from './SiteFooter'
import ebcImage from '../assets/ebc.webp'
import abcImage from '../assets/abc.avif'
import langtangImage from '../assets/langtang.webp'
import singaporeCityImage from '../assets/singaporecity.jpg'
import dubaiDesertImage from '../assets/dubaidesert.jpg'
import bhutanThimphuImage from '../assets/bhutanthimpu.webp'
import pokharaNepalImage from '../assets/pokharanepal.avif'
import chitwanImage from '../assets/chitwan.jpg'

export const regions = ['Indonesia', 'Vietnam', 'Thailand', 'Singapore', 'Dubai', 'Bhutan', 'Nepal', 'Trek']

export const baseDestinations = [
  { title: 'Bali, Indonesia', duration: '7 days & 6 nights', price: 'Rs. 3,999', priceValue: 3999, rating: '4.9', region: 'Indonesia', imageIndex: 0 },
  { title: 'Bali, Indonesia', duration: '6 days & 5 nights', price: 'Rs. 3,499', priceValue: 3499, rating: '4.8', region: 'Indonesia', imageIndex: 3 },
  { title: 'Bali, Indonesia', duration: '5 days & 4 nights', price: 'Rs. 2,999', priceValue: 2999, rating: '4.8', region: 'Indonesia', imageIndex: 4 },
  { title: 'Ho Chi Minh City, Vietnam', duration: '7 days & 6 nights', price: 'Rs. 2,499', priceValue: 2499, rating: '4.8', region: 'Vietnam', imageIndex: 1 },
  { title: 'Ho Chi Minh City, Vietnam', duration: '6 days & 5 nights', price: 'Rs. 2,199', priceValue: 2199, rating: '4.7', region: 'Vietnam', imageIndex: 6 },
  { title: 'Ho Chi Minh City, Vietnam', duration: '5 days & 4 nights', price: 'Rs. 1,999', priceValue: 1999, rating: '4.7', region: 'Vietnam', imageIndex: 7 },
  { title: 'Hanoi, Vietnam', duration: '7 days & 6 nights', price: 'Rs. 2,699', priceValue: 2699, rating: '4.8', region: 'Vietnam', imageIndex: 8 },
  { title: 'Hanoi, Vietnam', duration: '6 days & 5 nights', price: 'Rs. 2,399', priceValue: 2399, rating: '4.7', region: 'Vietnam', imageIndex: 9 },
  { title: 'Hanoi, Vietnam', duration: '5 days & 4 nights', price: 'Rs. 2,099', priceValue: 2099, rating: '4.7', region: 'Vietnam', imageIndex: 2 },
  { title: 'Bangkok & Pattaya, Thailand', duration: '7 days & 6 nights', price: 'Rs. 2,899', priceValue: 2899, rating: '4.8', region: 'Thailand', imageIndex: 12 },
  { title: 'Bangkok & Pattaya, Thailand', duration: '6 days & 5 nights', price: 'Rs. 2,599', priceValue: 2599, rating: '4.8', region: 'Thailand', imageIndex: 11 },
  { title: 'Bangkok & Pattaya, Thailand', duration: '5 days & 4 nights', price: 'Rs. 2,299', priceValue: 2299, rating: '4.7', region: 'Thailand', imageIndex: 10 },
  { title: 'Singapore City Lights', duration: '5 days & 4 nights', price: 'Rs. 3,299', priceValue: 3299, rating: '4.8', region: 'Singapore', imageIndex: 5, image: singaporeCityImage },
  { title: 'Dubai Desert & Marina Tour', duration: '5 days & 4 nights', price: 'Rs. 3,999', priceValue: 3999, rating: '4.8', region: 'Dubai', imageIndex: 0, image: dubaiDesertImage },
  { title: 'Thimphu & Paro, Bhutan', duration: '6 days & 5 nights', price: 'Rs. 3,799', priceValue: 3799, rating: '4.9', region: 'Bhutan', imageIndex: 1, image: bhutanThimphuImage },
  { title: 'Kathmandu & Pokhara, Nepal', duration: '6 days & 5 nights', price: 'Rs. 2,499', priceValue: 2499, rating: '4.8', region: 'Nepal', imageIndex: 3, image: pokharaNepalImage },
  { title: 'Chitwan Jungle Safari, Nepal', duration: '4 days & 3 nights', price: 'Rs. 1,999', priceValue: 1999, rating: '4.7', region: 'Nepal', imageIndex: 4, image: chitwanImage },
  { title: 'Everest Base Camp Trek', duration: '14 days & 13 nights', price: 'Rs. 6,499', priceValue: 6499, rating: '4.9', region: 'Trek', imageIndex: 5, image: ebcImage },
  { title: 'Annapurna Base Camp Trek', duration: '11 days & 10 nights', price: 'Rs. 4,999', priceValue: 4999, rating: '4.8', region: 'Trek', imageIndex: 6, image: abcImage },
  { title: 'Langtang Valley Trek', duration: '8 days & 7 nights', price: 'Rs. 3,499', priceValue: 3499, rating: '4.7', region: 'Trek', imageIndex: 7, image: langtangImage },
]

export const getDestinationImage = (destination, images = []) => {
  if (destination.image) {
    return destination.image
  }

  if (!images.length) {
    return ''
  }

  return images[destination.imageIndex % images.length]
}

const budgetMin = Math.min(...baseDestinations.map((destination) => destination.priceValue))
const budgetMax = Math.max(...baseDestinations.map((destination) => destination.priceValue))

const destinationOrder = new Map()

baseDestinations.forEach((destination) => {
  if (!destinationOrder.has(destination.title)) {
    destinationOrder.set(destination.title, destinationOrder.size)
  }
})

const getTripDays = (duration) => Number(duration.match(/\d+/)?.[0] || 0)

const sortByCountryAndDuration = (firstDestination, secondDestination) => {
  const regionDifference = regions.indexOf(firstDestination.region) - regions.indexOf(secondDestination.region)

  if (regionDifference !== 0) {
    return regionDifference
  }

  const destinationDifference =
    destinationOrder.get(firstDestination.title) - destinationOrder.get(secondDestination.title)

  if (destinationDifference !== 0) {
    return destinationDifference
  }

  return getTripDays(firstDestination.duration) - getTripDays(secondDestination.duration)
}

function DestinationPage({ images, onNavigate, onViewDetails, searchQuery = '', selectedRegion = '' }) {
  const [heroImage] = images
  const [selectedRegions, setSelectedRegions] = useState(() =>
    selectedRegion && regions.includes(selectedRegion) ? [selectedRegion] : regions,
  )
  const [maxBudget, setMaxBudget] = useState(budgetMax)
  const normalizedSearchQuery = searchQuery.trim().toLowerCase()

  useEffect(() => {
    setSelectedRegions(selectedRegion && regions.includes(selectedRegion) ? [selectedRegion] : regions)
  }, [selectedRegion])

  const destinationPool = useMemo(
    () =>
      baseDestinations.map((destination, index) => ({
        ...destination,
        key: `base-${destination.region}-${destination.price}-${index}`,
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
                    onClick={() =>
                      onViewDetails({
                        title: destination.title,
                        location: destination.region,
                        price: destination.price,
                        rating: destination.rating,
                        duration: destination.duration,
                        image: getDestinationImage(destination, images),
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

        </section>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default DestinationPage

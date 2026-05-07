import './App.css'
import AdventureStyle from './components/AdventureStyle'
import AboutPage from './components/AboutPage'
import BookingsPage from './components/BookingsPage'
import ChooseDestination from './components/ChooseDestination'
import DestinationPage from './components/DestinationPage'
import ExploreWorld from './components/ExploreWorld'
import GalleryPage from './components/GalleryPage'
import Home from './components/home'
import SiteFooter from './components/SiteFooter'
import SupportPage from './components/SupportPage'
import TravellerSay from './components/say'
import TrendingDestination from './components/TrendingDestination'
import TripDetailPage from './components/TripDetailPage'
import WhatsAppButton from './components/WhatsAppButton'
import { useEffect, useState } from 'react'
import image01 from './assets/56a87116-9e51-414f-9e59-a9056595db4b.jpg'
import image02 from './assets/78023f59-c877-436a-a455-4b3c314f0d30.jpg'
import image03 from './assets/835a4b7a-2751-405d-8a84-c0ca1a6cdb75.jpg'
import image04 from './assets/8d79f0d9-62cf-4237-a351-07d7329955d7.jpg'
import image05 from './assets/b4052342-1379-48ae-87d9-83d6b67b7317.jpg'
import image06 from './assets/d8a40a5f-73da-41dd-9fbc-c7a5a7289c14.jpg'
import image07 from './assets/f193d9e9-82e7-436c-8add-61fe05249f0a.jpg'
import image08 from './assets/0a9fa572-3c0b-47f8-ad7b-a20b30a5a88f.jpg'

const destinationImages = [image01, image02, image03, image04, image05, image06, image07, image08]

function App() {
  const [page, setPage] = useState('home')
  const [selectedTrip, setSelectedTrip] = useState(null)
  const [destinationSearch, setDestinationSearch] = useState('')

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const initialState = window.history.state

    if (initialState?.page) {
      setPage(initialState.page)
      setSelectedTrip(initialState.trip || null)
      setDestinationSearch(initialState.page === 'destinations' ? initialState.searchQuery || '' : '')
    } else {
      window.history.replaceState({ page: 'home', trip: null }, '', '#home')
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    const handlePopState = (event) => {
      const historyPage = event.state?.page || 'home'
      setPage(historyPage)
      setSelectedTrip(event.state?.trip || null)
      setDestinationSearch(historyPage === 'destinations' ? event.state?.searchQuery || '' : '')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const navigateTo = (nextPage, options = {}) => {
    setSelectedTrip(null)
    setDestinationSearch(nextPage === 'destinations' ? options.searchQuery || '' : '')
    setPage(nextPage)
    window.history.pushState({ page: nextPage, trip: null, searchQuery: options.searchQuery || '' }, '', `#${nextPage}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openTripDetail = (trip) => {
    setSelectedTrip(trip)
    setPage('trip-detail')
    window.history.pushState({ page: 'trip-detail', trip }, '', '#trip-detail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (page === 'destinations') {
    return (
      <main className="site-shell">
        <DestinationPage
          images={destinationImages}
          onNavigate={navigateTo}
          onViewDetails={openTripDetail}
          searchQuery={destinationSearch}
        />
        <WhatsAppButton />
      </main>
    )
  }

  if (page === 'bookings') {
    return (
      <main className="site-shell">
        <BookingsPage images={destinationImages} onNavigate={navigateTo} onViewItinerary={openTripDetail} />
        <WhatsAppButton />
      </main>
    )
  }

  if (page === 'trip-detail') {
    return (
      <main className="site-shell">
        <TripDetailPage trip={selectedTrip} images={destinationImages} onNavigate={navigateTo} />
        <WhatsAppButton />
      </main>
    )
  }

  if (page === 'gallery') {
    return (
      <main className="site-shell">
        <GalleryPage images={destinationImages} onNavigate={navigateTo} />
        <WhatsAppButton />
      </main>
    )
  }

  if (page === 'support-contact') {
    return (
      <main className="site-shell">
        <SupportPage image={image07} onNavigate={navigateTo} />
        <WhatsAppButton />
      </main>
    )
  }

  if (page === 'about') {
    return (
      <main className="site-shell">
        <AboutPage image={image02} onNavigate={navigateTo} />
        <WhatsAppButton />
      </main>
    )
  }

  return (
    <main className="site-shell">
      <Home images={destinationImages} onNavigate={navigateTo} />
      <ExploreWorld />
      <TravellerSay />
      <TrendingDestination images={destinationImages} onViewAll={() => navigateTo('destinations')} />
      <ChooseDestination images={destinationImages} onViewAll={() => navigateTo('destinations')} />
      <AdventureStyle images={destinationImages} onViewAll={() => navigateTo('gallery')} />
      <SiteFooter onNavigate={navigateTo} />
      <WhatsAppButton />
    </main>
  )
}

export default App

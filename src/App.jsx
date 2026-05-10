import "./App.css";
import AdventureStyle from "./components/AdventureStyle";
import AboutPage from "./components/AboutPage";
import ChooseDestination from "./components/ChooseDestination";
import DestinationPage from "./components/DestinationPage";
import ExploreWorld from "./components/ExploreWorld";
import GalleryPage from "./components/GalleryPage";
import Home from "./components/home";
import SiteFooter from "./components/SiteFooter";
import SupportPage from "./components/SupportPage";
import TravellerSay from "./components/say";
import TrendingDestination from "./components/TrendingDestination";
import TripDetailPage from "./components/TripDetailPage";
import WhatsAppButton from "./components/WhatsAppButton";
import { useEffect, useState } from "react";
import image01 from "./assets/bali76.avif";
import image02 from "./assets/hcmc76.jpg";
import image03 from "./assets/hanoi 54.jpg";
import image04 from "./assets/bali65.jpg";
import image05 from "./assets/bali54.jpg";
import image06 from "./assets/d8a40a5f-73da-41dd-9fbc-c7a5a7289c14.jpg";
import image07 from "./assets/hcmc65.jpg";
import image08 from "./assets/hcmc54.jpg";
import image09 from "./assets/hanoi76.jpg";
import image10 from "./assets/hanoi65.jpg";
import image11 from "./assets/bangkok54.jpg";
import image12 from "./assets/bangkok65.jpg";
import image13 from "./assets/bangkok76.webp";
import StoriesPage from "./components/StoriesPage";

const destinationImages = [
  image01, image02, image03, image04, 
  image05, image06, image07, image08,
  image09, image10, image11, image12, image13,
];

function App() {
  const [page, setPage] = useState('home');
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [destinationSearch, setDestinationSearch] = useState('');
  const [destinationRegion, setDestinationRegion] = useState('');

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const initialState = window.history.state;

    if (initialState?.page) {
      setPage(initialState.page);
      setSelectedTrip(initialState.trip || null);
      setDestinationSearch(initialState.page === 'destinations' ? initialState.searchQuery || '' : '');
      setDestinationRegion(initialState.page === 'destinations' ? initialState.region || '' : '');
    } else {
      window.history.replaceState({ page: "home", trip: null }, "", "#home");
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    const handlePopState = (event) => {
      const historyPage = event.state?.page || 'home';
      setPage(historyPage);
      setSelectedTrip(event.state?.trip || null);
      setDestinationSearch(historyPage === 'destinations' ? event.state?.searchQuery || '' : '');
      setDestinationRegion(historyPage === 'destinations' ? event.state?.region || '' : '');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (nextPage, options = {}) => {
    setSelectedTrip(null);
    setDestinationSearch(nextPage === 'destinations' ? options.searchQuery || '' : '');
    setDestinationRegion(nextPage === 'destinations' ? options.region || '' : '');
    setPage(nextPage);
    window.history.pushState(
      { page: nextPage, trip: null, searchQuery: options.searchQuery || '', region: options.region || '' },
      "",
      `#${nextPage}`
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openTripDetail = (trip) => {
    setSelectedTrip(trip);
    setPage("trip-detail");
    window.history.pushState({ page: "trip-detail", trip }, "", "#trip-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (page === "destinations") {
    return (
      <main className="site-shell">
        <DestinationPage
          images={destinationImages}
          onNavigate={navigateTo}
          onViewDetails={openTripDetail}
          searchQuery={destinationSearch}
          selectedRegion={destinationRegion}
        />
        <WhatsAppButton />
      </main>
    );
  }

  if (page === "stories") {
    return (
      <main className="site-shell">
        <StoriesPage
          images={destinationImages}
          onNavigate={navigateTo}
          onViewItinerary={openTripDetail}
        />
        <WhatsAppButton />
      </main>
    );
  }

  if (page === "trip-detail") {
    return (
      <main className="site-shell">
        <TripDetailPage
          trip={selectedTrip}
          images={destinationImages}
          onNavigate={navigateTo}
        />
        <WhatsAppButton />
      </main>
    );
  }

  if (page === "gallery") {
    return (
      <main className="site-shell">
        <GalleryPage images={destinationImages} onNavigate={navigateTo} />
        <WhatsAppButton />
      </main>
    );
  }

  if (page === "support-contact") {
    return (
      <main className="site-shell">
        <SupportPage image={image07} onNavigate={navigateTo} />
        <WhatsAppButton />
      </main>
    );
  }

  if (page === "about") {
    return (
      <main className="site-shell">
        <AboutPage image={image05} onNavigate={navigateTo} />
        <WhatsAppButton />
      </main>
    );
  }

  return (
    <main className="site-shell">
      <Home
        images={destinationImages}
        onNavigate={navigateTo}
        onViewDetails={openTripDetail}
      />
      <ExploreWorld />
      <TravellerSay />
      <TrendingDestination
        images={destinationImages}
        onViewAll={() => navigateTo("destinations")}
      />
      <ChooseDestination
        images={destinationImages}
        onViewAll={() => navigateTo("destinations")}
      />
      <AdventureStyle
        images={destinationImages}
        onViewAll={() => navigateTo("gallery")}
      />
      <SiteFooter onNavigate={navigateTo} />
      <WhatsAppButton />
    </main>
  );
}

export default App;

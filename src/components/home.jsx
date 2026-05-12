import { useState, useEffect } from "react";
import Header from "./header";
import { baseDestinations, getDestinationTripDetails } from "./destinationData";

// Select Banner Manually
import banner1 from "../assets/0a9fa572-3c0b-47f8-ad7b-a20b30a5a88f.jpg";
import banner2 from "../assets/56a87116-9e51-414f-9e59-a9056595db4b.jpg";
import banner3 from "../assets/d8a40a5f-73da-41dd-9fbc-c7a5a7289c14.jpg";
import banner4 from "../assets/56a87116-9e51-414f-9e59-a9056595db4b.jpg";
import banner5 from "../assets/b4052342-1379-48ae-87d9-83d6b67b7317.jpg";

const filters = ["Choose Destination", "Choose Package", "Choose Trek"];
const countryLevelDestinations = new Set(["Vietnam", "Nepal"]);
const destinationOptions = Array.from(
  new Map(
    baseDestinations
      .filter((destination) => destination.region !== "Trek")
      .map((destination) => {
        if (countryLevelDestinations.has(destination.region)) {
          return [
            destination.region,
            {
              ...destination,
              title: destination.region,
              isCountryLevel: true,
            },
          ];
        }

        return [destination.title, destination];
      })
  ).values()
);
const trekDestinations = baseDestinations.filter((destination) => destination.region === "Trek");

function Home({ images, onNavigate, onViewDetails }) {
  // For adding the banner
  const bannerImages = [banner1, banner2, banner3, banner4, banner5]; //for selecting images
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 1900); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, [bannerImages.length]);
  // const [heroImage] = images (commented because it selectes the firstimage from the assests)

  // const handleFilterChange = (e, filterType) => {
  //   const selectedValue = e.target.value;

  //   if (filterType === "choose Destination" && selectiveValue) {
  //     onNavigate("destinations", { searchQuery: SelectedValue });
  //   }
  // };
  return (
    <section className="hero-section" id="home">
      {/* Banner Section */}
      <div className="banner-container">
        {bannerImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`banner ${index}`}
            className="hero-image"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              position: "absolute",
              transition: "opacity 1.5s ease-in-out",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <Header activePage="home" onNavigate={onNavigate} />

      <div className="hero-content">
  <h1>Experience The Magic</h1>
  <form className="booking-search">
    {filters.map((filter) => (
      <div 
        key={filter} 
        className="filter-button custom-dropdown"
        
        onClick={() => {
          if (filter === "Choose Package") {
            onNavigate("destinations");
          }
        }}
      >
        {filter === "Choose Destination" || filter === "Choose Trek" ? (
          <>
            <div className="dropdown-label">
              <span>{filter}</span>
              <span className="filter-chevron" aria-hidden="true" />
            </div>
            <ul className="dropdown-list">
              {(filter === "Choose Trek" ? trekDestinations : destinationOptions).map((dest, index) => (
                <li 
                  key={index} 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents triggering parent onClick
                    if (filter === "Choose Destination") {
                      if (dest.isCountryLevel) {
                        onNavigate("destinations", { region: dest.region });
                        return;
                      }

                      onNavigate("destinations", { searchQuery: dest.title });
                      return;
                    }

                    if (onViewDetails) {
                      onViewDetails(getDestinationTripDetails(dest, images));
                      return;
                    }

                    onNavigate("destinations", { searchQuery: `${dest.title} ${dest.duration}` });
                  }}
                >
                  {filter === "Choose Destination" ? dest.title : `${dest.title} - ${dest.duration}`}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="select-wrapper">
            <div className="filter-dropdown">
              {filter}
            </div>
          </div>
        )}
      </div>
    ))}
  </form>
  <p>Immerse yourself in breathtaking journeys</p>
</div>
    </section>
  );
}

export default Home;

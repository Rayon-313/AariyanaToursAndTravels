import { useEffect, useState } from "react";

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    lat: -8.3405,
    lng: 115.092,
    span: 2.1,
    mood: "Island escapes",
    duration: "7 days",
  },
  {
    name: "Vietnam",
    country: "Vietnam",
    lat: 14.0583,
    lng: 108.2772,
    span: 7,
    mood: "Culture trails",
    duration: "8 days",
  },
  {
    name: "Thailand",
    country: "Thailand",
    lat: 15.87,
    lng: 100.9925,
    span: 6.5,
    mood: "Beach and city",
    duration: "6 days",
  },
  {
    name: "Singapore",
    country: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    span: 1.1,
    mood: "City lights",
    duration: "5 days",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    lat: 25.2048,
    lng: 55.2708,
    span: 2.4,
    mood: "Desert and skyline",
    duration: "6 days",
  },
  {
    name: "Bhutan",
    country: "Bhutan",
    lat: 27.5142,
    lng: 90.4336,
    span: 3.2,
    mood: "Culture trails",
    duration: "6 days",
  },
  {
    name: "Nepal",
    country: "Nepal",
    lat: 28.3949,
    lng: 84.124,
    span: 5,
    mood: "Himalayan escapes",
    duration: "6 days",
  },
  {
    name: "Everest Trek",
    country: "Nepal",
    lat: 27.9881,
    lng: 86.925,
    span: 1.8,
    mood: "Mountain trek",
    duration: "14 days",
  },
];

const worldView = {
  name: "World",
  country: "Overview",
  lat: 12,
  lng: 35,
  span: 155,
  isOverview: true,
};

function getOpenStreetMapUrl(destination) {
  if (destination.isOverview) {
    return "https://www.openstreetmap.org/export/embed.html?bbox=-180%2C-70%2C180%2C85&layer=mapnik";
  }

  const horizontalSpan = destination.span;
  const verticalSpan = destination.span * 0.58;

  const left = destination.lng - horizontalSpan;
  const right = destination.lng + horizontalSpan;
  const bottom = destination.lat - verticalSpan;
  const top = destination.lat + verticalSpan;

  return `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik`;
}

function getDestinationFocus(destination) {
  const zoomScale = 2.8;

  const x = Math.min(92, Math.max(8, ((destination.lng + 180) / 360) * 100));

  const latRad = (destination.lat * Math.PI) / 180;
  const mercator = Math.log(Math.tan(Math.PI / 4 + latRad / 2));

  const y = Math.min(86, Math.max(14, (1 - mercator / Math.PI) * 50));

  return {
    "--focus-x": `${x}%`,
    "--focus-y": `${y}%`,
    "--zoom-x": `${50 - x * zoomScale}%`,
    "--zoom-y": `${50 - y * zoomScale}%`,
  };
}

function WorldMap({
  mapDestination,
  selectedDestination,
  zoomDestination,
  isZooming,
}) {
  const mapStyle = getDestinationFocus(zoomDestination || selectedDestination);

  const showFocusMarker = !selectedDestination.isOverview && isZooming;

  const showSettledMarker =
    !selectedDestination.isOverview && !isZooming && !zoomDestination;

  const showDetailMap = isZooming && zoomDestination;

  const showOverviewFrame = mapDestination.isOverview && !isZooming;

  return (
    <div
      className={`world-map-card ${isZooming ? "is-zooming" : ""}`}
      style={mapStyle}
    >
      <div className="world-map-overlay" />

      {showOverviewFrame && (
        <iframe
          className="world-map world-map-active"
          key={mapDestination.name}
          src={getOpenStreetMapUrl(mapDestination)}
          title={`OpenStreetMap view of ${selectedDestination.name}`}
          loading="lazy"
        />
      )}

      {!mapDestination.isOverview && !isZooming && (
        <iframe
          className="world-map world-map-active"
          key={mapDestination.name}
          src={getOpenStreetMapUrl(mapDestination)}
          title={`OpenStreetMap view of ${selectedDestination.name}`}
          loading="lazy"
        />
      )}

      {showDetailMap && (
        <iframe
          className="world-map world-map-detail"
          src={getOpenStreetMapUrl(zoomDestination)}
          title={`Zoomed OpenStreetMap view of ${zoomDestination.name}`}
          loading="lazy"
        />
      )}

      {showFocusMarker && (
        <span className="map-destination-marker" aria-hidden="true" />
      )}

      {showSettledMarker && (
        <span
          className="map-destination-marker map-destination-marker-static"
          aria-hidden="true"
        />
      )}

      <div className="map-focus-label">
        <span>
          {selectedDestination.isOverview ? "Start exploring" : "Now viewing"}
        </span>

        <strong>
          {selectedDestination.isOverview
            ? "Choose a destination"
            : `${selectedDestination.name}, ${selectedDestination.country}`}
        </strong>
      </div>
    </div>
  );
}

function ExploreWorld() {
  const [selectedDestination, setSelectedDestination] = useState(worldView);

  const [mapDestination, setMapDestination] = useState(worldView);

  const [zoomDestination, setZoomDestination] = useState(null);

  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    if (!isZooming) return undefined;

    const zoomTimer = window.setTimeout(() => {
      setMapDestination(zoomDestination);
      setIsZooming(false);
      setZoomDestination(null);
    }, 2200);

    return () => window.clearTimeout(zoomTimer);
  }, [isZooming, zoomDestination]);

  const focusDestination = (destination) => {
    if (destination.name === selectedDestination.name && !isZooming) {
      return;
    }

    setSelectedDestination(destination);
    setMapDestination(worldView);
    setZoomDestination(destination);

    window.requestAnimationFrame(() => setIsZooming(true));
  };

  return (
    <section className="explore-section">
      <div className="explore-header">
        <h2>Explore The World With Us</h2>
      </div>

      <div className="explore-content">
        <WorldMap
          mapDestination={mapDestination}
          selectedDestination={selectedDestination}
          zoomDestination={zoomDestination}
          isZooming={isZooming}
        />

        <div className="destination-zoom-panel">
          <h3>Prime Holiday Spot</h3>

          <div className="destination-zoom-list">
            {destinations.map((destination) => (
              <button
                className={
                  destination.name === selectedDestination.name
                    ? "is-active"
                    : ""
                }
                type="button"
                onClick={() => focusDestination(destination)}
                key={destination.name}
              >
                <span className="destination-card-pin" aria-hidden="true" />

                <span className="destination-card-copy">
                  <span>{destination.name}</span>
                  <small>{destination.country}</small>
                </span>

                <span className="destination-card-meta">
                  <span>{destination.mood}</span>
                  <small>{destination.duration}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreWorld;

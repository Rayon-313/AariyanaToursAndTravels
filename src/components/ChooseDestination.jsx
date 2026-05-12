import DestinationCard from "./DestinationCard";
import { baseDestinations, getDestinationImage } from "./destinationData";

const labels = ["Popular", "Hot Deal", "Cultural", "Popular", "Hot Deal", "Cultural"];
const choiceRegions = ["Vietnam", "Thailand", "Singapore", "Dubai", "Bhutan", "Nepal"];
const countryLevelDestinations = new Set(["Vietnam", "Nepal"]);
const choices = choiceRegions.map((region) =>
  baseDestinations.find((destination) => destination.region === region),
).filter(Boolean).map((destination, index) => ({
  ...destination,
  title: countryLevelDestinations.has(destination.region) ? destination.region : destination.title,
  duration: countryLevelDestinations.has(destination.region) ? "" : destination.duration,
  price: countryLevelDestinations.has(destination.region) ? "" : destination.price,
  isCountryLevel: countryLevelDestinations.has(destination.region),
  label: labels[index],
}));

function ChooseDestination({ images, onViewAll, onSelectRegion }) {
  return (
    <section className="destination-section choose-section">
      <div className="section-title-row">
        <h2>Choose Your Destinations</h2>
        <button type="button" onClick={onViewAll}>
          View All
        </button>
      </div>

      <div className="destination-grid">
        {choices.map((choice) => (
          <DestinationCard
            key={`${choice.title}-${choice.duration}`}
            image={getDestinationImage(choice, images)}
            onClick={choice.isCountryLevel ? () => onSelectRegion(choice.region) : undefined}
            {...choice}
          />
        ))}
      </div>
    </section>
  );
}

export default ChooseDestination;

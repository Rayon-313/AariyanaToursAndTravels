import DestinationCard from "./DestinationCard";
import { baseDestinations, getDestinationImage } from "./DestinationPage";

const labels = ["Popular", "Hot Deal", "Cultural", "Popular", "Hot Deal", "Cultural"];
const choiceRegions = ["Vietnam", "Thailand", "Singapore", "Dubai", "Bhutan", "Nepal"];
const choices = choiceRegions.map((region) =>
  baseDestinations.find((destination) => destination.region === region),
).filter(Boolean).map((destination, index) => ({
  ...destination,
  label: labels[index],
}));

function ChooseDestination({ images, onViewAll }) {
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
            {...choice}
          />
        ))}
      </div>
    </section>
  );
}

export default ChooseDestination;

import { useState } from "react";

const GameCard = (props) => {
    const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="GameCard"> 
    {/*Image */}
    <img src={props.image} alt={props.game} className="gameImage" />
    {/*props game event More info..*/}
    <h3>{props.title}</h3>

    <button
        className="viewButton"
        onClick={() => setShowDetails(!showDetails)}
    > {showDetails ? "Hide Event" : "View Event"}
    </button>

    {showDetails && (
        <div className="eventDetails">
          <p><b>Game:</b> {props.game}</p>
          <p><b>Date:</b> {props.date}</p>
          <p><b>Location:</b> {props.location}</p>
          <p><b>Rules:</b> {props.rules}</p>
        </div>
      )}
    </div>
  );
};

export default GameCard
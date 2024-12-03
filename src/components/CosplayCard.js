import React from "react";
import PropTypes from "prop-types";
import "../styles/CosplayCard.css";

const CosplayCard = ({ cosplay, isSearching }) => {
  return (
    <div className="cosplay-card">
      <img
        className={`cosplay-image ${isSearching ? "expand" : ""}`}
        src={cosplay.image}
        alt={cosplay.name}
      />
      <h3>{cosplay.name}</h3>
      <p>{cosplay.description}</p>
      <button>View Details</button>
    </div>
  );
};

CosplayCard.propTypes = {
  cosplay: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  isSearching: PropTypes.bool.isRequired,
};

export default CosplayCard;

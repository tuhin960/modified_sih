import React from "react";
import StatusBadge from "../common/StatusBadge";

const FacilityMatchCard = ({ facility, onSelect }) => {
  return (
    <div className="facility-match-card">
      <div className="facility-match-header">
        <div>
          <span className="facility-type">
            {facility.type}
          </span>

          <h3>{facility.name}</h3>

          <p>{facility.location}</p>
        </div>

        <strong className="distance">
          {facility.distance} km
        </strong>
      </div>

      <div className="facility-resources">
        <div>
          <span>Available Beds</span>
          <strong>{facility.availableBeds}</strong>
        </div>

        <div>
          <span>Oxygen</span>
          <strong>{facility.oxygen ? "Available" : "Unavailable"}</strong>
        </div>

        <div>
          <span>Emergency</span>
          <strong>
            {facility.emergencyAvailable
              ? "Available"
              : "Unavailable"}
          </strong>
        </div>
      </div>

      <div className="facility-freshness">
        <span>Resource Data</span>
        <StatusBadge status={facility.dataFreshness} />
      </div>

      <div className="match-reason">
        <strong>Why this facility?</strong>
        <p>{facility.matchReason}</p>
      </div>

      <button
        className="primary-btn"
        onClick={() => onSelect?.(facility)}
      >
        Select Facility
      </button>
    </div>
  );
};

export default FacilityMatchCard;
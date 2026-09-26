import React from "react";
import StatusBadge from "../common/StatusBadge";

const EmergencyTransport = ({ transport }) => {
  if (!transport) {
    return (
      <div className="empty-state">
        <h3>No transport assigned</h3>
        <p>Transport will appear after assignment.</p>
      </div>
    );
  }

  return (
    <div className="transport-card">

      <div className="transport-header">
        <div>
          <span>Emergency Transport</span>
          <h3>{transport.vehicleNumber}</h3>
        </div>

        <StatusBadge status={transport.status} />
      </div>

      <div className="transport-info">

        <div>
          <span>Driver</span>
          <strong>{transport.driverName}</strong>
        </div>

        <div>
          <span>Contact</span>
          <strong>{transport.contact}</strong>
        </div>

        <div>
          <span>Source</span>
          <strong>{transport.source}</strong>
        </div>

        <div>
          <span>Destination</span>
          <strong>{transport.destination}</strong>
        </div>

      </div>

      <div className="transport-eta">
        <span>Estimated Arrival</span>
        <strong>{transport.estimatedArrival}</strong>
      </div>

      <small className="demo-warning">
        Demo transport data — live GPS integration not enabled.
      </small>
    </div>
  );
};

export default EmergencyTransport;
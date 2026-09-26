import React from "react";
import StatusBadge from "../common/StatusBadge";

const ReferralCard = ({ referral, onOpen }) => {
  return (
    <div className="referral-card">
      <div className="referral-header">
        <div>
          <span className="referral-id">{referral.referralId}</span>
          <h3>{referral.patientName}</h3>
        </div>

        <StatusBadge status={referral.status} />
      </div>

      <div className="referral-details">
        <div>
          <span>Urgency</span>
          <strong>{referral.urgency}</strong>
        </div>

        <div>
          <span>Specialty</span>
          <strong>{referral.requiredSpecialty}</strong>
        </div>

        <div>
          <span>Source</span>
          <strong>{referral.sourceFacility}</strong>
        </div>

        <div>
          <span>Destination</span>
          <strong>{referral.destinationFacility}</strong>
        </div>
      </div>

      <div className="referral-reason">
        <span>Referral Reason</span>
        <p>{referral.reason}</p>
      </div>

      <button className="primary-btn" onClick={() => onOpen?.(referral)}>
        View Referral
      </button>
    </div>
  );
};

export default ReferralCard;
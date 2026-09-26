import React from "react";
import StatusBadge from "../common/StatusBadge";

const FollowUpCard = ({ followUp }) => {
  return (
    <div className="followup-card">

      <div className="followup-header">
        <div>
          <span>Follow-up</span>
          <h3>{followUp.patientName}</h3>
        </div>

        <StatusBadge status={followUp.priority} />
      </div>

      <div className="followup-details">

        <div>
          <span>Due Date</span>
          <strong>{followUp.dueDate}</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>{followUp.status}</strong>
        </div>

        <div>
          <span>Health Worker</span>
          <strong>{followUp.healthWorkerName}</strong>
        </div>

      </div>

      <div className="followup-action">
        <strong>Next Action</strong>
        <p>{followUp.nextAction}</p>
      </div>

    </div>
  );
};

export default FollowUpCard;
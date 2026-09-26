import React from "react";
import StatusBadge from "../common/StatusBadge";

const ResourceCard = ({
  title,
  value,
  unit,
  lastUpdated,
  freshness,
  icon,
}) => {
  return (
    <div className="resource-card">

      <div className="resource-icon">
        {icon}
      </div>

      <div className="resource-content">
        <span>{title}</span>

        <h3>
          {value} {unit}
        </h3>

        <div className="resource-footer">
          <small>
            Updated {lastUpdated}
          </small>

          <StatusBadge status={freshness} />
        </div>
      </div>

    </div>
  );
};

export default ResourceCard;
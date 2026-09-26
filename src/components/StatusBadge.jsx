import React from "react";

const StatusBadge = ({ status }) => {
  const formattedStatus = status
    ?.replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const statusClass = status?.toLowerCase().replaceAll("_", "-");

  return (
    <span className={`status-badge ${statusClass}`}>
      <span className="status-dot"></span>
      {formattedStatus}
    </span>
  );
};

export default StatusBadge;
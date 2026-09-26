import React from "react";

const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  status = "normal",
}) => {
  return (
    <div className={`stat-card stat-${status}`}>
      <div className="stat-card-top">
        <div>
          <p className="stat-title">{title}</p>
          <h2>{value}</h2>
          {subtitle && <span className="stat-subtitle">{subtitle}</span>}
        </div>

        {icon && <div className="stat-icon">{icon}</div>}
      </div>

      {trend && <div className="stat-trend">{trend}</div>}
    </div>
  );
};

export default StatCard;
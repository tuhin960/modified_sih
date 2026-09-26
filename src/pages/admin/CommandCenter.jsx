import React from "react";
import StatCard from "../../components/common/StatCard";
import StatusBadge from "../../components/common/StatusBadge";

const CommandCenter = () => {

  const facilities = [
    {
      name: "District Care Facility",
      beds: 24,
      freshness: "FRESH",
    },
    {
      name: "Rural Health Centre",
      beds: 3,
      freshness: "STALE",
    },
    {
      name: "Regional Medical Centre",
      beds: 12,
      freshness: "UNKNOWN",
    },
  ];

  return (
    <div className="dashboard-page">

      <div className="page-header">

        <div>
          <span className="eyebrow">
            DISTRICT COMMAND CENTER
          </span>

          <h1>Healthcare Network</h1>

          <p>
            Monitor referrals, facilities and continuity of care.
          </p>
        </div>

        <StatusBadge status="ACTIVE" />

      </div>

      <div className="stats-grid">

        <StatCard
          title="Total Patients"
          value="2,481"
          subtitle="Registered"
          icon="♙"
        />

        <StatCard
          title="Active Referrals"
          value="43"
          subtitle="Across district"
          icon="↗"
        />

        <StatCard
          title="Emergency Referrals"
          value="12"
          subtitle="Requires monitoring"
          icon="!"
          status="warning"
        />

        <StatCard
          title="Available Beds"
          value="186"
          subtitle="Across facilities"
          icon="▣"
        />

      </div>

      <div className="command-grid">

        <section className="dashboard-panel">

          <div className="panel-header">
            <div>
              <span>REFERRAL PIPELINE</span>
              <h2>Emergency Referrals</h2>
            </div>
          </div>

          <div className="pipeline">

            <div>
              <strong>18</strong>
              <span>Created</span>
            </div>

            <div>
              <strong>14</strong>
              <span>Sent</span>
            </div>

            <div>
              <strong>11</strong>
              <span>Accepted</span>
            </div>

            <div>
              <strong>07</strong>
              <span>In Transfer</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Admitted</span>
            </div>

          </div>

        </section>

        <section className="dashboard-panel">

          <div className="panel-header">
            <div>
              <span>FACILITY NETWORK</span>
              <h2>Resource Freshness</h2>
            </div>
          </div>

          <div className="facility-monitor">

            {facilities.map((facility) => (
              <div
                className="facility-monitor-row"
                key={facility.name}
              >

                <div>
                  <strong>{facility.name}</strong>
                  <span>
                    {facility.beds} beds available
                  </span>
                </div>

                <StatusBadge
                  status={facility.freshness}
                />

              </div>
            ))}

          </div>

        </section>

      </div>

    </div>
  );
};

export default CommandCenter;
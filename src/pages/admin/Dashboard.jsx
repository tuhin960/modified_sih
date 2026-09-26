import React from "react";

export default function Dashboard() {
  return (
    <div className="page-container">

      <div className="record-header">
        <div>
          <span className="page-kicker">ADMINISTRATION</span>
          <h2>Healthcare Network Dashboard</h2>
          <p>
            District-level overview of the connected healthcare network.
          </p>
        </div>
      </div>

      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div>
            <span>Patients</span>
            <strong>12,480</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🩺</div>
          <div>
            <span>Doctors</span>
            <strong>186</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏥</div>
          <div>
            <span>Facilities</span>
            <strong>42</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🚑</div>
          <div>
            <span>Active Referrals</span>
            <strong>27</strong>
          </div>
        </div>

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">
          <div>
            <h3>Network Status</h3>
            <p>Current operational status.</p>
          </div>
        </div>

        <div className="card-grid">

          <div className="dashboard-card">
            <div className="card-icon">🟢</div>
            <h4>Healthcare Network</h4>
            <p>Operational</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🟢</div>
            <h4>Referral Network</h4>
            <p>Operational</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🟡</div>
            <h4>Resource Alerts</h4>
            <p>5 facilities require attention.</p>
          </div>

        </div>

      </section>

    </div>
  );
}
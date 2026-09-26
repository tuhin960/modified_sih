import React from "react";

const referrals = [
  {
    id: "REF-2026-1042",
    patient: "Rahul Das",
    source: "Rural PHC",
    destination: "District Hospital",
    urgency: "Emergency",
    status: "In Transfer",
  },
  {
    id: "REF-2026-1041",
    patient: "Mina Devi",
    source: "Sub Centre",
    destination: "CHC",
    urgency: "High",
    status: "Accepted",
  },
  {
    id: "REF-2026-1040",
    patient: "Sanjay Roy",
    source: "Rural PHC",
    destination: "District Hospital",
    urgency: "Medium",
    status: "Completed",
  },
];

export default function Referrals() {
  return (
    <div className="page-container">

      <div className="record-header">
        <div>
          <span className="page-kicker">REFERRAL NETWORK</span>
          <h2>Emergency Referrals</h2>
          <p>
            Monitor referral movement and transfer status across facilities.
          </p>
        </div>

        <span className="journey-status">
          ● Live Monitoring
        </span>
      </div>

      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">🚑</div>
          <div>
            <span>Active</span>
            <strong>27</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚠️</div>
          <div>
            <span>Emergency</span>
            <strong>8</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div>
            <span>Accepted</span>
            <strong>15</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✔</div>
          <div>
            <span>Completed</span>
            <strong>142</strong>
          </div>
        </div>

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">
          <div>
            <h3>Referral Tracking</h3>
            <p>Current patient transfer workflow.</p>
          </div>
        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Referral ID</th>
                <th>Patient</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Urgency</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {referrals.map((referral) => (
                <tr key={referral.id}>
                  <td><strong>{referral.id}</strong></td>
                  <td>{referral.patient}</td>
                  <td>{referral.source}</td>
                  <td>{referral.destination}</td>
                  <td>{referral.urgency}</td>
                  <td>
                    <span className="status-badge">
                      {referral.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
}
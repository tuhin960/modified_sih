import React from "react";

export default function Analytics() {
  return (
    <div className="page-container">

      <div className="record-header">

        <div>
          <span className="page-kicker">NETWORK INSIGHTS</span>

          <h2>Impact Analytics</h2>

          <p>
            Monitor healthcare delivery and referral network performance.
          </p>
        </div>

      </div>

      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">🚑</div>
          <div>
            <span>Total Referrals</span>
            <strong>169</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div>
            <span>Completed Referrals</span>
            <strong>142</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div>
            <span>Average Transfer Time</span>
            <strong>48 min</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div>
            <span>Follow-ups Due</span>
            <strong>31</strong>
          </div>
        </div>

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">

          <div>
            <h3>Referral Activity</h3>

            <p>
              Illustrative referral activity for the current monitoring period.
            </p>
          </div>

        </div>

        <div className="card-grid">

          <div className="dashboard-card">
            <div className="card-icon">📈</div>
            <h4>Referrals Created</h4>
            <strong>169</strong>
            <p>Across connected facilities</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🏥</div>
            <h4>Facility Acceptance</h4>
            <strong>91%</strong>
            <p>Referrals accepted by destination facilities</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🤝</div>
            <h4>Follow-up Continuity</h4>
            <strong>84%</strong>
            <p>Patients with documented follow-up</p>
          </div>

        </div>

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">
          <div>
            <h3>Care Continuity Indicators</h3>
            <p>Key indicators for district monitoring.</p>
          </div>
        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Indicator</th>
                <th>Current Value</th>
                <th>Monitoring Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Referral Acceptance</td>
                <td>91%</td>
                <td>
                  <span className="status-badge">Monitored</span>
                </td>
              </tr>

              <tr>
                <td>Patient Transfer Completion</td>
                <td>87%</td>
                <td>
                  <span className="status-badge">Monitored</span>
                </td>
              </tr>

              <tr>
                <td>Follow-up Documentation</td>
                <td>84%</td>
                <td>
                  <span className="status-badge">Monitored</span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
}
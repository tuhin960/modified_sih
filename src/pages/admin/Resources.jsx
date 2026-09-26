import React from "react";

const resources = [
  {
    facility: "District Hospital",
    beds: "18 available",
    oxygen: "Available",
    ventilators: "4 available",
    diagnostics: "Available",
  },
  {
    facility: "Community Health Centre",
    beds: "8 available",
    oxygen: "Available",
    ventilators: "1 available",
    diagnostics: "Limited",
  },
  {
    facility: "Rural PHC",
    beds: "12 available",
    oxygen: "Limited",
    ventilators: "0 available",
    diagnostics: "Basic",
  },
];

export default function Resources() {
  return (
    <div className="page-container">

      <div className="record-header">
        <div>
          <span className="page-kicker">RESOURCE MONITORING</span>
          <h2>Resources</h2>
          <p>
            Monitor beds, critical equipment and diagnostic capability.
          </p>
        </div>
      </div>

      <section className="dashboard-panel">

        <div className="panel-header">
          <div>
            <h3>Facility Resource Status</h3>
            <p>
              Resource availability used by the referral network.
            </p>
          </div>
        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Facility</th>
                <th>Beds</th>
                <th>Oxygen</th>
                <th>Ventilators</th>
                <th>Diagnostics</th>
              </tr>
            </thead>

            <tbody>
              {resources.map((resource) => (
                <tr key={resource.facility}>
                  <td>
                    <strong>{resource.facility}</strong>
                  </td>
                  <td>{resource.beds}</td>
                  <td>{resource.oxygen}</td>
                  <td>{resource.ventilators}</td>
                  <td>{resource.diagnostics}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">
          <div>
            <h3>Data Freshness</h3>
            <p>
              Resource information should be updated by facilities regularly.
            </p>
          </div>
        </div>

        <div className="card-grid">

          <div className="dashboard-card">
            <div className="card-icon">🟢</div>
            <h4>District Hospital</h4>
            <p>Updated 5 minutes ago</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🟢</div>
            <h4>Community Health Centre</h4>
            <p>Updated 18 minutes ago</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🟡</div>
            <h4>Rural PHC</h4>
            <p>Updated 2 hours ago</p>
          </div>

        </div>

      </section>

    </div>
  );
}
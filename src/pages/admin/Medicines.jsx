import React from "react";

const medicines = [
  {
    medicine: "Insulin",
    facility: "District Hospital",
    stock: "7 vials",
    status: "Critical",
  },
  {
    medicine: "Salbutamol",
    facility: "CHC",
    stock: "18 inhalers",
    status: "Low Stock",
  },
  {
    medicine: "Paracetamol",
    facility: "Rural PHC",
    stock: "240 tablets",
    status: "Available",
  },
  {
    medicine: "ORS",
    facility: "District Hospital",
    stock: "120 packets",
    status: "Available",
  },
];

export default function Medicines() {
  return (
    <div className="page-container">

      <div className="record-header">
        <div>
          <span className="page-kicker">MEDICINE NETWORK</span>
          <h2>Medicine Monitoring</h2>
          <p>
            Monitor medicine availability and shortages across facilities.
          </p>
        </div>
      </div>

      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">💊</div>
          <div>
            <span>Tracked Medicines</span>
            <strong>128</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div>
            <span>Available</span>
            <strong>104</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚠️</div>
          <div>
            <span>Low Stock</span>
            <strong>17</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🚨</div>
          <div>
            <span>Critical</span>
            <strong>7</strong>
          </div>
        </div>

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">
          <div>
            <h3>Medicine Availability</h3>
            <p>Facility-level medicine stock information.</p>
          </div>
        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Medicine</th>
                <th>Facility</th>
                <th>Current Stock</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {medicines.map((medicine, index) => (
                <tr key={index}>
                  <td>
                    <strong>{medicine.medicine}</strong>
                  </td>
                  <td>{medicine.facility}</td>
                  <td>{medicine.stock}</td>
                  <td>
                    <span className="status-badge">
                      {medicine.status}
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
import React from "react";

const facilities = [
  {
    id: "FAC-001",
    name: "District Hospital",
    type: "District Hospital",
    location: "Howrah",
    beds: "32 / 50",
    status: "Operational",
  },
  {
    id: "FAC-002",
    name: "Community Health Centre",
    type: "CHC",
    location: "Udaynarayanpur",
    beds: "32 / 40",
    status: "Limited",
  },
  {
    id: "FAC-003",
    name: "Rural PHC",
    type: "PHC",
    location: "Rural Area",
    beds: "8 / 20",
    status: "Operational",
  },
];

export default function Facilities() {
  return (
    <div className="page-container">

      <div className="record-header">
        <div>
          <span className="page-kicker">HEALTHCARE NETWORK</span>
          <h2>Facilities</h2>
          <p>Monitor hospitals, CHCs and PHCs across the network.</p>
        </div>
      </div>

      <section className="dashboard-panel">

        <div className="panel-header">
          <div>
            <h3>Facility Directory</h3>
            <p>Facility capability and current status.</p>
          </div>
        </div>

        <div className="table-container">

          <table>
            <thead>
              <tr>
                <th>Facility ID</th>
                <th>Facility</th>
                <th>Type</th>
                <th>Location</th>
                <th>Beds</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {facilities.map((facility) => (
                <tr key={facility.id}>
                  <td>{facility.id}</td>
                  <td><strong>{facility.name}</strong></td>
                  <td>{facility.type}</td>
                  <td>{facility.location}</td>
                  <td>{facility.beds}</td>
                  <td>
                    <span className="status-badge">
                      {facility.status}
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
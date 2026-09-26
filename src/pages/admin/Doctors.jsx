import React from "react";

const doctors = [
  {
    id: "DOC-001",
    name: "Dr. Arindam Sen",
    specialty: "Cardiology",
    facility: "District Hospital",
    status: "Available",
  },
  {
    id: "DOC-002",
    name: "Dr. Priya Roy",
    specialty: "General Medicine",
    facility: "CHC",
    status: "Consulting",
  },
  {
    id: "DOC-003",
    name: "Dr. Amit Das",
    specialty: "Pediatrics",
    facility: "Rural PHC",
    status: "Available",
  },
];

export default function Doctors() {
  return (
    <div className="page-container">

      <div className="record-header">
        <div>
          <span className="page-kicker">CARE TEAM</span>
          <h2>Doctors</h2>
          <p>Monitor doctors participating in the healthcare network.</p>
        </div>
      </div>

      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">🩺</div>
          <div>
            <span>Total Doctors</span>
            <strong>186</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div>
            <span>Available</span>
            <strong>124</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏥</div>
          <div>
            <span>Facilities</span>
            <strong>42</strong>
          </div>
        </div>

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">
          <div>
            <h3>Care Team Directory</h3>
            <p>Doctors connected to the network.</p>
          </div>
        </div>

        <div className="table-container">

          <table>
            <thead>
              <tr>
                <th>Doctor ID</th>
                <th>Name</th>
                <th>Specialization</th>
                <th>Facility</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.id}</td>
                  <td><strong>{doctor.name}</strong></td>
                  <td>{doctor.specialty}</td>
                  <td>{doctor.facility}</td>
                  <td>
                    <span className="status-badge">
                      {doctor.status}
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
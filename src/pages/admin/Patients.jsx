import React, { useState } from "react";

const patients = [
  {
    id: "PAT-1001",
    name: "Rahul Das",
    age: 54,
    gender: "Male",
    blood: "B+",
    status: "In Transfer",
  },
  {
    id: "PAT-1002",
    name: "Mina Devi",
    age: 42,
    gender: "Female",
    blood: "O+",
    status: "Under Care",
  },
  {
    id: "PAT-1003",
    name: "Sanjay Roy",
    age: 61,
    gender: "Male",
    blood: "A+",
    status: "Follow-up",
  },
  {
    id: "PAT-1004",
    name: "Anita Das",
    age: 35,
    gender: "Female",
    blood: "AB+",
    status: "Stable",
  },
];

export default function Patients() {
  const [search, setSearch] = useState("");

  const filtered = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">

      <div className="record-header">
        <div>
          <span className="page-kicker">PATIENT NETWORK</span>
          <h2>Patients</h2>
          <p>Monitor registered patients across the district.</p>
        </div>
      </div>

      <section className="dashboard-panel">

        <div className="panel-header">
          <div>
            <h3>Patient Registry</h3>
            <p>Search and monitor patient care status.</p>
          </div>
        </div>

        <div className="search-box">
          🔍
          <input
            type="text"
            placeholder="Search patient or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="table-container">

          <table>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Care Status</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((patient) => (
                <tr key={patient.id}>
                  <td><strong>{patient.id}</strong></td>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.blood}</td>
                  <td>
                    <span className="status-badge">
                      {patient.status}
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
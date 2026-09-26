import React, { useState } from "react";

const prescriptionData = [
  {
    id: "RX-2026-1001",
    patient: "Rahul Das",
    doctor: "Dr. Arindam Sen",
    diagnosis: "Fever",
    medicines: "Paracetamol 500mg",
    date: "27 Sep 2026",
    status: "Pending",
  },
  {
    id: "RX-2026-1002",
    patient: "Mina Devi",
    doctor: "Dr. Priya Roy",
    diagnosis: "Bacterial Infection",
    medicines: "Amoxicillin 500mg",
    date: "27 Sep 2026",
    status: "Ready",
  },
  {
    id: "RX-2026-1003",
    patient: "Sanjay Roy",
    doctor: "Dr. Arindam Sen",
    diagnosis: "Diabetes",
    medicines: "Insulin",
    date: "27 Sep 2026",
    status: "Pending",
  },
  {
    id: "RX-2026-1004",
    patient: "Anita Das",
    doctor: "Dr. Amit Das",
    diagnosis: "Dehydration",
    medicines: "ORS",
    date: "26 Sep 2026",
    status: "Dispensed",
  },
];

export default function Prescriptions() {
  const [search, setSearch] = useState("");
  const [prescriptions, setPrescriptions] =
    useState(prescriptionData);

  const filteredPrescriptions = prescriptions.filter(
    (prescription) =>
      prescription.patient
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      prescription.id
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      prescription.doctor
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const markReady = (id) => {
    setPrescriptions((current) =>
      current.map((prescription) =>
        prescription.id === id
          ? {
              ...prescription,
              status: "Ready",
            }
          : prescription
      )
    );
  };

  return (
    <div className="page-container">

      <div className="record-header">

        <div>
          <span className="page-kicker">
            PRESCRIPTION MANAGEMENT
          </span>

          <h2>Prescriptions</h2>

          <p>
            Review prescriptions received from doctors.
          </p>
        </div>

      </div>

      <section className="stats-grid">

        <div className="stat-card">

          <div className="stat-icon">
            📋
          </div>

          <div>
            <span>Total</span>

            <strong>
              {prescriptions.length}
            </strong>
          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon">
            ⏳
          </div>

          <div>
            <span>Pending</span>

            <strong>
              {
                prescriptions.filter(
                  (item) => item.status === "Pending"
                ).length
              }
            </strong>
          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon">
            ✓
          </div>

          <div>
            <span>Ready</span>

            <strong>
              {
                prescriptions.filter(
                  (item) => item.status === "Ready"
                ).length
              }
            </strong>
          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon">
            💊
          </div>

          <div>
            <span>Dispensed</span>

            <strong>
              {
                prescriptions.filter(
                  (item) => item.status === "Dispensed"
                ).length
              }
            </strong>
          </div>

        </div>

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">

          <div>
            <h3>Prescription List</h3>

            <p>
              Prescriptions submitted by healthcare providers.
            </p>
          </div>

        </div>

        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search patient, doctor or prescription ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>Prescription ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Diagnosis</th>
                <th>Medicines</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {filteredPrescriptions.map(
                (prescription) => (

                  <tr key={prescription.id}>

                    <td>
                      <strong>
                        {prescription.id}
                      </strong>
                    </td>

                    <td>
                      {prescription.patient}
                    </td>

                    <td>
                      {prescription.doctor}
                    </td>

                    <td>
                      {prescription.diagnosis}
                    </td>

                    <td>
                      {prescription.medicines}
                    </td>

                    <td>
                      {prescription.date}
                    </td>

                    <td>
                      <span className="status-badge">
                        {prescription.status}
                      </span>
                    </td>

                    <td>

                      {prescription.status ===
                        "Pending" && (

                        <button
                          className="table-action"
                          onClick={() =>
                            markReady(
                              prescription.id
                            )
                          }
                        >
                          Mark Ready
                        </button>

                      )}

                      {prescription.status !==
                        "Pending" && (
                        <span>
                          Updated
                        </span>
                      )}

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
}
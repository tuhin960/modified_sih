import React, { useState } from "react";

const prescriptions = [
  {
    id: "RX-2026-1001",
    patient: "Rahul Das",
    doctor: "Dr. Arindam Sen",
    medicine: "Paracetamol 500mg",
    quantity: "10 Tablets",
    date: "27 Sep 2026",
    status: "Pending",
  },
  {
    id: "RX-2026-1002",
    patient: "Mina Devi",
    doctor: "Dr. Priya Roy",
    medicine: "Amoxicillin 500mg",
    quantity: "6 Capsules",
    date: "27 Sep 2026",
    status: "Ready",
  },
  {
    id: "RX-2026-1003",
    patient: "Sanjay Roy",
    doctor: "Dr. Arindam Sen",
    medicine: "Insulin",
    quantity: "2 Vials",
    date: "27 Sep 2026",
    status: "Pending",
  },
  {
    id: "RX-2026-1004",
    patient: "Anita Das",
    doctor: "Dr. Amit Das",
    medicine: "ORS",
    quantity: "5 Packets",
    date: "26 Sep 2026",
    status: "Dispensed",
  },
];

export default function Dispensing() {
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState(prescriptions);

  const filteredOrders = orders.filter(
    (order) =>
      order.patient.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.medicine.toLowerCase().includes(search.toLowerCase())
  );

  const dispenseMedicine = (id) => {
    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === id
          ? { ...order, status: "Dispensed" }
          : order
      )
    );
  };

  return (
    <div className="page-container">

      <div className="record-header">

        <div>
          <span className="page-kicker">PHARMACY OPERATIONS</span>

          <h2>Medicine Dispensing</h2>

          <p>
            Review prescriptions and record medicine dispensing.
          </p>
        </div>

      </div>

      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">📋</div>

          <div>
            <span>Total Prescriptions</span>
            <strong>{orders.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏳</div>

          <div>
            <span>Pending</span>
            <strong>
              {orders.filter((item) => item.status === "Pending").length}
            </strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>

          <div>
            <span>Dispensed</span>
            <strong>
              {orders.filter((item) => item.status === "Dispensed").length}
            </strong>
          </div>
        </div>

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">

          <div>
            <h3>Prescription Queue</h3>

            <p>
              Prescriptions waiting for pharmacy action.
            </p>
          </div>

        </div>

        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search prescription, patient or medicine..."
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
                <th>Medicine</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredOrders.map((order) => (
                <tr key={order.id}>

                  <td>
                    <strong>{order.id}</strong>
                  </td>

                  <td>{order.patient}</td>

                  <td>{order.doctor}</td>

                  <td>{order.medicine}</td>

                  <td>{order.quantity}</td>

                  <td>
                    <span className="status-badge">
                      {order.status}
                    </span>
                  </td>

                  <td>

                    {order.status !== "Dispensed" ? (

                      <button
                        className="table-action"
                        onClick={() => dispenseMedicine(order.id)}
                      >
                        Dispense
                      </button>

                    ) : (

                      <span>
                        Completed
                      </span>

                    )}

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

          {filteredOrders.length === 0 && (
            <div className="empty-state">

              <span>📋</span>

              <h4>No prescriptions found</h4>

              <p>
                Try another search.
              </p>

            </div>
          )}

        </div>

      </section>

    </div>
  );
}
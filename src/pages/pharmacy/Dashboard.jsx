import React from "react";

const stats = [
  {
    title: "Total Medicines",
    value: "128",
    icon: "💊",
  },
  {
    title: "Low Stock",
    value: "17",
    icon: "⚠️",
  },
  {
    title: "Prescriptions",
    value: "34",
    icon: "📋",
  },
  {
    title: "Dispensed Today",
    value: "86",
    icon: "✓",
  },
];

const recentOrders = [
  {
    id: "ORD-1042",
    patient: "Rahul Das",
    medicine: "Paracetamol 500mg",
    quantity: "10 Tablets",
    status: "Dispensed",
  },
  {
    id: "ORD-1041",
    patient: "Mina Devi",
    medicine: "Amoxicillin 500mg",
    quantity: "6 Capsules",
    status: "Ready",
  },
  {
    id: "ORD-1040",
    patient: "Sanjay Roy",
    medicine: "Insulin",
    quantity: "2 Vials",
    status: "Pending",
  },
];

export default function Dashboard() {
  return (
    <div className="page-container">

      <div className="record-header">

        <div>
          <span className="page-kicker">PHARMACY CARE</span>

          <h2>Pharmacy Dashboard</h2>

          <p>
            Monitor prescriptions, medicine stock and dispensing activity.
          </p>
        </div>

        <span className="journey-status">
          ● Pharmacy Operational
        </span>

      </div>

      <section className="stats-grid">

        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>

            <div className="stat-icon">
              {stat.icon}
            </div>

            <div>
              <span>{stat.title}</span>
              <strong>{stat.value}</strong>
            </div>

          </div>
        ))}

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">

          <div>
            <h3>Recent Dispensing Activity</h3>

            <p>
              Latest prescription and medicine dispensing activity.
            </p>
          </div>

        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Patient</th>
                <th>Medicine</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {recentOrders.map((order) => (
                <tr key={order.id}>

                  <td>
                    <strong>{order.id}</strong>
                  </td>

                  <td>{order.patient}</td>

                  <td>{order.medicine}</td>

                  <td>{order.quantity}</td>

                  <td>
                    <span className="status-badge">
                      {order.status}
                    </span>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">

          <div>
            <h3>Inventory Alerts</h3>

            <p>
              Medicines requiring attention.
            </p>
          </div>

        </div>

        <div className="card-grid">

          <div className="dashboard-card">

            <div className="card-icon">
              🚨
            </div>

            <h4>Insulin</h4>

            <p>
              Only 7 vials remaining.
            </p>

            <span className="status-badge">
              Critical
            </span>

          </div>

          <div className="dashboard-card">

            <div className="card-icon">
              ⚠️
            </div>

            <h4>Salbutamol</h4>

            <p>
              Only 18 inhalers remaining.
            </p>

            <span className="status-badge">
              Low Stock
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}
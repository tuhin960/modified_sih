import React, { useState } from "react";

const initialInventory = [
  {
    id: "MED-001",
    name: "Paracetamol 500mg",
    category: "Pain & Fever",
    quantity: 240,
    unit: "Tablets",
    reorderLevel: 50,
    status: "Available",
  },
  {
    id: "MED-002",
    name: "Amoxicillin 500mg",
    category: "Antibiotic",
    quantity: 85,
    unit: "Capsules",
    reorderLevel: 30,
    status: "Available",
  },
  {
    id: "MED-003",
    name: "Salbutamol",
    category: "Respiratory",
    quantity: 18,
    unit: "Inhalers",
    reorderLevel: 25,
    status: "Low Stock",
  },
  {
    id: "MED-004",
    name: "Insulin",
    category: "Diabetes",
    quantity: 7,
    unit: "Vials",
    reorderLevel: 15,
    status: "Critical",
  },
  {
    id: "MED-005",
    name: "ORS",
    category: "Emergency",
    quantity: 120,
    unit: "Packets",
    reorderLevel: 40,
    status: "Available",
  },
];

export default function Inventory() {
  const [inventory] = useState(initialInventory);
  const [search, setSearch] = useState("");

  const filteredInventory = inventory.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(search.toLowerCase()) ||
      medicine.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">

      <div className="record-header">

        <div>
          <span className="page-kicker">PHARMACY INVENTORY</span>

          <h2>Medicine Inventory</h2>

          <p>
            Monitor stock levels and identify medicines requiring
            replenishment.
          </p>
        </div>

      </div>

      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">💊</div>

          <div>
            <span>Total Medicines</span>
            <strong>{inventory.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>

          <div>
            <span>Available</span>
            <strong>
              {
                inventory.filter(
                  (item) => item.status === "Available"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚠️</div>

          <div>
            <span>Low Stock</span>
            <strong>
              {
                inventory.filter(
                  (item) => item.status === "Low Stock"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🚨</div>

          <div>
            <span>Critical</span>
            <strong>
              {
                inventory.filter(
                  (item) => item.status === "Critical"
                ).length
              }
            </strong>
          </div>
        </div>

      </section>

      <section className="dashboard-panel">

        <div className="panel-header">

          <div>
            <h3>Stock Inventory</h3>

            <p>
              Current medicine stock and reorder levels.
            </p>
          </div>

        </div>

        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search medicine..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>Medicine</th>
                <th>Category</th>
                <th>Current Stock</th>
                <th>Reorder Level</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {filteredInventory.map((medicine) => (

                <tr key={medicine.id}>

                  <td>
                    <strong>{medicine.name}</strong>
                    <br />
                    <small>{medicine.id}</small>
                  </td>

                  <td>
                    {medicine.category}
                  </td>

                  <td>
                    <strong>{medicine.quantity}</strong>{" "}
                    {medicine.unit}
                  </td>

                  <td>
                    {medicine.reorderLevel} {medicine.unit}
                  </td>

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
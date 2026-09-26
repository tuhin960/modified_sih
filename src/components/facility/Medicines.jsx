import React, { useState } from "react";

const medicineData = [
  {
    id: "MED-001",
    name: "Paracetamol 500mg",
    category: "Pain & Fever",
    stock: 240,
    unit: "Tablets",
    status: "Available",
    updated: "27 Sep 2026, 09:30 AM",
  },
  {
    id: "MED-002",
    name: "Amoxicillin 500mg",
    category: "Antibiotic",
    stock: 85,
    unit: "Capsules",
    status: "Available",
    updated: "27 Sep 2026, 08:45 AM",
  },
  {
    id: "MED-003",
    name: "Salbutamol",
    category: "Respiratory",
    stock: 18,
    unit: "Inhalers",
    status: "Low Stock",
    updated: "27 Sep 2026, 08:10 AM",
  },
  {
    id: "MED-004",
    name: "Insulin",
    category: "Diabetes",
    stock: 7,
    unit: "Vials",
    status: "Critical",
    updated: "27 Sep 2026, 07:50 AM",
  },
  {
    id: "MED-005",
    name: "ORS",
    category: "Emergency",
    stock: 120,
    unit: "Packets",
    status: "Available",
    updated: "26 Sep 2026, 06:20 PM",
  },
  {
    id: "MED-006",
    name: "Azithromycin 500mg",
    category: "Antibiotic",
    stock: 42,
    unit: "Tablets",
    status: "Available",
    updated: "26 Sep 2026, 05:40 PM",
  },
];

export default function Medicines() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showAddMedicine, setShowAddMedicine] = useState(false);

  const categories = [
    "All",
    ...new Set(medicineData.map((medicine) => medicine.category)),
  ];

  const filteredMedicines = medicineData.filter((medicine) => {
    const matchesSearch =
      medicine.name.toLowerCase().includes(search.toLowerCase()) ||
      medicine.id.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || medicine.category === category;

    return matchesSearch && matchesCategory;
  });

  const totalMedicines = medicineData.length;

  const availableMedicines = medicineData.filter(
    (medicine) => medicine.status === "Available"
  ).length;

  const lowStockMedicines = medicineData.filter(
    (medicine) => medicine.status === "Low Stock"
  ).length;

  const criticalMedicines = medicineData.filter(
    (medicine) => medicine.status === "Critical"
  ).length;

  return (
    <div className="page-container">

      {/* Header */}
      <div className="record-header">

        <div>
          <span className="page-kicker">FACILITY PHARMACY</span>

          <h2>Medicine Availability</h2>

          <p>
            Monitor medicine stock and availability at this healthcare
            facility.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowAddMedicine(true)}
        >
          + Add Medicine
        </button>

      </div>

      {/* Summary Cards */}
      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">💊</div>

          <div>
            <span>Total Medicines</span>
            <strong>{totalMedicines}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>

          <div>
            <span>Available</span>
            <strong>{availableMedicines}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚠️</div>

          <div>
            <span>Low Stock</span>
            <strong>{lowStockMedicines}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🚨</div>

          <div>
            <span>Critical</span>
            <strong>{criticalMedicines}</strong>
          </div>
        </div>

      </section>

      {/* Search and Filter */}
      <section className="dashboard-panel">

        <div className="panel-header">

          <div>
            <h3>Medicine Inventory</h3>

            <p>
              Current medicine stock available at the facility.
            </p>
          </div>

        </div>

        <div className="medicine-filters">

          <div className="search-box">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search medicine or ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Medicine Table */}
        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Medicine</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredMedicines.map((medicine) => (

                <tr key={medicine.id}>

                  <td>
                    <div className="medicine-name">
                      <div className="medicine-icon">
                        💊
                      </div>

                      <div>
                        <strong>{medicine.name}</strong>

                        <span>{medicine.id}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    {medicine.category}
                  </td>

                  <td>
                    <strong>{medicine.stock}</strong>{" "}
                    {medicine.unit}
                  </td>

                  <td>

                    <span
                      className={`status-badge ${medicine.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {medicine.status}
                    </span>

                  </td>

                  <td>
                    {medicine.updated}
                  </td>

                  <td>

                    <button
                      className="table-action"
                      onClick={() =>
                        alert(
                          `${medicine.name}\nStock: ${medicine.stock} ${medicine.unit}`
                        )
                      }
                    >
                      View
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {filteredMedicines.length === 0 && (
            <div className="empty-state">
              <span>💊</span>

              <h4>No medicines found</h4>

              <p>
                Try changing your search or category filter.
              </p>
            </div>
          )}

        </div>

      </section>

      {/* Resource Freshness */}
      <section className="dashboard-panel freshness-panel">

        <div className="panel-header">

          <div>
            <h3>Inventory Data Freshness</h3>

            <p>
              Shows when this facility last updated medicine availability.
            </p>
          </div>

          <span className="freshness-badge">
            ● Updated recently
          </span>

        </div>

        <div className="freshness-content">

          <div>
            <span>Last Inventory Update</span>
            <strong>27 Sep 2026, 09:30 AM</strong>
          </div>

          <div>
            <span>Facility</span>
            <strong>District Hospital</strong>
          </div>

          <div>
            <span>Data Status</span>
            <strong>Fresh</strong>
          </div>

        </div>

      </section>

      {/* Add Medicine Modal */}
      {showAddMedicine && (

        <div className="modal-overlay">

          <div className="modal-card">

            <div className="modal-header">

              <div>
                <span className="page-kicker">
                  INVENTORY MANAGEMENT
                </span>

                <h3>Add Medicine</h3>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowAddMedicine(false)}
              >
                ×
              </button>

            </div>

            <div className="form-group">

              <label>Medicine Name</label>

              <input
                type="text"
                placeholder="Enter medicine name"
              />

            </div>

            <div className="form-group">

              <label>Category</label>

              <select>
                <option>Pain & Fever</option>
                <option>Antibiotic</option>
                <option>Respiratory</option>
                <option>Diabetes</option>
                <option>Emergency</option>
              </select>

            </div>

            <div className="form-group">

              <label>Quantity</label>

              <input
                type="number"
                placeholder="Enter quantity"
              />

            </div>

            <div className="form-group">

              <label>Unit</label>

              <select>
                <option>Tablets</option>
                <option>Capsules</option>
                <option>Vials</option>
                <option>Inhalers</option>
                <option>Packets</option>
              </select>

            </div>

            <div className="modal-actions">

              <button
                className="secondary-button"
                onClick={() => setShowAddMedicine(false)}
              >
                Cancel
              </button>

              <button
                className="primary-button"
                onClick={() => {
                  alert("Medicine will be saved to Firebase later.");
                  setShowAddMedicine(false);
                }}
              >
                Save Medicine
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
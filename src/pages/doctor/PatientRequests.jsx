import { useState } from "react";

const requests = [
  {
    id: 1,
    name: "Rahul Das",
    age: 54,
    village: "Udaynarayanpur",
    reason: "Breathing difficulty",
    appointment: "Today • 09:30 AM",
    priority: "URGENT",
    source: "Health Worker",
  },
  {
    id: 2,
    name: "Anita Roy",
    age: 42,
    village: "Amta",
    reason: "Persistent fever",
    appointment: "Today • 10:15 AM",
    priority: "NORMAL",
    source: "Patient",
  },
  {
    id: 3,
    name: "Sanjay Kumar",
    age: 61,
    village: "Jagatballavpur",
    reason: "Diabetes review",
    appointment: "Today • 11:00 AM",
    priority: "HIGH",
    source: "Health Worker",
  },
  {
    id: 4,
    name: "Meena Devi",
    age: 48,
    village: "Bagnan",
    reason: "Abnormal vitals",
    appointment: "Today • 12:30 PM",
    priority: "URGENT",
    source: "PHC",
  },
];

export default function PatientRequests({ onNavigate }) {
  const [filter, setFilter] = useState("ALL");

  const filtered =
    filter === "ALL"
      ? requests
      : requests.filter((item) => item.priority === filter);

  return (
    <div className="doctor-page">
      <div className="doctor-page-heading">
        <div>
          <span className="doctor-section-label">INCOMING CARE REQUESTS</span>
          <h1>Patient Requests</h1>
          <p>Review incoming patients before consultation.</p>
        </div>

        <div className="filter-tabs">
          {["ALL", "URGENT", "HIGH", "NORMAL"].map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="request-grid">
        {filtered.map((request) => (
          <article className="request-card" key={request.id}>
            <div className="request-top">
              <div className="doctor-avatar large">
                {request.name.charAt(0)}
              </div>

              <span
                className={`priority-badge ${request.priority.toLowerCase()}`}
              >
                {request.priority}
              </span>
            </div>

            <h3>{request.name}</h3>

            <p className="patient-meta">
              {request.age} years • {request.village}
            </p>

            <div className="request-detail">
              <span>Reason</span>
              <strong>{request.reason}</strong>
            </div>

            <div className="request-detail">
              <span>Appointment</span>
              <strong>{request.appointment}</strong>
            </div>

            <div className="request-detail">
              <span>Requested by</span>
              <strong>{request.source}</strong>
            </div>

            <div className="request-actions">
              <button className="secondary-btn">Decline</button>

              <button
                className="primary-btn"
                onClick={() => onNavigate("consultation")}
              >
                Accept & Consult
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
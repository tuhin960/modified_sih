import { useState } from "react";

const appointments = [
  {
    id: 1,
    patient: "Rahul Das",
    age: 54,
    time: "09:30 AM",
    reason: "Breathing difficulty",
    mode: "Offline",
    status: "Upcoming",
    priority: "URGENT",
  },
  {
    id: 2,
    patient: "Anita Roy",
    age: 42,
    time: "10:15 AM",
    reason: "Follow-up consultation",
    mode: "Online",
    status: "Upcoming",
    priority: "NORMAL",
  },
  {
    id: 3,
    patient: "Sanjay Kumar",
    age: 61,
    time: "11:00 AM",
    reason: "Diabetes review",
    mode: "Offline",
    status: "Upcoming",
    priority: "HIGH",
  },
  {
    id: 4,
    patient: "Priya Sharma",
    age: 37,
    time: "Yesterday",
    reason: "Fever",
    mode: "Online",
    status: "Completed",
    priority: "NORMAL",
  },
];

export default function Appointments({ onNavigate }) {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? appointments
      : appointments.filter((item) => item.status === filter);

  return (
    <div className="doctor-page">
      <div className="doctor-page-heading">
        <div>
          <span className="doctor-section-label">CLINICAL SCHEDULE</span>
          <h1>Appointments</h1>
          <p>Manage upcoming and completed consultations.</p>
        </div>

        <div className="filter-tabs">
          {["All", "Upcoming", "Completed", "Cancelled"].map((item) => (
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

      <div className="doctor-table-wrapper">
        <table className="doctor-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Time</th>
              <th>Reason</th>
              <th>Mode</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((appointment) => (
              <tr key={appointment.id}>
                <td>
                  <div className="table-patient">
                    <div className="doctor-avatar small">
                      {appointment.patient.charAt(0)}
                    </div>

                    <div>
                      <strong>{appointment.patient}</strong>
                      <span>{appointment.age} years</span>
                    </div>
                  </div>
                </td>

                <td>{appointment.time}</td>

                <td>{appointment.reason}</td>

                <td>
                  <span className="mode-badge">
                    {appointment.mode === "Online" ? "🌐" : "🏥"}{" "}
                    {appointment.mode}
                  </span>
                </td>

                <td>
                  <span
                    className={`priority-badge ${appointment.priority.toLowerCase()}`}
                  >
                    {appointment.priority}
                  </span>
                </td>

                <td>
                  <span
                    className={`status-badge ${appointment.status.toLowerCase()}`}
                  >
                    {appointment.status}
                  </span>
                </td>

                <td>
                  {appointment.status === "Upcoming" ? (
                    <button
                      className="table-action"
                      onClick={() => onNavigate("consultation")}
                    >
                      Consult
                    </button>
                  ) : (
                    <button
                      className="table-action"
                      onClick={() => onNavigate("patient360")}
                    >
                      View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
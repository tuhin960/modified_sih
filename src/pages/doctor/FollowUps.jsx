import { useState } from "react";

const initialFollowUps = [
  {
    id: 1,
    patient: "Rahul Das",
    date: "28 Sep 2026",
    time: "10:00 AM",
    mode: "Online",
    instruction: "Review respiratory symptoms.",
    status: "Due",
  },
  {
    id: 2,
    patient: "Anita Roy",
    date: "30 Sep 2026",
    time: "11:30 AM",
    mode: "Offline",
    instruction: "Review fever progression.",
    status: "Scheduled",
  },
  {
    id: 3,
    patient: "Sanjay Kumar",
    date: "25 Sep 2026",
    time: "04:00 PM",
    mode: "Online",
    instruction: "Review blood sugar report.",
    status: "Missed",
  },
];

export default function FollowUps() {
  const [followUps, setFollowUps] = useState(initialFollowUps);

  const markCompleted = (id) => {
    setFollowUps((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: "Completed" }
          : item
      )
    );
  };

  return (
    <div className="doctor-page">
      <div className="doctor-page-heading">
        <div>
          <span className="doctor-section-label">CONTINUITY OF CARE</span>
          <h1>Follow-ups</h1>
          <p>Schedule and monitor post-consultation care.</p>
        </div>

        <button className="doctor-primary-btn">
          + Schedule Follow-up
        </button>
      </div>

      <div className="followup-grid">
        {followUps.map((item) => (
          <article className="followup-card" key={item.id}>
            <div className="followup-top">
              <div className="doctor-avatar">
                {item.patient.charAt(0)}
              </div>

              <span
                className={`status-badge ${item.status.toLowerCase()}`}
              >
                {item.status}
              </span>
            </div>

            <h3>{item.patient}</h3>

            <div className="followup-info">
              <div>
                <span>Date</span>
                <strong>{item.date}</strong>
              </div>

              <div>
                <span>Time</span>
                <strong>{item.time}</strong>
              </div>

              <div>
                <span>Mode</span>
                <strong>{item.mode}</strong>
              </div>
            </div>

            <div className="followup-instruction">
              <span>Instructions</span>
              <p>{item.instruction}</p>
            </div>

            <div className="request-actions">
              <button className="secondary-btn">
                Contact Patient
              </button>

              {item.status !== "Completed" && (
                <button
                  className="primary-btn"
                  onClick={() => markCompleted(item.id)}
                >
                  Mark Completed
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
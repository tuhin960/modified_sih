import React from "react";

const followups = [
  {
    title: "Cardiology Follow-up",
    doctor: "Dr. Priya Sharma",
    date: "05 Oct 2026",
    priority: "High",
    type: "Hospital Visit"
  },
  {
    title: "Blood Pressure Review",
    doctor: "Dr. Arindam Sen",
    date: "12 Oct 2026",
    priority: "Medium",
    type: "Teleconsultation"
  },
  {
    title: "Medicine Adherence Check",
    doctor: "Health Worker",
    date: "20 Oct 2026",
    priority: "Normal",
    type: "Community Follow-up"
  }
];

export default function FollowUps() {
  return (
    <div className="page-container">

      <div className="record-header">
        <div>
          <span className="page-kicker">CONTINUITY OF CARE</span>
          <h2>Follow-ups</h2>
          <p>Don't miss important healthcare follow-ups.</p>
        </div>

        <button className="primary-btn">
          + Add Reminder
        </button>
      </div>

      <div className="followup-summary">

        <div>
          <span>Total Follow-ups</span>
          <strong>3</strong>
        </div>

        <div>
          <span>Due Soon</span>
          <strong>1</strong>
        </div>

        <div>
          <span>High Priority</span>
          <strong>1</strong>
        </div>

      </div>

      <div className="followup-list">

        {followups.map((item, index) => (
          <div className="followup-card" key={index}>

            <div className="followup-date">
              <strong>{item.date.split(" ")[0]}</strong>
              <span>{item.date.split(" ")[1]}</span>
            </div>

            <div className="followup-icon">
              🔔
            </div>

            <div className="followup-main">
              <h3>{item.title}</h3>

              <p>
                {item.doctor}
              </p>

              <div className="followup-tags">
                <span>{item.type}</span>

                <span
                  className={
                    item.priority === "High"
                      ? "high"
                      : item.priority === "Medium"
                      ? "medium"
                      : "normal"
                  }
                >
                  {item.priority} Priority
                </span>
              </div>
            </div>

            <button className="outline-btn">
              View Details
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}
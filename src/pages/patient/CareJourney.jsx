import React from "react";

const events = [
  {
    date: "28 Sep 2026",
    title: "Hospital Consultation",
    description: "Scheduled consultation at District Hospital, Howrah.",
    icon: "🏥",
    active: true
  },
  {
    date: "27 Sep 2026",
    title: "Patient In Transfer",
    description: "Referral transfer initiated from source facility.",
    icon: "🚑",
    active: true
  },
  {
    date: "27 Sep 2026",
    title: "Referral Accepted",
    description: "District Hospital accepted the referral.",
    icon: "✓",
    active: true
  },
  {
    date: "26 Sep 2026",
    title: "Doctor Referral Created",
    description: "Cardiology referral created by attending doctor.",
    icon: "📋",
    active: true
  },
  {
    date: "25 Sep 2026",
    title: "Doctor Consultation",
    description: "Initial consultation completed.",
    icon: "🩺",
    active: true
  }
];

export default function CareJourney() {
  return (
    <div className="page-container">

      <div className="record-header">
        <div>
          <span className="page-kicker">CONTINUITY OF CARE</span>
          <h2>Care Journey</h2>
          <p>Follow every important step in your healthcare journey.</p>
        </div>

        <span className="journey-status">
          ● Journey Active
        </span>
      </div>

      <section className="journey-summary">

        <div>
          <span>Current Stage</span>
          <strong>In Transfer</strong>
        </div>

        <div>
          <span>Care Started</span>
          <strong>25 Sep 2026</strong>
        </div>

        <div>
          <span>Referral ID</span>
          <strong>REF-2026-1042</strong>
        </div>

        <div>
          <span>Destination</span>
          <strong>District Hospital</strong>
        </div>

      </section>

      <section className="dashboard-panel timeline-panel">

        <div className="panel-header">
          <div>
            <h3>Care Timeline</h3>
            <p>Chronological history of your care</p>
          </div>
        </div>

        <div className="timeline">

          {events.map((event, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-marker">
                {event.icon}
              </div>

              {index !== events.length - 1 && (
                <div className="timeline-line"></div>
              )}

              <div className="timeline-content">
                <span>{event.date}</span>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}
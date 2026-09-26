import React from "react";

const ReferralTimeline = ({ events = [] }) => {
  return (
    <div className="referral-timeline">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${
            event.completed ? "completed" : ""
          }`}
          key={event.id || index}
        >
          <div className="timeline-marker">
            {event.completed ? "✓" : index + 1}
          </div>

          <div className="timeline-content">
            <h4>{event.title}</h4>
            <p>{event.description}</p>

            {event.timestamp && (
              <small>{event.timestamp}</small>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReferralTimeline;
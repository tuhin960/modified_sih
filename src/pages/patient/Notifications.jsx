import React from "react";

const notifications = [
  {
    icon: "🚑",
    title: "Referral accepted",
    message:
      "District Hospital, Howrah has accepted your referral.",
    time: "10 minutes ago",
    unread: true
  },
  {
    icon: "📅",
    title: "Upcoming appointment",
    message:
      "You have an appointment with Dr. Arindam Sen tomorrow at 10:30 AM.",
    time: "2 hours ago",
    unread: true
  },
  {
    icon: "💊",
    title: "Medicine reminder",
    message:
      "Your Atorvastatin medicine is running low.",
    time: "Yesterday",
    unread: false
  },
  {
    icon: "🩺",
    title: "Consultation completed",
    message:
      "Your recent consultation has been added to your health record.",
    time: "2 days ago",
    unread: false
  }
];

export default function Notifications() {
  return (
    <div className="page-container">

      <div className="record-header">
        <div>
          <span className="page-kicker">UPDATES</span>
          <h2>Notifications</h2>
          <p>Important updates from your healthcare journey.</p>
        </div>

        <button className="outline-btn">
          Mark all as read
        </button>
      </div>

      <section className="notification-list">

        {notifications.map((notification, index) => (
          <div
            className={`notification-card ${
              notification.unread ? "unread" : ""
            }`}
            key={index}
          >

            <div className="notification-icon">
              {notification.icon}
            </div>

            <div className="notification-content">
              <div className="notification-title-row">
                <h3>{notification.title}</h3>

                {notification.unread && (
                  <span className="unread-dot"></span>
                )}
              </div>

              <p>{notification.message}</p>

              <span className="notification-time">
                {notification.time}
              </span>
            </div>

            <button className="notification-more">
              ⋮
            </button>

          </div>
        ))}

      </section>

    </div>
  );
}
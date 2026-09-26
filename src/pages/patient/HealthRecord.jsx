import React from "react";
import { Link } from "react-router-dom";

const stats = [
  {
    title: "Active Referrals",
    value: "1",
    icon: "🔄",
    className: "blue"
  },
  {
    title: "Upcoming Appointments",
    value: "2",
    icon: "📅",
    className: "purple"
  },
  {
    title: "Current Medicines",
    value: "4",
    icon: "💊",
    className: "green"
  },
  {
    title: "Pending Follow-ups",
    value: "1",
    icon: "🔔",
    className: "orange"
  }
];

export default function Dashboard() {
  return (
    <div className="page-container">

      <section className="welcome-card">
        <div className="welcome-content">
          <span className="welcome-badge">PATIENT PORTAL</span>

          <h2>Good evening, Tuhin 👋</h2>

          <p>
            Keep track of your healthcare journey, appointments,
            medicines and referrals from one place.
          </p>

          <div className="welcome-actions">
            <Link to="/patient/appointments" className="primary-btn">
              📅 Book Appointment
            </Link>

            <Link to="/patient/health-record" className="secondary-btn">
              🩺 View Health Record
            </Link>
          </div>
        </div>

        <div className="welcome-illustration">
          <div className="heart-circle">❤</div>
          <div className="pulse-line"></div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <h3>Health Overview</h3>
            <p>Your current healthcare activity</p>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div className={`stat-card ${stat.className}`} key={stat.title}>
              <div className="stat-top">
                <div className="stat-icon">{stat.icon}</div>
                <span className="stat-arrow">↗</span>
              </div>

              <div className="stat-value">{stat.value}</div>
              <div className="stat-title">{stat.title}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="dashboard-grid">

        <section className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h3>Upcoming Appointment</h3>
              <p>Your next scheduled consultation</p>
            </div>

            <Link to="/patient/appointments">View all →</Link>
          </div>

          <div className="appointment-highlight">
            <div className="doctor-avatar">👨‍⚕️</div>

            <div className="appointment-info">
              <h4>Dr. Arindam Sen</h4>
              <span>General Physician</span>

              <div className="appointment-meta">
                <span>📅 28 Sep 2026</span>
                <span>🕐 10:30 AM</span>
              </div>
            </div>

            <span className="status-badge confirmed">
              Confirmed
            </span>
          </div>

          <button className="outline-btn full-width">
            Join Consultation
          </button>
        </section>

        <section className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h3>Active Referral</h3>
              <p>Current hospital referral status</p>
            </div>

            <Link to="/patient/referrals">Track →</Link>
          </div>

          <div className="referral-card">
            <div className="referral-top">
              <span className="referral-id">REF-2026-1042</span>
              <span className="status-badge progress">
                In Transfer
              </span>
            </div>

            <h4>District Hospital, Howrah</h4>

            <p>
              Cardiology consultation required
            </p>

            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>

            <div className="referral-steps">
              <span>Referral</span>
              <span>Accepted</span>
              <span>In Transfer</span>
              <span>Hospital</span>
            </div>
          </div>
        </section>

      </div>

      <section className="dashboard-panel recent-section">

        <div className="panel-header">
          <div>
            <h3>Recent Care Activity</h3>
            <p>Your latest healthcare events</p>
          </div>

          <Link to="/patient/care-journey">
            View journey →
          </Link>
        </div>

        <div className="activity-list">

          <div className="activity-item">
            <div className="activity-icon green-bg">✓</div>

            <div className="activity-content">
              <strong>Consultation completed</strong>
              <span>Dr. Arindam Sen • General Medicine</span>
            </div>

            <time>Today</time>
          </div>

          <div className="activity-item">
            <div className="activity-icon blue-bg">↗</div>

            <div className="activity-content">
              <strong>Referral accepted</strong>
              <span>District Hospital, Howrah</span>
            </div>

            <time>Yesterday</time>
          </div>

          <div className="activity-item">
            <div className="activity-icon purple-bg">💊</div>

            <div className="activity-content">
              <strong>Prescription updated</strong>
              <span>4 medicines prescribed</span>
            </div>

            <time>25 Sep</time>
          </div>

        </div>

      </section>

    </div>
  );
}
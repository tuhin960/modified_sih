import React from "react";
import { useLocation } from "react-router-dom";

const pageNames = {
  "/patient": ["Dashboard", "Your health at a glance"],
  "/patient/health-record": ["My Health Record", "Your complete medical information"],
  "/patient/care-journey": ["Care Journey", "Track your healthcare journey"],
  "/patient/appointments": ["Appointments", "Manage your upcoming consultations"],
  "/patient/referrals": ["Referrals", "Track your hospital referrals"],
  "/patient/medicines": ["Medicines", "Manage your prescribed medicines"],
  "/patient/follow-ups": ["Follow-ups", "Stay on track with your care"],
  "/patient/notifications": ["Notifications", "Important healthcare updates"]
};

export default function Navbar({ setMobileOpen }) {
  const location = useLocation();

  const current =
    pageNames[location.pathname] || pageNames["/patient"];

  return (
    <header className="patient-navbar">
      <div className="navbar-left">
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>

        <div>
          <h1>{current[0]}</h1>
          <p>{current[1]}</p>
        </div>
      </div>

      <div className="navbar-actions">
        <button className="nav-action notification-button">
          🔔
          <span className="notification-dot"></span>
        </button>

        <div className="navbar-user">
          <div className="navbar-avatar">TP</div>

          <div className="navbar-user-info">
            <strong>Tuhin</strong>
            <span>Patient</span>
          </div>

          <span className="dropdown-arrow">⌄</span>
        </div>
      </div>
    </header>
  );
}
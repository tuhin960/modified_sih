import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { path: "/patient", icon: "⌂", label: "Dashboard" },
  { path: "/patient/health-record", icon: "🩺", label: "My Health Record" },
  { path: "/patient/care-journey", icon: "🧭", label: "Care Journey" },
  { path: "/patient/appointments", icon: "📅", label: "Appointments" },
  { path: "/patient/referrals", icon: "🔄", label: "Referrals" },
  { path: "/patient/medicines", icon: "💊", label: "Medicines" },
  { path: "/patient/follow-ups", icon: "🔔", label: "Follow-ups" },
  { path: "/patient/notifications", icon: "🔔", label: "Notifications" }
];

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`patient-sidebar ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-logo">✚</div>

          <div>
            <h2>Swasth Setu</h2>
            <span>Patient Care</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section-title">MAIN MENU</div>

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/patient"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-help">
          <div className="help-icon">?</div>

          <div>
            <strong>Need Help?</strong>
            <p>Contact your health worker</p>
          </div>
        </div>

        <div className="sidebar-profile">
          <div className="profile-avatar">TP</div>

          <div className="profile-info">
            <strong>Tuhin Patient</strong>
            <span>Patient ID: PT-1024</span>
          </div>

          <button className="profile-more">⋮</button>
        </div>
      </aside>
    </>
  );
}
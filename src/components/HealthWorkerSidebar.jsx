import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    path: "/healthworker",
    icon: "⌂",
    label: "Dashboard"
  },
  {
    path: "/healthworker/register-patient",
    icon: "➕",
    label: "Register Patient"
  },
  {
    path: "/healthworker/assessment",
    icon: "🩺",
    label: "Patient Assessment"
  },
  {
    path: "/healthworker/patients",
    icon: "👥",
    label: "My Patients"
  },
  {
    path: "/healthworker/referrals",
    icon: "🔄",
    label: "Referral Tracking"
  },
  {
    path: "/healthworker/follow-ups",
    icon: "🔔",
    label: "Follow-up Management"
  },
  {
    path: "/healthworker/offline",
    icon: "📡",
    label: "Offline Mode"
  }
];

export default function HealthWorkerSidebar({
  mobileOpen,
  setMobileOpen
}) {
  return (
    <>
      {mobileOpen && (
        <div
          className="hw-sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`hw-sidebar ${
          mobileOpen ? "hw-mobile-open" : ""
        }`}
      >
        <div className="hw-brand">
          <div className="hw-brand-logo">✚</div>

          <div>
            <h2>Swasth Setu</h2>
            <span>Community Health</span>
          </div>
        </div>

        <div className="hw-role-card">
          <div className="hw-role-icon">👩‍⚕️</div>

          <div>
            <strong>Health Worker</strong>
            <span>ASHA / ANM</span>
          </div>

          <span className="hw-online-dot"></span>
        </div>

        <nav className="hw-sidebar-nav">

          <div className="hw-nav-title">
            WORKSPACE
          </div>

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/healthworker"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `hw-sidebar-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              <span className="hw-sidebar-icon">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </NavLink>
          ))}

        </nav>

        <div className="hw-village-card">

          <div className="hw-village-icon">
            📍
          </div>

          <div>
            <strong>Assigned Area</strong>
            <span>Village Health Centre</span>
          </div>

        </div>

        <div className="hw-profile">

          <div className="hw-avatar">
            AS
          </div>

          <div className="hw-profile-info">
            <strong>Anita Sharma</strong>
            <span>HW-00428</span>
          </div>

          <button>⋮</button>

        </div>

      </aside>
    </>
  );
}
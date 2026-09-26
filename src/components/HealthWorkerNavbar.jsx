import React from "react";
import { useLocation } from "react-router-dom";

const pageInfo = {
  "/healthworker": [
    "Health Worker Dashboard",
    "Community health at a glance"
  ],

  "/healthworker/register-patient": [
    "Register Patient",
    "Create a new patient record"
  ],

  "/healthworker/assessment": [
    "Patient Assessment",
    "Record symptoms, vitals and risk indicators"
  ],

  "/healthworker/patients": [
    "My Patients",
    "Patients assigned to your community"
  ],

  "/healthworker/referrals": [
    "Referral Tracking",
    "Monitor patients through the referral journey"
  ],

  "/healthworker/follow-ups": [
    "Follow-up Management",
    "Manage pending and high-risk follow-ups"
  ],

  "/healthworker/offline": [
    "Offline Mode",
    "Manage locally stored records and synchronization"
  ]
};

export default function HealthWorkerNavbar({
  setMobileOpen
}) {
  const location = useLocation();

  const current =
    pageInfo[location.pathname] ||
    pageInfo["/healthworker"];

  return (
    <header className="hw-navbar">

      <div className="hw-navbar-left">

        <button
          className="hw-menu-btn"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>

        <div>
          <h1>{current[0]}</h1>
          <p>{current[1]}</p>
        </div>

      </div>

      <div className="hw-navbar-actions">

        <div className="hw-network-status">
          <span className="hw-network-dot"></span>
          Online
        </div>

        <button className="hw-notification-btn">
          🔔
          <span></span>
        </button>

        <div className="hw-navbar-user">

          <div className="hw-navbar-avatar">
            AS
          </div>

          <div className="hw-navbar-user-info">
            <strong>Anita</strong>
            <span>Health Worker</span>
          </div>

          <b>⌄</b>

        </div>

      </div>

    </header>
  );
}
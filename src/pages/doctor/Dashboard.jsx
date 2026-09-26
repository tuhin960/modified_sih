import { useEffect, useState } from "react";
import DoctorSidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import StatCard from "../../components/StatCard";
import PatientRequests from "./PatientRequests";
import Appointments from "./Appointments";
import Consultation from "./Consultation";
import Patient360 from "./Patient360";
import Referrals from "./Referrals";
import FollowUps from "./FollowUps";
import Prescriptions from "./Prescriptions";
import "./Doctor.css";

const doctorStats = [
  {
    title: "Today's Appointments",
    value: "12",
    icon: "📅",
    trend: "+3 today",
  },
  {
    title: "Emergency Cases",
    value: "3",
    icon: "🚨",
    trend: "Needs attention",
  },
  {
    title: "Pending Requests",
    value: "7",
    icon: "📥",
    trend: "Awaiting review",
  },
  {
    title: "Active Referrals",
    value: "5",
    icon: "🔄",
    trend: "2 in transfer",
  },
  {
    title: "Follow-ups",
    value: "8",
    icon: "🔔",
    trend: "Due today",
  },
];

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "⌂" },
  { id: "requests", label: "Patient Requests", icon: "📥" },
  { id: "appointments", label: "Appointments", icon: "📅" },
  { id: "consultation", label: "Consultation", icon: "🩺" },
  { id: "patient360", label: "Patient 360°", icon: "👤" },
  { id: "referrals", label: "Smart Referral", icon: "🔄" },
  { id: "followups", label: "Follow-ups", icon: "🔔" },
  { id: "prescriptions", label: "Prescriptions", icon: "💊" },
];

function DashboardHome({ onNavigate }) {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="doctor-home">
      <div className="doctor-welcome">
        <div>
          <span className="doctor-eyebrow">CLINICAL WORKSPACE</span>
          <h1>Good morning, Doctor 👋</h1>
          <p>
            Manage consultations, patients, referrals and follow-ups
            from one clinical workspace.
          </p>
        </div>

        <button
          className="doctor-primary-btn"
          onClick={() => onNavigate("consultation")}
        >
          + Start Consultation
        </button>
      </div>

      <div className="doctor-stat-grid">
        {doctorStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="doctor-dashboard-grid">
        <section className="doctor-panel">
          <div className="doctor-panel-header">
            <div>
              <span className="doctor-section-label">TODAY</span>
              <h2>Upcoming Appointments</h2>
            </div>

            <button onClick={() => onNavigate("appointments")}>
              View all →
            </button>
          </div>

          <div className="appointment-list">
            {[
              {
                name: "Rahul Das",
                age: 54,
                time: "09:30 AM",
                reason: "Breathing difficulty",
                priority: "URGENT",
              },
              {
                name: "Anita Roy",
                age: 42,
                time: "10:15 AM",
                reason: "Follow-up consultation",
                priority: "NORMAL",
              },
              {
                name: "Sanjay Kumar",
                age: 61,
                time: "11:00 AM",
                reason: "Diabetes review",
                priority: "HIGH",
              },
            ].map((patient) => (
              <div className="doctor-appointment-row" key={patient.name}>
                <div className="doctor-avatar">
                  {patient.name.charAt(0)}
                </div>

                <div className="doctor-appointment-info">
                  <strong>{patient.name}</strong>
                  <span>
                    {patient.age} yrs • {patient.reason}
                  </span>
                </div>

                <div className="doctor-time">
                  <strong>{patient.time}</strong>
                  <span
                    className={`priority-badge ${patient.priority.toLowerCase()}`}
                  >
                    {patient.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="doctor-panel">
          <div className="doctor-panel-header">
            <div>
              <span className="doctor-section-label">ATTENTION</span>
              <h2>Emergency Cases</h2>
            </div>

            <span className="live-indicator">
              <i></i> Live
            </span>
          </div>

          <div className="emergency-list">
            <div className="emergency-card">
              <div className="emergency-icon">🚨</div>

              <div>
                <strong>Rahul Das</strong>
                <span>Severe breathing difficulty</span>
                <small>Health Worker referral • 4 min ago</small>
              </div>

              <button
                onClick={() => {
                  setSelectedPatient("Rahul Das");
                  onNavigate("patient360");
                }}
              >
                Review
              </button>
            </div>

            <div className="emergency-card">
              <div className="emergency-icon">⚠️</div>

              <div>
                <strong>Meena Devi</strong>
                <span>Abnormal vitals detected</span>
                <small>PHC referral • 12 min ago</small>
              </div>

              <button
                onClick={() => {
                  setSelectedPatient("Meena Devi");
                  onNavigate("patient360");
                }}
              >
                Review
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="doctor-panel referral-overview">
        <div className="doctor-panel-header">
          <div>
            <span className="doctor-section-label">REFERRAL NETWORK</span>
            <h2>Active Referrals</h2>
          </div>

          <button onClick={() => onNavigate("referrals")}>
            Manage referrals →
          </button>
        </div>

        <div className="mini-referral-grid">
          <div className="mini-referral">
            <span className="mini-icon">📤</span>
            <div>
              <strong>3</strong>
              <span>Sent</span>
            </div>
          </div>

          <div className="mini-referral">
            <span className="mini-icon">✓</span>
            <div>
              <strong>1</strong>
              <span>Accepted</span>
            </div>
          </div>

          <div className="mini-referral">
            <span className="mini-icon">🚑</span>
            <div>
              <strong>2</strong>
              <span>In Transfer</span>
            </div>
          </div>

          <div className="mini-referral">
            <span className="mini-icon">🏥</span>
            <div>
              <strong>4</strong>
              <span>Completed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DoctorDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const pageTitles = {
    dashboard: "Doctor Dashboard",
    requests: "Patient Requests",
    appointments: "Appointments",
    consultation: "Consultation",
    patient360: "Patient 360°",
    referrals: "Smart Referral",
    followups: "Follow-ups",
    prescriptions: "Prescriptions",
  };

  const renderPage = () => {
    switch (activePage) {
      case "requests":
        return <PatientRequests onNavigate={setActivePage} />;

      case "appointments":
        return <Appointments onNavigate={setActivePage} />;

      case "consultation":
        return <Consultation onNavigate={setActivePage} />;

      case "patient360":
        return <Patient360 onNavigate={setActivePage} />;

      case "referrals":
        return <Referrals onNavigate={setActivePage} />;

      case "followups":
        return <FollowUps onNavigate={setActivePage} />;

      case "prescriptions":
        return <Prescriptions onNavigate={setActivePage} />;

      default:
        return <DashboardHome onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="doctor-layout">
      <DoctorSidebar
        items={menuItems}
        activeItem={activePage}
        onNavigate={setActivePage}
        mobileOpen={mobileSidebar}
        onClose={() => setMobileSidebar(false)}
      />

      <div className="doctor-main">
        <Navbar
          title={pageTitles[activePage]}
          onMenuClick={() => setMobileSidebar(true)}
        />

        <main className="doctor-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default DoctorDashboard;
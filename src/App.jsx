import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PatientDashboard from "../pages/patient/Dashboard";
import PatientHealthRecord from "../pages/patient/HealthRecord";
import PatientCareJourney from "../pages/patient/CareJourney";
import PatientAppointments from "../pages/patient/Appointments";
import PatientReferrals from "../pages/patient/Referrals";
import PatientMedicines from "../pages/patient/Medicines";
import PatientNotifications from "../pages/patient/Notifications";

import HealthWorkerDashboard from "../pages/healthworker/Dashboard";
import HealthWorkerPatients from "../pages/healthworker/MyPatients";
import RegisterPatient from "../pages/healthworker/RegisterPatient";
import HealthAssessment from "../pages/healthworker/HealthAssessment";
import HealthWorkerReferrals from "../pages/healthworker/Referrals";
import HealthWorkerFollowUps from "../pages/healthworker/FollowUps";
import OfflineSync from "../pages/healthworker/OfflineSync";
import HealthWorkerNotifications from "../pages/healthworker/Notifications";

import DoctorDashboard from "../pages/doctor/Dashboard";
import DoctorPatients from "../pages/doctor/MyPatients";
import DoctorAppointments from "../pages/doctor/Appointments";
import DoctorConsultations from "../pages/doctor/Consultations";
import DoctorRecords from "../pages/doctor/PatientRecords";
import ReferPatient from "../pages/doctor/ReferPatient";
import DoctorFollowUps from "../pages/doctor/FollowUps";
import DoctorPrescriptions from "../pages/doctor/Prescriptions";
import DoctorNotifications from "../pages/doctor/Notifications";

import FacilityDashboard from "../pages/facility/Dashboard";
import IncomingReferrals from "../pages/facility/IncomingReferrals";
import FacilityPatients from "../pages/facility/Patients";
import ResourceAvailability from "../pages/facility/ResourceAvailability";
import BedsEquipment from "../pages/facility/BedsEquipment";
import Diagnostics from "../pages/facility/Diagnostics";
import FacilityMedicines from "../pages/facility/Medicines";
import ReferralHistory from "../pages/facility/ReferralHistory";
import FacilityNotifications from "../pages/facility/Notifications";

import CommandCenter from "../pages/admin/CommandCenter";
import AdminPatients from "../pages/admin/Patients";
import CareTeam from "../pages/admin/CareTeam";
import Facilities from "../pages/admin/Facilities";
import EmergencyReferrals from "../pages/admin/EmergencyReferrals";
import ResourceMonitoring from "../pages/admin/ResourceMonitoring";
import AdminFollowUps from "../pages/admin/FollowUps";
import AdminMedicines from "../pages/admin/Medicines";
import Alerts from "../pages/admin/Alerts";
import ImpactAnalytics from "../pages/admin/ImpactAnalytics";

const AppRoutes = () => {
  return (
    <Routes>

      {/* PATIENT */}
      <Route
        path="/patient-dashboard"
        element={<PatientDashboard />}
      />

      <Route
        path="/patient-health-record"
        element={<PatientHealthRecord />}
      />

      <Route
        path="/patient-care-journey"
        element={<PatientCareJourney />}
      />

      <Route
        path="/patient-appointments"
        element={<PatientAppointments />}
      />

      <Route
        path="/patient-referrals"
        element={<PatientReferrals />}
      />

      <Route
        path="/patient-medicines"
        element={<PatientMedicines />}
      />

      <Route
        path="/patient-notifications"
        element={<PatientNotifications />}
      />

      {/* HEALTH WORKER */}

      <Route
        path="/healthworker-dashboard"
        element={<HealthWorkerDashboard />}
      />

      <Route
        path="/healthworker-patients"
        element={<HealthWorkerPatients />}
      />

      <Route
        path="/healthworker-register"
        element={<RegisterPatient />}
      />

      <Route
        path="/healthworker-assessment"
        element={<HealthAssessment />}
      />

      <Route
        path="/healthworker-referrals"
        element={<HealthWorkerReferrals />}
      />

      <Route
        path="/healthworker-followups"
        element={<HealthWorkerFollowUps />}
      />

      <Route
        path="/healthworker-offline"
        element={<OfflineSync />}
      />

      <Route
        path="/healthworker-notifications"
        element={<HealthWorkerNotifications />}
      />

      {/* DOCTOR */}

      <Route
        path="/doctor-dashboard"
        element={<DoctorDashboard />}
      />

      <Route
        path="/doctor-patients"
        element={<DoctorPatients />}
      />

      <Route
        path="/doctor-appointments"
        element={<DoctorAppointments />}
      />

      <Route
        path="/doctor-consultations"
        element={<DoctorConsultations />}
      />

      <Route
        path="/doctor-records"
        element={<DoctorRecords />}
      />

      <Route
        path="/doctor-refer"
        element={<ReferPatient />}
      />

      <Route
        path="/doctor-followups"
        element={<DoctorFollowUps />}
      />

      <Route
        path="/doctor-prescriptions"
        element={<DoctorPrescriptions />}
      />

      <Route
        path="/doctor-notifications"
        element={<DoctorNotifications />}
      />

      {/* FACILITY */}

      <Route
        path="/facility-dashboard"
        element={<FacilityDashboard />}
      />

      <Route
        path="/facility-referrals"
        element={<IncomingReferrals />}
      />

      <Route
        path="/facility-patients"
        element={<FacilityPatients />}
      />

      <Route
        path="/facility-resources"
        element={<ResourceAvailability />}
      />

      <Route
        path="/facility-beds"
        element={<BedsEquipment />}
      />

      <Route
        path="/facility-diagnostics"
        element={<Diagnostics />}
      />

      <Route
        path="/facility-medicines"
        element={<FacilityMedicines />}
      />

      <Route
        path="/facility-history"
        element={<ReferralHistory />}
      />

      <Route
        path="/facility-notifications"
        element={<FacilityNotifications />}
      />

      {/* ADMIN */}

      <Route
        path="/admin-command-center"
        element={<CommandCenter />}
      />

      <Route
        path="/admin-patients"
        element={<AdminPatients />}
      />

      <Route
        path="/admin-care-team"
        element={<CareTeam />}
      />

      <Route
        path="/admin-facilities"
        element={<Facilities />}
      />

      <Route
        path="/admin-emergency-referrals"
        element={<EmergencyReferrals />}
      />

      <Route
        path="/admin-resources"
        element={<ResourceMonitoring />}
      />

      <Route
        path="/admin-followups"
        element={<AdminFollowUps />}
      />

      <Route
        path="/admin-medicines"
        element={<AdminMedicines />}
      />

      <Route
        path="/admin-alerts"
        element={<Alerts />}
      />

      <Route
        path="/admin-analytics"
        element={<ImpactAnalytics />}
      />

      <Route
        path="*"
        element={<Navigate to="/patient-dashboard" replace />}
      />

    </Routes>
  );
};

export default AppRoutes;
import { useState } from "react";
import "./App.css";
import HealthWorkerLayout from "./pages/healthworker/HealthWorkerLayout";

import HealthWorkerDashboard from "./pages/healthworker/Dashboard";
import DoctorDashboard from "./pages/doctor/Dashboard";
import RegisterPatient from "./pages/healthworker/RegisterPatient";
import Assessment from "./pages/healthworker/Assessment";
import HealthWorkerPatients from "./pages/healthworker/Patients";
import HealthWorkerReferrals from "./pages/healthworker/Referrals";
import FollowUps from "./pages/healthworker/FollowUps";
import OfflineMode from "./pages/healthworker/OfflineMode";

const roleConfig = {
  patient: {
    label: "Patient",
    icon: "👤",
    description: "Access your healthcare journey",
    idLabel: "",
    idPlaceholder: "",
    watermark: "PATIENT CARE",
    backgroundIcons: ["❤️", "🩺", "🏥", "📋", "➕", "🫀"],
  },

  doctor: {
    label: "Doctor",
    icon: "🩺",
    description: "Manage consultations & referrals",
    idLabel: "Medical Registration Number",
    idPlaceholder: "Enter NMR / State Medical Council Reg. No.",
    watermark: "MEDICAL CARE",
    backgroundIcons: ["🩺", "⚕️", "❤️", "🫀", "➕", "📈"],
  },

  healthworker: {
    label: "Health Worker",
    icon: "🧑‍⚕️",
    description: "Connect rural patients to care",
    idLabel: "Health Worker ID",
    idPlaceholder: "Enter your Health Worker ID",
    watermark: "COMMUNITY HEALTH",
    backgroundIcons: ["🧑‍⚕️", "🏘️", "📍", "❤️", "🤝", "🏥"],
  },

  pharmacy: {
    label: "Pharmacy",
    icon: "💊",
    description: "Manage medicines & prescriptions",
    idLabel: "Pharmacy / Drug Licence Number",
    idPlaceholder: "Enter pharmacy licence number",
    watermark: "PHARMACY CARE",
    backgroundIcons: ["💊", "💉", "🧴", "🧪", "📋", "➕"],
  },

  admin: {
    label: "Admin",
    icon: "🛡️",
    description: "District healthcare command center",
    idLabel: "Admin Access Code",
    idPlaceholder: "Enter admin access code",
    watermark: "HEALTHCARE NETWORK",
    backgroundIcons: ["🛡️", "🏥", "📊", "🔗", "⚕️", "🌐"],
  },
};

const dashboardRoutes = {
  patient: "/patient-dashboard",
  doctor: "/doctor-dashboard",
  healthworker: "/health-worker-dashboard",
  pharmacy: "/pharmacy-dashboard",
  admin: "/admin-dashboard",
};

function App() {
  const [selectedRole, setSelectedRole] = useState("patient");
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    specialId: "",
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);

  const [modal, setModal] = useState(null);

  const [forgotEmail, setForgotEmail] = useState("");

  const [signupData, setSignupData] = useState({
    role: "patient",
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    specialId: "",
  });

  const currentRole = roleConfig[selectedRole];

  const handleRoleChange = (role) => {
    setSelectedRole(role);

    setLoginData((prev) => ({
      ...prev,
      specialId: "",
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginData.email.trim()) {
      alert("Please enter your email or mobile number.");
      return;
    }

    if (!loginData.password.trim()) {
      alert("Please enter your password.");
      return;
    }

    if (
      selectedRole !== "patient" &&
      !loginData.specialId.trim()
    ) {
      alert(`Please enter your ${currentRole.idLabel}.`);
      return;
    }
<Route
  path="/healthworker"
  element={<HealthWorkerLayout />}
>
  <Route
    index
    element={<HealthWorkerDashboard />}
  />

  <Route
    path="register-patient"
    element={<RegisterPatient />}
  />

  <Route
    path="assessment"
    element={<Assessment />}
  />

  <Route
    path="patients"
    element={<HealthWorkerPatients />}
  />

  <Route
    path="referrals"
    element={<HealthWorkerReferrals />}
  />

  <Route
    path="follow-ups"
    element={<FollowUps />}
  />

  <Route
    path="offline"
    element={<OfflineMode />}
  />
</Route>
    /*
      Firebase Authentication will be connected here later.

      Example flow:

      1. Firebase Auth verifies email/password.
      2. Firestore verifies the selected role.
      3. Firestore verifies the role-specific ID.
      4. User is redirected to the correct dashboard.
    */

    alert(
      `Login UI validated successfully.\n\nRole: ${currentRole.label}\nDashboard: ${dashboardRoutes[selectedRole]}`
    );
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!forgotEmail.trim()) {
      alert("Please enter your email address.");
      return;
    }

    alert(
      `Password reset link will be sent to ${forgotEmail} after Firebase Authentication is connected.`
    );

    setForgotEmail("");
    setModal(null);
  };

  const handleSignupRoleChange = (role) => {
    setSignupData((prev) => ({
      ...prev,
      role,
      specialId: "",
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;

    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!signupData.name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!signupData.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!signupData.mobile.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    if (!signupData.password.trim()) {
      alert("Please create a password.");
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (
      signupData.role !== "patient" &&
      !signupData.specialId.trim()
    ) {
      alert(
        `Please enter your ${roleConfig[signupData.role].idLabel}.`
      );
      return;
    }

    alert(
      `Registration UI validated successfully for ${roleConfig[signupData.role].label}.\n\nFirebase registration will be connected next.`
    );

    setModal(null);
  };

  return (
   
  
  <div className={`app role-${selectedRole}`}>

    {/* ROLE-SPECIFIC BACKGROUND */}
    <div className="role-background">

      <div className="medical-pattern">

        <span className="pattern-icon icon-1">
          {currentRole.backgroundIcons[0]}
        </span>

        <span className="pattern-icon icon-2">
          {currentRole.backgroundIcons[1]}
        </span>

        <span className="pattern-icon icon-3">
          {currentRole.backgroundIcons[2]}
        </span>

        <span className="pattern-icon icon-4">
          {currentRole.backgroundIcons[3]}
        </span>

        <span className="pattern-icon icon-5">
          {currentRole.backgroundIcons[4]}
        </span>

        <span className="pattern-icon icon-6">
          {currentRole.backgroundIcons[5]}
        </span>

      </div>

      <div className="role-watermark">
        {currentRole.watermark}
      </div>

    </div>
      <div className="background">
        <div className="gradient-blob blob-one"></div>
        <div className="gradient-blob blob-two"></div>
        <div className="gradient-blob blob-three"></div>

        <div className="floating-card floating-one">
          <span>🩺</span>
        </div>

        <div className="floating-card floating-two">
          <span>❤️</span>
        </div>

        <div className="floating-card floating-three">
          <span>💊</span>
        </div>

        <div className="floating-card floating-four">
          <span>🏥</span>
        </div>
      </div>

      <main className="page-container">
        <div className="login-wrapper">

          {/* ================= LEFT BRAND PANEL ================= */}
          <section className="brand-panel">

            <div className="brand-top">
              <div className="brand-logo">
                <div className="logo-icon">
                  ✚
                </div>

                <div>
                  <h1>ByteClub</h1>
                  <span>HEALTH</span>
                </div>
              </div>

              <div className="secure-badge">
                <span className="secure-dot"></span>
                Secure Healthcare Network
              </div>
            </div>

            <div className="brand-content">
              <div className="small-label">
                <span></span>
                CONNECTED HEALTHCARE
              </div>

              <h2>
                Healthcare
                <br />
                <strong>without boundaries.</strong>
              </h2>

              <p>
                Connect patients, health workers, doctors,
                pharmacies and healthcare facilities through
                one intelligent healthcare network.
              </p>

              <div className="brand-features">

                <div className="feature-item">
                  <div className="feature-icon">
                    🚑
                  </div>

                  <div>
                    <strong>Emergency Referral</strong>
                    <span>
                      Connect patients to the right facility
                    </span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    🧾
                  </div>

                  <div>
                    <strong>Digital Health Records</strong>
                    <span>
                      Keep the patient's information connected
                    </span>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    🌐
                  </div>

                  <div>
                    <strong>Rural Care Network</strong>
                    <span>
                      Designed for underserved communities
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="brand-bottom">
              <div className="network-status">
                <span className="status-dot"></span>
                <span>Healthcare network operational</span>
              </div>

              <span className="version">
                v1.0 • Smart Healthcare Platform
              </span>
            </div>

          </section>

          {/* ================= RIGHT LOGIN PANEL ================= */}
          <section className="form-panel">

            <div className="form-header">
              <div>
                <div className="welcome-label">
                  SECURE ACCESS
                </div>

                <h2>
                  Welcome back <span>👋</span>
                </h2>

                <p>
                  Select your role to continue to your
                  healthcare workspace.
                </p>
              </div>

              <div className="header-shield">
                🔐
              </div>
            </div>

            {/* ================= ROLE SELECTOR ================= */}
            <div className="role-section">

              <label className="section-label">
                LOGIN AS
              </label>

              <div className="roles-grid">

                {Object.entries(roleConfig).map(
                  ([key, role]) => (
                    <button
                      key={key}
                      type="button"
                      className={`role-card ${
                        selectedRole === key
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        handleRoleChange(key)
                      }
                    >
                      <div className="role-icon">
                        {role.icon}
                      </div>

                      <div className="role-info">
                        <strong>{role.label}</strong>

                        <span>
                          {role.description}
                        </span>
                      </div>

                      {selectedRole === key && (
                        <div className="selected-check">
                          ✓
                        </div>
                      )}
                    </button>
                  )
                )}

              </div>
            </div>

            {/* ================= LOGIN FORM ================= */}
            <form
              className="login-form"
              onSubmit={handleLogin}
            >

              {/* Special ID */}
              {selectedRole !== "patient" && (
                <div className="input-group special-id-animation">

                  <label>
                    {currentRole.idLabel}
                  </label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      {selectedRole === "doctor"
                        ? "🪪"
                        : selectedRole === "healthworker"
                        ? "🆔"
                        : selectedRole === "pharmacy"
                        ? "📋"
                        : "🔑"}
                    </span>

                    <input
                      type="text"
                      name="specialId"
                      value={loginData.specialId}
                      onChange={handleLoginChange}
                      placeholder={
                        currentRole.idPlaceholder
                      }
                    />

                  </div>

                  <small className="field-hint">
                    {selectedRole === "doctor" &&
                      "Use your valid medical registration number."}

                    {selectedRole === "healthworker" &&
                      "Use the ID issued to your health worker account."}

                    {selectedRole === "pharmacy" &&
                      "Use your pharmacy / drug licence number."}

                    {selectedRole === "admin" &&
                      "Use your authorized administrator access code."}
                  </small>

                </div>
              )}

              {/* Email */}
              <div className="input-group">

                <label>
                  Email or Mobile Number
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    ✉️
                  </span>

                  <input
                    type="text"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    placeholder="Enter email or mobile number"
                    autoComplete="username"
                  />

                </div>

              </div>

              {/* Password */}
              <div className="input-group">

                <div className="label-row">
                  <label>Password</label>

                  <button
                    type="button"
                    className="forgot-inline"
                    onClick={() =>
                      setModal("forgot")
                    }
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="input-wrapper">

                  <span className="input-icon">
                    🔒
                  </span>

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>

                </div>

              </div>

              {/* Remember */}
              <div className="form-options">

                <label className="remember">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(
                        e.target.checked
                      )
                    }
                  />

                  <span className="custom-checkbox">
                    {rememberMe && "✓"}
                  </span>

                  <span>
                    Remember me
                  </span>

                </label>

                <div className="role-access">
                  {currentRole.icon}{" "}
                  {currentRole.label} access
                </div>

              </div>

              {/* Login button */}
              <button
                type="submit"
                className="login-button"
              >
                <span>
                  Secure Login
                </span>

                <span className="button-arrow">
                  →
                </span>
              </button>

            </form>

            {/* Divider */}
            <div className="divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>

            {/* Signup */}
            <div className="signup-area">

              <span>
                New to ByteClub Health?
              </span>

              <button
                type="button"
                onClick={() =>
                  setModal("signup")
                }
              >
                Create an account
                <span> →</span>
              </button>

            </div>

            {/* Security */}
            <div className="security-note">
              <div className="security-icon">
                🛡️
              </div>

              <div>
                <strong>
                  Your healthcare information is protected
                </strong>

                <span>
                  Secure authentication • Role-based access
                  • Privacy-focused healthcare platform
                </span>
              </div>
            </div>

          </section>

        </div>
      </main>

      {/* ================= FORGOT PASSWORD MODAL ================= */}
      {modal === "forgot" && (
        <div
          className="modal-overlay"
          onClick={() => setModal(null)}
        >
          <div
            className="modal-card"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setModal(null)
              }
            >
              ×
            </button>

            <div className="modal-icon">
              🔐
            </div>

            <h2>Reset your password</h2>

            <p>
              Enter the email address associated with
              your account and we'll send you a password
              reset link.
            </p>

            <form
              onSubmit={handleForgotPassword}
            >

              <div className="input-group">

                <label>
                  Email Address
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    ✉️
                  </span>

                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) =>
                      setForgotEmail(
                        e.target.value
                      )
                    }
                    placeholder="you@example.com"
                  />

                </div>

              </div>

              <button
                type="submit"
                className="modal-primary-button"
              >
                Send Reset Link →
              </button>

            </form>

          </div>
        </div>
      )}

      {/* ================= SIGNUP MODAL ================= */}
      {modal === "signup" && (
        <div
          className="modal-overlay"
          onClick={() => setModal(null)}
        >
          <div
            className="modal-card signup-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setModal(null)
              }
            >
              ×
            </button>

            <div className="modal-icon">
              ✨
            </div>

            <h2>Create your account</h2>

            <p>
              Register for the ByteClub Health network.
            </p>

            {/* Signup role */}
            <div className="signup-role-grid">

              {Object.entries(roleConfig).map(
                ([key, role]) => (
                  <button
                    key={key}
                    type="button"
                    className={`signup-role ${
                      signupData.role === key
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handleSignupRoleChange(key)
                    }
                  >
                    <span>{role.icon}</span>
                    <small>{role.label}</small>
                  </button>
                )
              )}

            </div>

            <form onSubmit={handleSignup}>

              <div className="two-column">

                <div className="input-group">

                  <label>
                    Full Name
                  </label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      👤
                    </span>

                    <input
                      type="text"
                      name="name"
                      value={signupData.name}
                      onChange={
                        handleSignupChange
                      }
                      placeholder="Your full name"
                    />

                  </div>

                </div>

                <div className="input-group">

                  <label>
                    Mobile Number
                  </label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      📱
                    </span>

                    <input
                      type="tel"
                      name="mobile"
                      value={signupData.mobile}
                      onChange={
                        handleSignupChange
                      }
                      placeholder="+91 XXXXX XXXXX"
                    />

                  </div>

                </div>

              </div>

              <div className="input-group">

                <label>
                  Email Address
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    ✉️
                  </span>

                  <input
                    type="email"
                    name="email"
                    value={signupData.email}
                    onChange={
                      handleSignupChange
                    }
                    placeholder="you@example.com"
                  />

                </div>

              </div>

              {/* Role-specific ID */}
              {signupData.role !== "patient" && (
                <div className="input-group">

                  <label>
                    {
                      roleConfig[
                        signupData.role
                      ].idLabel
                    }
                  </label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      🪪
                    </span>

                    <input
                      type="text"
                      name="specialId"
                      value={
                        signupData.specialId
                      }
                      onChange={
                        handleSignupChange
                      }
                      placeholder={
                        roleConfig[
                          signupData.role
                        ].idPlaceholder
                      }
                    />

                  </div>

                  <small className="field-hint">
                    Enter your valid professional
                    identification number.
                  </small>

                </div>
              )}

              <div className="two-column">

                <div className="input-group">

                  <label>
                    Password
                  </label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      🔒
                    </span>

                    <input
                      type="password"
                      name="password"
                      value={
                        signupData.password
                      }
                      onChange={
                        handleSignupChange
                      }
                      placeholder="Create password"
                    />

                  </div>

                </div>

                <div className="input-group">

                  <label>
                    Confirm Password
                  </label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      🔒
                    </span>

                    <input
                      type="password"
                      name="confirmPassword"
                      value={
                        signupData.confirmPassword
                      }
                      onChange={
                        handleSignupChange
                      }
                      placeholder="Confirm password"
                    />

                  </div>

                </div>

              </div>

              <button
                type="submit"
                className="modal-primary-button"
              >
                Create Account →
              </button>

            </form>

            <div className="signup-security">
              🛡️ Professional roles may require
              verification before account activation.
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default App;
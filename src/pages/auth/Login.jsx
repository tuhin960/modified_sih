import React, { useState } from "react";

const roles = [
  {
    id: "patient",
    name: "Patient",
    subtitle: "PATIENT CARE",
    icon: "❤️",
    specialLabel: "Patient ID",
    placeholder: "Enter Patient ID",
  },
  {
    id: "doctor",
    name: "Doctor",
    subtitle: "MEDICAL CARE",
    icon: "🩺",
    specialLabel: "Registration No.",
    placeholder: "Enter Registration No.",
  },
  {
    id: "healthworker",
    name: "Health Worker",
    subtitle: "COMMUNITY HEALTH",
    icon: "🧑‍⚕️",
    specialLabel: "Worker ID",
    placeholder: "Enter Worker ID",
  },
  {
    id: "facility",
    name: "Facility",
    subtitle: "HEALTHCARE FACILITY",
    icon: "🏥",
    specialLabel: "Facility ID",
    placeholder: "Enter Facility ID",
  },
  {
    id: "admin",
    name: "Admin",
    subtitle: "HEALTHCARE NETWORK",
    icon: "🛡️",
    specialLabel: "Admin ID",
    placeholder: "Enter Admin ID",
  },
];

export default function Login({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialId, setSpecialId] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const currentRole = roles.find((role) => role.id === selectedRole);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setSpecialId("");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password || !specialId) {
      setError("Please fill in all required fields.");
      return;
    }

    /*
      Firebase Authentication will be connected here later.

      For now this only sends the selected login information
      to the parent component.
    */

    if (onLogin) {
      onLogin({
        role: selectedRole,
        email,
        specialId,
        rememberMe,
      });
    }
  };

  return (
    <div className={`login-page role-${selectedRole}`}>

      {/* Background */}
      <div className="login-background">
        <div className="background-circle circle-one"></div>
        <div className="background-circle circle-two"></div>
        <div className="background-circle circle-three"></div>
      </div>

      {/* Main Login Container */}
      <div className="login-wrapper">

        {/* Left Side */}
        <div className="login-brand">

          <div className="brand-logo">
            <span>✚</span>
          </div>

          <span className="brand-kicker">
            RURAL HEALTHCARE NETWORK
          </span>

          <h1>
            Swasth
            <span> Setu</span>
          </h1>

          <p className="brand-description">
            Connecting patients, healthcare workers, doctors and
            healthcare facilities for continuous and coordinated care.
          </p>

          <div className="brand-features">

            <div className="brand-feature">
              <span>🏥</span>
              <div>
                <strong>Connected Care</strong>
                <p>Continuity across healthcare facilities.</p>
              </div>
            </div>

            <div className="brand-feature">
              <span>🚑</span>
              <div>
                <strong>Smart Referrals</strong>
                <p>Better coordination during emergency transfers.</p>
              </div>
            </div>

            <div className="brand-feature">
              <span>📋</span>
              <div>
                <strong>Digital Health Records</strong>
                <p>Important patient information stays connected.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="login-card">

          <div className="login-header">

            <span className="page-kicker">
              SECURE ACCESS
            </span>

            <h2>Welcome Back</h2>

            <p>
              Select your role and sign in to continue.
            </p>

          </div>

          {/* Role Selection */}
          <div className="role-section">

            <label className="field-label">
              Login As
            </label>

            <div className="role-grid">

              {roles.map((role) => (

                <button
                  type="button"
                  key={role.id}
                  className={`role-card ${
                    selectedRole === role.id ? "selected" : ""
                  }`}
                  onClick={() => handleRoleChange(role.id)}
                >

                  <span className="role-icon">
                    {role.icon}
                  </span>

                  <span className="role-name">
                    {role.name}
                  </span>

                  <span className="role-subtitle">
                    {role.subtitle}
                  </span>

                </button>

              ))}

            </div>

          </div>

          <form onSubmit={handleSubmit}>

            {/* Special ID */}
            <div className="form-group">

              <label>
                {currentRole.specialLabel}
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  🪪
                </span>

                <input
                  type="text"
                  value={specialId}
                  onChange={(e) => setSpecialId(e.target.value)}
                  placeholder={currentRole.placeholder}
                />

              </div>

            </div>

            {/* Email */}
            <div className="form-group">

              <label>
                Email / Mobile
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ✉️
                </span>

                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email or mobile number"
                />

              </div>

            </div>

            {/* Password */}
            <div className="form-group">

              <label>
                Password
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  🔒
                </span>

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>

            {/* Error */}
            {error && (
              <div className="login-error">
                ⚠️ {error}
              </div>
            )}

            {/* Remember + Forgot */}
            <div className="login-options">

              <label className="remember-option">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />

                <span>Remember me</span>

              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  alert("Password recovery will be connected with Firebase later.")
                }
              >
                Forgot password?
              </button>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="login-button"
            >
              <span>Sign In</span>
              <span>→</span>
            </button>

          </form>

          {/* Security Notice */}
          <div className="security-note">
            <span>🔐</span>

            <div>
              <strong>Secure Healthcare Access</strong>
              <p>
                Your account and healthcare information are protected.
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className="login-footer">
        Swasth Setu • Rural Care Continuity & Emergency Referral Network
      </div>

    </div>
  );
}
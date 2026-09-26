const timeline = [
  {
    date: "24 Sep 2026",
    title: "Health Worker Assessment",
    description: "Vitals and symptoms recorded at rural facility.",
    icon: "🧑‍⚕️",
  },
  {
    date: "20 Sep 2026",
    title: "Previous Consultation",
    description: "Hypertension follow-up consultation.",
    icon: "🩺",
  },
  {
    date: "12 Sep 2026",
    title: "Prescription Updated",
    description: "Current medicines reviewed.",
    icon: "💊",
  },
];

export default function Patient360({ onNavigate }) {
  return (
    <div className="doctor-page">
      <div className="doctor-page-heading">
        <div>
          <span className="doctor-section-label">UNIFIED PATIENT VIEW</span>
          <h1>Patient 360°</h1>
          <p>Complete clinical context in one screen.</p>
        </div>

        <button
          className="doctor-primary-btn"
          onClick={() => onNavigate("consultation")}
        >
          🩺 Start Consultation
        </button>
      </div>

      <section className="patient-profile-card">
        <div className="patient-profile-main">
          <div className="patient-profile-avatar">R</div>

          <div>
            <span className="profile-label">PATIENT</span>
            <h2>Rahul Das</h2>
            <p>54 years • Male • PT-10024</p>
            <span className="risk-chip high">HIGH RISK</span>
          </div>
        </div>

        <div className="patient-profile-actions">
          <button onClick={() => onNavigate("prescriptions")}>
            💊 Prescription
          </button>

          <button onClick={() => onNavigate("referrals")}>
            🔄 Referral
          </button>
        </div>
      </section>

      <div className="patient360-grid">
        <section className="doctor-panel">
          <div className="doctor-panel-header">
            <h2>Demographics</h2>
          </div>

          <div className="info-grid">
            <div>
              <span>Age</span>
              <strong>54 years</strong>
            </div>

            <div>
              <span>Gender</span>
              <strong>Male</strong>
            </div>

            <div>
              <span>Blood Group</span>
              <strong>B+</strong>
            </div>

            <div>
              <span>Village</span>
              <strong>Udaynarayanpur</strong>
            </div>

            <div>
              <span>Contact</span>
              <strong>+91 XXXXX XXXXX</strong>
            </div>

            <div>
              <span>Emergency Contact</span>
              <strong>Available</strong>
            </div>
          </div>
        </section>

        <section className="doctor-panel">
          <div className="doctor-panel-header">
            <h2>Allergies & Conditions</h2>
          </div>

          <div className="condition-list">
            <div className="condition-item">
              <span>Existing Condition</span>
              <strong>Hypertension</strong>
            </div>

            <div className="condition-item">
              <span>Allergies</span>
              <strong>None recorded</strong>
            </div>

            <div className="condition-item">
              <span>Risk Indicator</span>
              <strong className="text-danger">High</strong>
            </div>
          </div>
        </section>

        <section className="doctor-panel">
          <div className="doctor-panel-header">
            <h2>Latest Vitals</h2>
            <span>24 Sep 2026</span>
          </div>

          <div className="vitals-grid">
            <div>
              <span>Blood Pressure</span>
              <strong>158/94</strong>
              <small>mmHg</small>
            </div>

            <div>
              <span>Pulse</span>
              <strong>102</strong>
              <small>bpm</small>
            </div>

            <div>
              <span>SpO₂</span>
              <strong>95</strong>
              <small>%</small>
            </div>

            <div>
              <span>Temperature</span>
              <strong>37.4</strong>
              <small>°C</small>
            </div>
          </div>
        </section>

        <section className="doctor-panel">
          <div className="doctor-panel-header">
            <h2>Current Symptoms</h2>
          </div>

          <div className="symptom-tags">
            <span>Breathing difficulty</span>
            <span>Fatigue</span>
            <span>Chest discomfort</span>
          </div>
        </section>

        <section className="doctor-panel wide">
          <div className="doctor-panel-header">
            <h2>Current Medicines</h2>
            <button onClick={() => onNavigate("prescriptions")}>
              Manage →
            </button>
          </div>

          <div className="medicine-list">
            <div>
              <strong>Amlodipine</strong>
              <span>5 mg • Once daily</span>
            </div>

            <div>
              <strong>Metformin</strong>
              <span>500 mg • Twice daily</span>
            </div>

            <div>
              <strong>Losartan</strong>
              <span>50 mg • Once daily</span>
            </div>
          </div>
        </section>

        <section className="doctor-panel wide">
          <div className="doctor-panel-header">
            <h2>Care Timeline</h2>
          </div>

          <div className="care-timeline">
            {timeline.map((event) => (
              <div className="timeline-item" key={event.title}>
                <div className="timeline-icon">{event.icon}</div>

                <div>
                  <span>{event.date}</span>
                  <strong>{event.title}</strong>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
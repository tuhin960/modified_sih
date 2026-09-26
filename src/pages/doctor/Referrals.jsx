import { useState } from "react";

const facilities = [
  {
    name: "District Hospital",
    distance: "18 km",
    specialty: "Pulmonology",
    capability: "Ventilator",
    resources: "Available",
    freshness: "Fresh",
  },
  {
    name: "Sub-Divisional Hospital",
    distance: "11 km",
    specialty: "General Medicine",
    capability: "Oxygen Support",
    resources: "Available",
    freshness: "Fresh",
  },
  {
    name: "Rural Hospital",
    distance: "6 km",
    specialty: "General Medicine",
    capability: "Basic Emergency",
    resources: "Limited",
    freshness: "Stale",
  },
];

export default function Referrals() {
  const [form, setForm] = useState({
    reason: "",
    urgency: "HIGH",
    specialty: "",
    capability: "",
  });

  const [selectedFacility, setSelectedFacility] = useState(null);
  const [created, setCreated] = useState(false);

  const createReferral = () => {
    if (!selectedFacility || !form.reason) {
      alert("Select a facility and enter referral reason.");
      return;
    }

    const referral = {
      id: `REF-${Date.now()}`,
      patient: "Rahul Das",
      doctor: "Current Doctor",
      ...form,
      destination: selectedFacility.name,
      createdAt: new Date().toISOString(),
      status: "CREATED",
    };

    localStorage.setItem(
      "doctor_latest_referral",
      JSON.stringify(referral)
    );

    setCreated(true);
  };

  return (
    <div className="doctor-page">
      <div className="doctor-page-heading">
        <div>
          <span className="doctor-section-label">
            CLINICAL REFERRAL NETWORK
          </span>
          <h1>Smart Referral</h1>
          <p>
            Compare explainable facility options before making the
            clinical referral decision.
          </p>
        </div>
      </div>

      <div className="referral-builder">
        <section className="doctor-panel">
          <div className="doctor-panel-header">
            <div>
              <span className="doctor-section-label">STEP 1</span>
              <h2>Referral Requirements</h2>
            </div>
          </div>

          <div className="clinical-form">
            <label>
              Referral Reason
              <textarea
                value={form.reason}
                onChange={(e) =>
                  setForm({
                    ...form,
                    reason: e.target.value,
                  })
                }
                placeholder="Explain why the patient needs referral..."
              />
            </label>

            <label>
              Urgency
              <select
                value={form.urgency}
                onChange={(e) =>
                  setForm({
                    ...form,
                    urgency: e.target.value,
                  })
                }
              >
                <option>LOW</option>
                <option>MEDIUM</option>
                <option>HIGH</option>
                <option>EMERGENCY</option>
              </select>
            </label>

            <label>
              Required Specialty
              <select
                value={form.specialty}
                onChange={(e) =>
                  setForm({
                    ...form,
                    specialty: e.target.value,
                  })
                }
              >
                <option value="">Select specialty</option>
                <option>General Medicine</option>
                <option>Pulmonology</option>
                <option>Cardiology</option>
                <option>Pediatrics</option>
                <option>Gynecology</option>
                <option>Surgery</option>
              </select>
            </label>

            <label>
              Required Capability
              <select
                value={form.capability}
                onChange={(e) =>
                  setForm({
                    ...form,
                    capability: e.target.value,
                  })
                }
              >
                <option value="">Select capability</option>
                <option>Oxygen Support</option>
                <option>Ventilator</option>
                <option>ICU</option>
                <option>Emergency Surgery</option>
                <option>Blood Bank</option>
                <option>Diagnostic Imaging</option>
              </select>
            </label>
          </div>
        </section>

        <section className="doctor-panel">
          <div className="doctor-panel-header">
            <div>
              <span className="doctor-section-label">STEP 2</span>
              <h2>Candidate Facilities</h2>
            </div>
          </div>

          <div className="facility-list">
            {facilities.map((facility) => {
              const selected =
                selectedFacility?.name === facility.name;

              return (
                <button
                  key={facility.name}
                  className={`facility-option ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() => setSelectedFacility(facility)}
                >
                  <div className="facility-icon">🏥</div>

                  <div className="facility-main">
                    <strong>{facility.name}</strong>

                    <span>
                      {facility.specialty} •{" "}
                      {facility.capability}
                    </span>

                    <small>
                      📍 {facility.distance} • Resource:{" "}
                      {facility.resources}
                    </small>
                  </div>

                  <div className="facility-status">
                    <span
                      className={`freshness ${facility.freshness.toLowerCase()}`}
                    >
                      {facility.freshness}
                    </span>

                    <span>
                      {selected ? "✓ Selected" : "Select"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="explainability-box">
            <strong>Why these facilities?</strong>

            <p>
              Candidate options are evaluated using specialty,
              required capability, resource availability, distance
              and resource-data freshness.
            </p>

            <small>
              This system provides decision-support only. The doctor
              makes the final clinical referral decision.
            </small>
          </div>
        </section>
      </div>

      <section className="doctor-panel referral-packet-panel">
        <div className="doctor-panel-header">
          <div>
            <span className="doctor-section-label">STEP 3</span>
            <h2>Digital Referral Packet</h2>
          </div>
        </div>

        <div className="packet-grid">
          <span>✓ Patient Information</span>
          <span>✓ Current Vitals</span>
          <span>✓ Symptoms</span>
          <span>✓ Medical History</span>
          <span>✓ Reports</span>
          <span>✓ Current Medicines</span>
          <span>✓ Doctor Notes</span>
          <span>✓ Referral Reason</span>
        </div>

        <button className="doctor-primary-btn" onClick={createReferral}>
          Create Referral →
        </button>

        {created && (
          <div className="success-message">
            ✓ Referral created successfully and packet prepared.
          </div>
        )}
      </section>
    </div>
  );
}
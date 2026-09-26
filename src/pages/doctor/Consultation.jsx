import { useState } from "react";

export default function Consultation({ onNavigate }) {
  const [form, setForm] = useState({
    symptoms: "",
    vitals: "",
    reports: "",
    notes: "",
    decision: "",
  });

  const [saved, setSaved] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveConsultation = () => {
    localStorage.setItem(
      "doctor_current_consultation",
      JSON.stringify({
        patient: "Rahul Das",
        ...form,
        updatedAt: new Date().toISOString(),
      })
    );

    setSaved(true);
  };

  return (
    <div className="doctor-page">
      <div className="consultation-header">
        <div>
          <span className="doctor-section-label">ACTIVE CONSULTATION</span>
          <h1>Clinical Consultation</h1>
          <p>Record the current patient encounter.</p>
        </div>

        <div className="consultation-patient">
          <div className="doctor-avatar large">R</div>

          <div>
            <strong>Rahul Das</strong>
            <span>54 years • Male • Patient ID: PT-10024</span>
          </div>
        </div>
      </div>

      <div className="consultation-stepper">
        {[
          "Patient",
          "Symptoms",
          "Vitals",
          "Reports",
          "Clinical Notes",
          "Decision",
        ].map((step, index) => (
          <div className="consultation-step" key={step}>
            <span>{index + 1}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>

      <div className="consultation-grid">
        <section className="doctor-panel">
          <div className="doctor-panel-header">
            <div>
              <span className="doctor-section-label">PATIENT CONTEXT</span>
              <h2>Clinical Information</h2>
            </div>
          </div>

          <div className="clinical-summary">
            <div>
              <span>Blood Group</span>
              <strong>B+</strong>
            </div>

            <div>
              <span>Allergies</span>
              <strong>None recorded</strong>
            </div>

            <div>
              <span>Existing Conditions</span>
              <strong>Hypertension</strong>
            </div>

            <div>
              <span>Last Consultation</span>
              <strong>12 Sep 2026</strong>
            </div>
          </div>

          <div className="clinical-form">
            <label>
              Current Symptoms
              <textarea
                value={form.symptoms}
                onChange={(e) =>
                  updateField("symptoms", e.target.value)
                }
                placeholder="Describe patient's current symptoms..."
              />
            </label>

            <label>
              Vitals
              <textarea
                value={form.vitals}
                onChange={(e) => updateField("vitals", e.target.value)}
                placeholder="BP, pulse, temperature, SpO2..."
              />
            </label>

            <label>
              Reports / Investigations
              <textarea
                value={form.reports}
                onChange={(e) => updateField("reports", e.target.value)}
                placeholder="Add relevant report findings..."
              />
            </label>

            <label>
              Clinical Notes
              <textarea
                value={form.notes}
                onChange={(e) => updateField("notes", e.target.value)}
                placeholder="Enter consultation notes..."
              />
            </label>

            <label>
              Clinical Decision
              <textarea
                value={form.decision}
                onChange={(e) =>
                  updateField("decision", e.target.value)
                }
                placeholder="Document the clinical decision..."
              />
            </label>
          </div>

          {saved && (
            <div className="success-message">
              ✓ Consultation saved locally.
            </div>
          )}

          <div className="consultation-actions">
            <button className="secondary-btn" onClick={saveConsultation}>
              Save Consultation
            </button>

            <button
              className="primary-btn"
              onClick={() => onNavigate("prescriptions")}
            >
              Continue to Prescription →
            </button>

            <button
              className="referral-btn"
              onClick={() => onNavigate("referrals")}
            >
              Create Referral
            </button>
          </div>
        </section>

        <aside className="doctor-panel quick-clinical-panel">
          <span className="doctor-section-label">PATIENT 360°</span>
          <h2>Quick View</h2>

          <button
            className="patient360-button"
            onClick={() => onNavigate("patient360")}
          >
            Open full Patient 360° →
          </button>

          <div className="quick-history">
            <div>
              <span>Previous consultations</span>
              <strong>4</strong>
            </div>

            <div>
              <span>Previous referrals</span>
              <strong>2</strong>
            </div>

            <div>
              <span>Current medicines</span>
              <strong>3</strong>
            </div>

            <div>
              <span>Pending follow-ups</span>
              <strong>1</strong>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
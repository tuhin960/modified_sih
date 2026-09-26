import React, { useState } from "react";

const symptoms = [
  "Fever",
  "Breathing difficulty",
  "Chest pain",
  "Severe weakness",
  "Persistent vomiting",
  "Severe bleeding",
  "Loss of consciousness",
  "Severe abdominal pain"
];

export default function Assessment() {
  const [selectedSymptoms, setSelectedSymptoms] =
    useState([]);

  const [redFlags, setRedFlags] = useState([]);

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((current) =>
      current.includes(symptom)
        ? current.filter((item) => item !== symptom)
        : [...current, symptom]
    );
  };

  const toggleRedFlag = (flag) => {
    setRedFlags((current) =>
      current.includes(flag)
        ? current.filter((item) => item !== flag)
        : [...current, flag]
    );
  };

  const hasRedFlag = redFlags.length > 0;

  return (
    <div className="hw-page">

      <div className="hw-page-header">

        <div>
          <span className="hw-kicker">
            DECISION SUPPORT
          </span>

          <h2>Patient Assessment</h2>

          <p>
            Record observations and identify priority
            for doctor review.
          </p>
        </div>

        <div className="hw-support-note">
          ⚕ Decision support — not a diagnosis
        </div>

      </div>

      <section className="hw-assessment-patient">

        <div className="hw-patient-avatar-large">
          RD
        </div>

        <div>
          <span>Selected Patient</span>

          <h3>
            Ramesh Das
          </h3>

          <p>
            Patient ID: PT-1038 • Age 67 • Male
          </p>
        </div>

        <button className="hw-outline-btn">
          Change Patient
        </button>

      </section>

      <div className="hw-assessment-grid">

        <section className="hw-form-card">

          <div className="hw-form-section-title">

            <div className="hw-form-number">
              01
            </div>

            <div>
              <h3>Symptoms</h3>
              <p>
                Select symptoms observed or reported
              </p>
            </div>

          </div>

          <div className="hw-symptom-grid">

            {symptoms.map((symptom) => (

              <button
                type="button"
                key={symptom}
                className={
                  selectedSymptoms.includes(symptom)
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  toggleSymptom(symptom)
                }
              >
                <span>
                  {selectedSymptoms.includes(symptom)
                    ? "✓"
                    : "+"}
                </span>

                {symptom}
              </button>

            ))}

          </div>

        </section>

        <section className="hw-form-card">

          <div className="hw-form-section-title">

            <div className="hw-form-number">
              02
            </div>

            <div>
              <h3>Vitals</h3>
              <p>
                Enter measured values
              </p>
            </div>

          </div>

          <div className="hw-vitals-form">

            <div className="hw-form-group">
              <label>Blood Pressure</label>
              <input
                placeholder="120/80"
              />
              <small>mmHg</small>
            </div>

            <div className="hw-form-group">
              <label>Heart Rate</label>
              <input
                placeholder="72"
              />
              <small>BPM</small>
            </div>

            <div className="hw-form-group">
              <label>Temperature</label>
              <input
                placeholder="98.6"
              />
              <small>°F</small>
            </div>

            <div className="hw-form-group">
              <label>SpO₂</label>
              <input
                placeholder="98"
              />
              <small>%</small>
            </div>

          </div>

        </section>

      </div>

      <section className="hw-form-card">

        <div className="hw-form-section-title">

          <div className="hw-form-number">
            03
          </div>

          <div>
            <h3>Red-Flag Symptoms</h3>
            <p>
              Identify signs requiring urgent attention
            </p>
          </div>

        </div>

        <div className="hw-redflag-grid">

          {[
            "Severe breathing difficulty",
            "Severe chest pain",
            "Unconscious / altered consciousness",
            "Severe bleeding",
            "Convulsions",
            "Severe allergic reaction"
          ].map((flag) => (

            <button
              type="button"
              key={flag}
              className={
                redFlags.includes(flag)
                  ? "selected"
                  : ""
              }
              onClick={() =>
                toggleRedFlag(flag)
              }
            >
              <span>
                {redFlags.includes(flag)
                  ? "✓"
                  : "!"}
              </span>

              {flag}
            </button>

          ))}

        </div>

      </section>

      <section className="hw-decision-card">

        <div className="hw-decision-icon">
          {hasRedFlag ? "⚠️" : "🩺"}
        </div>

        <div className="hw-decision-content">

          <span>
            DECISION-SUPPORT FLAG
          </span>

          <h3>
            {hasRedFlag
              ? "URGENT ATTENTION"
              : selectedSymptoms.length > 0
              ? "DOCTOR REVIEW"
              : "LOW PRIORITY"}
          </h3>

          <p>
            {hasRedFlag
              ? "Red-flag observations have been recorded. Follow your emergency escalation protocol and seek immediate clinical review."
              : selectedSymptoms.length > 0
              ? "Symptoms have been recorded. The patient should be reviewed by an appropriate healthcare professional."
              : "No selected red-flag observation. Continue routine monitoring according to the care plan."}
          </p>

        </div>

        <div className="hw-decision-actions">

          <button className="hw-outline-btn">
            Save Assessment
          </button>

          <button className="hw-primary-btn">
            Send for Doctor Review
          </button>

        </div>

      </section>

    </div>
  );
}
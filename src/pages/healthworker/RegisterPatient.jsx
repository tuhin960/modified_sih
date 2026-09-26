import React, { useState } from "react";

export default function RegisterPatient() {
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("Marathi");

  return (
    <div className="hw-page">

      <div className="hw-page-header">

        <div>
          <span className="hw-kicker">
            PATIENT REGISTRATION
          </span>

          <h2>Register Patient</h2>

          <p>
            Create a basic patient record for your community.
          </p>
        </div>

        <div className="hw-offline-indicator">
          ● Online
        </div>

      </div>

      <section className="hw-form-card">

        <div className="hw-form-section-title">
          <div className="hw-form-number">
            01
          </div>

          <div>
            <h3>Basic Information</h3>
            <p>Patient identity and contact details</p>
          </div>
        </div>

        <div className="hw-form-grid">

          <div className="hw-form-group">
            <label>Full Name *</label>
            <input
              type="text"
              placeholder="Enter patient's full name"
            />
          </div>

          <div className="hw-form-group">
            <label>Age *</label>
            <input
              type="number"
              placeholder="Enter age"
            />
          </div>

          <div className="hw-form-group">

            <label>Gender *</label>

            <div className="hw-choice-row">

              {["Male", "Female", "Other"].map(
                (item) => (
                  <button
                    type="button"
                    key={item}
                    className={
                      gender === item
                        ? "selected"
                        : ""
                    }
                    onClick={() => setGender(item)}
                  >
                    {item}
                  </button>
                )
              )}

            </div>

          </div>

          <div className="hw-form-group">
            <label>Contact Number *</label>

            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className="hw-form-group">
            <label>Village / Area *</label>

            <input
              type="text"
              placeholder="Enter village name"
            />
          </div>

          <div className="hw-form-group">
            <label>Preferred Language</label>

            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value)
              }
            >
              <option>Marathi</option>
              <option>Hindi</option>
              <option>English</option>
              <option>Bengali</option>
            </select>

          </div>

        </div>

      </section>

      <section className="hw-form-card">

        <div className="hw-form-section-title">

          <div className="hw-form-number">
            02
          </div>

          <div>
            <h3>Basic Medical Information</h3>
            <p>
              Record known information only
            </p>
          </div>

        </div>

        <div className="hw-form-grid">

          <div className="hw-form-group">

            <label>Blood Group</label>

            <select>
              <option>Select blood group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
              <option>Unknown</option>
            </select>

          </div>

          <div className="hw-form-group">

            <label>Existing Conditions</label>

            <input
              type="text"
              placeholder="e.g. diabetes, hypertension"
            />

          </div>

          <div className="hw-form-group hw-full-field">

            <label>Current Medicines</label>

            <textarea
              rows="3"
              placeholder="Enter known medicines"
            />

          </div>

          <div className="hw-form-group hw-full-field">

            <label>Additional Notes</label>

            <textarea
              rows="3"
              placeholder="Any relevant information"
            />

          </div>

        </div>

      </section>

      <section className="hw-form-card hw-consent-card">

        <div className="hw-consent-check">

          <input type="checkbox" id="consent" />

          <label htmlFor="consent">
            I confirm that the information entered is
            provided by / verified with the patient to
            the best of my knowledge.
          </label>

        </div>

      </section>

      <div className="hw-form-actions">

        <button className="hw-outline-btn">
          Save as Draft
        </button>

        <button className="hw-primary-btn">
          Register Patient
        </button>

      </div>

    </div>
  );
}
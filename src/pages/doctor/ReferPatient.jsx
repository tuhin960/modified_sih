import React, { useState } from "react";
import FacilityMatchCard from "../../components/referral/FacilityMatchCard";

const ReferPatient = () => {

  const [urgency, setUrgency] = useState("HIGH");

  const facilities = [
    {
      id: "FAC-001",
      name: "District Care Facility",
      type: "District Hospital",
      location: "Pune District",
      distance: 8,
      availableBeds: 4,
      oxygen: true,
      emergencyAvailable: true,
      dataFreshness: "FRESH",
      matchReason:
        "Emergency care, oxygen and required capacity available.",
    },
    {
      id: "FAC-002",
      name: "Regional Medical Centre",
      type: "Specialist Facility",
      location: "Pune District",
      distance: 14,
      availableBeds: 7,
      oxygen: true,
      emergencyAvailable: true,
      dataFreshness: "STALE",
      matchReason:
        "Required specialty available, but resource data is stale.",
    },
  ];

  const handleSelectFacility = (facility) => {
    console.log("Selected facility:", facility);
  };

  return (
    <div className="page-container">

      <div className="page-header">

        <div>
          <span className="eyebrow">
            SMART REFERRAL
          </span>

          <h1>Refer Patient</h1>

          <p>
            Find a suitable facility using clinical and
            resource requirements.
          </p>
        </div>

      </div>

      <div className="referral-form-panel">

        <div className="patient-summary">

          <span>SELECTED PATIENT</span>

          <h2>Rahul Patil</h2>

          <p>
            Age 52 • Male • Patient ID PT-1024
          </p>

        </div>

        <div className="referral-fields">

          <label>
            Urgency

            <select
              value={urgency}
              onChange={(e) =>
                setUrgency(e.target.value)
              }
            >
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
              <option value="LOW">Low</option>
            </select>
          </label>

          <label>
            Required Specialty

            <select>
              <option>Emergency Medicine</option>
              <option>Cardiology</option>
              <option>General Medicine</option>
              <option>Critical Care</option>
            </select>
          </label>

          <label>
            Required Capability

            <select>
              <option>Emergency Care + Oxygen</option>
              <option>ICU</option>
              <option>Diagnostics</option>
              <option>Specialist Consultation</option>
            </select>
          </label>

        </div>

      </div>

      <div className="section-heading">

        <div>
          <span>SMART MATCHING</span>
          <h2>Recommended Facilities</h2>
        </div>

      </div>

      <div className="facility-match-grid">

        {facilities.map((facility) => (
          <FacilityMatchCard
            key={facility.id}
            facility={facility}
            onSelect={handleSelectFacility}
          />
        ))}

      </div>

    </div>
  );
};

export default ReferPatient;
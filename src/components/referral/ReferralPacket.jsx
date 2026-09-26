import React from "react";

const ReferralPacket = ({ patient, referral }) => {
  return (
    <div className="referral-packet">

      <div className="packet-header">
        <div>
          <span>SWASTH SETU</span>
          <h2>Digital Referral Packet</h2>
        </div>

        <div className="packet-status">
          {referral?.urgency || "ROUTINE"}
        </div>
      </div>

      <section className="packet-section">
        <h3>Patient Information</h3>

        <div className="packet-grid">
          <div>
            <span>Name</span>
            <strong>{patient?.name}</strong>
          </div>

          <div>
            <span>Age</span>
            <strong>{patient?.age}</strong>
          </div>

          <div>
            <span>Gender</span>
            <strong>{patient?.gender}</strong>
          </div>

          <div>
            <span>Blood Group</span>
            <strong>{patient?.bloodGroup}</strong>
          </div>
        </div>
      </section>

      <section className="packet-section">
        <h3>Clinical Summary</h3>

        <p>{referral?.patientSummary}</p>
      </section>

      <section className="packet-section">
        <h3>Vitals</h3>

        <div className="packet-grid">
          <div>
            <span>Blood Pressure</span>
            <strong>{patient?.vitals?.bloodPressure}</strong>
          </div>

          <div>
            <span>Heart Rate</span>
            <strong>{patient?.vitals?.heartRate}</strong>
          </div>

          <div>
            <span>SpO₂</span>
            <strong>{patient?.vitals?.spo2}</strong>
          </div>

          <div>
            <span>Temperature</span>
            <strong>{patient?.vitals?.temperature}</strong>
          </div>
        </div>
      </section>

      <section className="packet-section">
        <h3>Referral Information</h3>

        <div className="packet-grid">
          <div>
            <span>Reason</span>
            <strong>{referral?.reason}</strong>
          </div>

          <div>
            <span>Specialty</span>
            <strong>{referral?.requiredSpecialty}</strong>
          </div>

          <div>
            <span>Source</span>
            <strong>{referral?.sourceFacility}</strong>
          </div>

          <div>
            <span>Destination</span>
            <strong>{referral?.destinationFacility}</strong>
          </div>
        </div>
      </section>

      <section className="packet-section">
        <h3>Medical Information</h3>

        <p>
          Existing Conditions:{" "}
          {patient?.conditions?.join(", ") || "None reported"}
        </p>

        <p>
          Allergies:{" "}
          {patient?.allergies?.join(", ") || "None reported"}
        </p>

        <p>
          Current Medication:{" "}
          {patient?.medications?.join(", ") || "None reported"}
        </p>
      </section>

      <div className="packet-footer">
        <span>
          Referring Doctor: {referral?.doctorName}
        </span>

        <span>
          Generated: {referral?.createdAt}
        </span>
      </div>
    </div>
  );
};

export default ReferralPacket;
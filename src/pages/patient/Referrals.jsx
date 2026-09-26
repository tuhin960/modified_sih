import React from "react";
import ReferralCard from "../../components/referral/ReferralCard";

const PatientReferrals = () => {

  const referrals = [
    {
      referralId: "REF-2026-001",
      patientName: "Rahul Patil",
      status: "ACCEPTED",
      urgency: "HIGH",
      requiredSpecialty: "Emergency Medicine",
      sourceFacility: "Rural Health Centre",
      destinationFacility: "District Care Facility",
      reason: "Requires higher-level emergency care.",
    },
  ];

  return (
    <div className="page-container">

      <div className="page-header">
        <div>
          <span className="eyebrow">
            REFERRAL MANAGEMENT
          </span>

          <h1>My Referrals</h1>

          <p>
            Track referral status and destination facility.
          </p>
        </div>
      </div>

      <div className="card-grid">

        {referrals.map((referral) => (
          <ReferralCard
            key={referral.referralId}
            referral={referral}
          />
        ))}

      </div>

    </div>
  );
};

export default PatientReferrals;
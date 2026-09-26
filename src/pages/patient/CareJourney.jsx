import React from "react";
import ReferralTimeline from "../../components/referral/ReferralTimeline";

const CareJourney = () => {

  const events = [
    {
      title: "Patient Registered",
      description: "Patient registered by Health Worker.",
      timestamp: "26 Sep, 09:10 AM",
      completed: true,
    },
    {
      title: "Health Assessment",
      description: "Initial vitals and symptoms recorded.",
      timestamp: "26 Sep, 09:35 AM",
      completed: true,
    },
    {
      title: "Doctor Consultation",
      description: "Consultation completed.",
      timestamp: "26 Sep, 10:15 AM",
      completed: true,
    },
    {
      title: "Referral Created",
      description: "Patient referred for higher-level care.",
      timestamp: "26 Sep, 10:40 AM",
      completed: true,
    },
    {
      title: "Facility Accepted",
      description: "Receiving facility accepted the referral.",
      timestamp: "26 Sep, 10:48 AM",
      completed: true,
    },
    {
      title: "Patient Transfer",
      description: "Transport is being coordinated.",
      timestamp: "In progress",
      completed: false,
    },
    {
      title: "Follow-up",
      description: "Follow-up will be scheduled after treatment.",
      timestamp: "Pending",
      completed: false,
    },
  ];

  return (
    <div className="page-container">

      <div className="page-header">
        <div>
          <span className="eyebrow">
            CARE CONTINUITY
          </span>

          <h1>My Care Journey</h1>

          <p>
            Track your healthcare journey from
            registration to follow-up.
          </p>
        </div>
      </div>

      <div className="journey-panel">

        <ReferralTimeline events={events} />

      </div>

    </div>
  );
};

export default CareJourney;
import React from "react";
import StatCard from "../../components/common/StatCard";
import StatusBadge from "../../components/common/StatusBadge";

const DoctorDashboard = () => {
  return (
    <div className="dashboard-page">

      <div className="page-header">

        <div>
          <span className="eyebrow">
            CLINICAL WORKSPACE
          </span>

          <h1>Doctor Dashboard</h1>

          <p>
            Manage consultations, referrals and follow-ups.
          </p>
        </div>

        <StatusBadge status="ACTIVE" />

      </div>

      <div className="stats-grid">

        <StatCard
          title="Today's Appointments"
          value="12"
          subtitle="4 pending"
          icon="◷"
        />

        <StatCard
          title="Patient Requests"
          value="06"
          subtitle="Awaiting review"
          icon="♙"
        />

        <StatCard
          title="Active Referrals"
          value="04"
          subtitle="Being monitored"
          icon="↗"
        />

        <StatCard
          title="Follow-ups"
          value="09"
          subtitle="Due this week"
          icon="✓"
        />

      </div>

      <div className="doctor-priority-panel">

        <div className="panel-header">
          <div>
            <span>PRIORITY QUEUE</span>
            <h2>Patients Requiring Attention</h2>
          </div>
        </div>

        <div className="priority-row">

          <div>
            <strong>Patient #PT-1024</strong>
            <span>Referral decision required</span>
          </div>

          <button className="primary-btn">
            Review Patient
          </button>

        </div>

      </div>

    </div>
  );
};

export default DoctorDashboard;
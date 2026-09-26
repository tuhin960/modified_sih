import React from "react";

export default function Referrals() {
  return (
    <div className="page-container">

      <div className="record-header">
        <div>
          <span className="page-kicker">REFERRAL TRACKING</span>
          <h2>My Referrals</h2>
          <p>Track the status of your hospital referrals.</p>
        </div>

        <button className="primary-btn">
          View Referral History
        </button>
      </div>

      <section className="referral-main-card">

        <div className="referral-main-header">
          <div>
            <span className="referral-id">REF-2026-1042</span>
            <h3>District Hospital, Howrah</h3>
            <p>Required specialty: Cardiology</p>
          </div>

          <span className="status-badge progress">
            IN TRANSFER
          </span>
        </div>

        <div className="referral-route">
          <div className="route-location">
            <span className="route-dot source"></span>

            <div>
              <strong>Udaynarayanpur Health Facility</strong>
              <span>Source Facility</span>
            </div>
          </div>

          <div className="route-line">
            <span>🚑</span>
          </div>

          <div className="route-location">
            <span className="route-dot destination"></span>

            <div>
              <strong>District Hospital, Howrah</strong>
              <span>Destination Facility</span>
            </div>
          </div>
        </div>

        <div className="referral-progress">

          <div className="referral-progress-step completed">
            <div>✓</div>
            <span>Created</span>
          </div>

          <div className="referral-progress-step completed">
            <div>✓</div>
            <span>Sent</span>
          </div>

          <div className="referral-progress-step completed">
            <div>✓</div>
            <span>Accepted</span>
          </div>

          <div className="referral-progress-step active">
            <div>🚑</div>
            <span>In Transfer</span>
          </div>

          <div className="referral-progress-step">
            <div>○</div>
            <span>Arrived</span>
          </div>

          <div className="referral-progress-step">
            <div>○</div>
            <span>Admitted</span>
          </div>

        </div>

      </section>

      <div className="dashboard-grid">

        <section className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h3>Referral Details</h3>
              <p>Information shared with destination facility</p>
            </div>
          </div>

          <div className="details-grid">
            <div className="detail-item">
              <span>Urgency</span>
              <strong className="danger-text">High</strong>
            </div>

            <div className="detail-item">
              <span>Specialty</span>
              <strong>Cardiology</strong>
            </div>

            <div className="detail-item">
              <span>Created By</span>
              <strong>Dr. Arindam Sen</strong>
            </div>

            <div className="detail-item">
              <span>Created On</span>
              <strong>26 Sep 2026</strong>
            </div>
          </div>
        </section>

        <section className="dashboard-panel">

          <div className="panel-header">
            <div>
              <h3>Facility Status</h3>
              <p>Latest available information</p>
            </div>
          </div>

          <div className="facility-status">

            <div className="facility-status-row">
              <span>🛏 Bed Availability</span>
              <strong>Available</strong>
            </div>

            <div className="facility-status-row">
              <span>🫀 Cardiology</span>
              <strong>Available</strong>
            </div>

            <div className="facility-status-row">
              <span>📡 Data Freshness</span>
              <strong>Updated 8 min ago</strong>
            </div>

          </div>

        </section>

      </div>

    </div>
  );
}
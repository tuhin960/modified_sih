import React from "react";

const referrals = [
  {
    id: "REF-2026-1042",
    patient: "Ramesh Das",
    reason: "Cardiology review",
    source: "Udaynarayanpur Health Facility",
    destination: "District Hospital, Howrah",
    status: "In Transfer",
    updated: "8 min ago",
    urgency: "High"
  },
  {
    id: "REF-2026-1037",
    patient: "Hari Prasad",
    reason: "Specialist consultation",
    source: "Village Health Centre",
    destination: "District Hospital",
    status: "Accepted",
    updated: "1 hour ago",
    urgency: "Medium"
  },
  {
    id: "REF-2026-1029",
    patient: "Mina Roy",
    reason: "Diagnostic evaluation",
    source: "Sub-centre",
    destination: "Community Health Centre",
    status: "Created",
    updated: "3 hours ago",
    urgency: "Normal"
  }
];

export default function Referrals() {
  return (
    <div className="hw-page">

      <div className="hw-page-header">

        <div>
          <span className="hw-kicker">
            CONTINUITY LOOP
          </span>

          <h2>Referral Tracking</h2>

          <p>
            Track patients from referral creation to arrival.
          </p>
        </div>

        <div className="hw-referral-count">
          2 Active Referrals
        </div>

      </div>

      <section className="hw-referral-flow">

        <div className="hw-flow-step active">
          <div>📋</div>
          <strong>Referral Created</strong>
          <span>Doctor</span>
        </div>

        <div className="hw-flow-line"></div>

        <div className="hw-flow-step active">
          <div>📨</div>
          <strong>Sent</strong>
          <span>Destination</span>
        </div>

        <div className="hw-flow-line"></div>

        <div className="hw-flow-step active">
          <div>✓</div>
          <strong>Accepted</strong>
          <span>Hospital</span>
        </div>

        <div className="hw-flow-line"></div>

        <div className="hw-flow-step active">
          <div>🚑</div>
          <strong>Transfer</strong>
          <span>Patient</span>
        </div>

        <div className="hw-flow-line"></div>

        <div className="hw-flow-step">
          <div>🏥</div>
          <strong>Arrival</strong>
          <span>Hospital</span>
        </div>

      </section>

      <section className="hw-referral-list">

        {referrals.map((referral) => (

          <div
            className="hw-referral-card"
            key={referral.id}
          >

            <div className="hw-referral-card-header">

              <div>
                <span className="hw-referral-id">
                  {referral.id}
                </span>

                <h3>
                  {referral.patient}
                </h3>

                <p>
                  {referral.reason}
                </p>
              </div>

              <div className="hw-referral-status-area">

                <span
                  className={`hw-referral-status ${
                    referral.status
                      .toLowerCase()
                      .replaceAll(" ", "-")
                  }`}
                >
                  {referral.status}
                </span>

                <small>
                  {referral.updated}
                </small>

              </div>

            </div>

            <div className="hw-referral-route-row">

              <div>
                <span>FROM</span>
                <strong>
                  {referral.source}
                </strong>
              </div>

              <div className="hw-route-arrow">
                →
              </div>

              <div>
                <span>TO</span>
                <strong>
                  {referral.destination}
                </strong>
              </div>

            </div>

            <div className="hw-referral-bottom">

              <span
                className={`hw-risk-pill ${
                  referral.urgency === "High"
                    ? "red"
                    : referral.urgency === "Medium"
                    ? "yellow"
                    : "green"
                }`}
              >
                {referral.urgency} urgency
              </span>

              <button className="hw-outline-btn">
                Open Referral
              </button>

            </div>

          </div>

        ))}

      </section>

    </div>
  );
}
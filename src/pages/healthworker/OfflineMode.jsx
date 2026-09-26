import React from "react";

const queuedItems = [
  {
    type: "Patient Registration",
    patient: "Maya Devi",
    time: "10:42 AM",
    status: "Waiting for sync"
  },
  {
    type: "Assessment",
    patient: "Ramesh Das",
    time: "11:15 AM",
    status: "Waiting for sync"
  },
  {
    type: "Follow-up",
    patient: "Sita Mondal",
    time: "01:20 PM",
    status: "Waiting for sync"
  }
];

export default function OfflineMode() {
  return (
    <div className="hw-page">

      <div className="hw-page-header">

        <div>
          <span className="hw-kicker">
            LOW CONNECTIVITY
          </span>

          <h2>Offline Mode</h2>

          <p>
            Work with patient records even when internet
            connectivity is unavailable.
          </p>
        </div>

        <div className="hw-sync-status">
          <span></span>
          Connected
        </div>

      </div>

      <section className="hw-offline-hero">

        <div className="hw-offline-icon">
          📡
        </div>

        <div>

          <span>
            CURRENT CONNECTION
          </span>

          <h2>
            Online & Synced
          </h2>

          <p>
            Your device is connected. Local records
            will synchronize automatically.
          </p>

        </div>

        <div className="hw-last-sync">

          <span>Last sync</span>

          <strong>
            Just now
          </strong>

        </div>

      </section>

      <div className="hw-offline-grid">

        <section className="hw-panel">

          <div className="hw-panel-header">

            <div>
              <h3>How Offline Mode Works</h3>
              <p>
                Your workflow continues during connectivity loss
              </p>
            </div>

          </div>

          <div className="hw-offline-steps">

            <div className="hw-offline-step">
              <span>01</span>
              <div>
                <strong>Record locally</strong>
                <p>
                  Patient information is temporarily
                  stored on the device.
                </p>
              </div>
            </div>

            <div className="hw-offline-step">
              <span>02</span>
              <div>
                <strong>Continue field work</strong>
                <p>
                  Registration, assessment and follow-up
                  workflows remain available.
                </p>
              </div>
            </div>

            <div className="hw-offline-step">
              <span>03</span>
              <div>
                <strong>Automatic synchronization</strong>
                <p>
                  Queued changes are synchronized when
                  connectivity returns.
                </p>
              </div>
            </div>

          </div>

        </section>

        <section className="hw-panel">

          <div className="hw-panel-header">

            <div>
              <h3>Local Storage</h3>
              <p>Device-level temporary records</p>
            </div>

          </div>

          <div className="hw-storage-circle">
            <strong>24%</strong>
            <span>Used</span>
          </div>

          <div className="hw-storage-bar">
            <div></div>
          </div>

          <p className="hw-storage-note">
            12 records waiting for synchronization
          </p>

        </section>

      </div>

      <section className="hw-panel hw-sync-queue">

        <div className="hw-panel-header">

          <div>
            <h3>Synchronization Queue</h3>
            <p>
              Records waiting to reach the server
            </p>
          </div>

          <button className="hw-outline-btn">
            Sync Now
          </button>

        </div>

        {queuedItems.map((item, index) => (

          <div
            className="hw-sync-item"
            key={index}
          >

            <div className="hw-sync-item-icon">
              ↻
            </div>

            <div>
              <strong>
                {item.type}
              </strong>

              <span>
                {item.patient} • {item.time}
              </span>
            </div>

            <b>
              {item.status}
            </b>

          </div>

        ))}

      </section>

    </div>
  );
}
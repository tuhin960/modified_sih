import React, { useState } from "react";

const tasks = [
  {
    patient: "Ramesh Das",
    id: "PT-1038",
    task: "Post-referral status check",
    due: "Today",
    priority: "High",
    mode: "Home Visit"
  },
  {
    patient: "Sita Mondal",
    id: "PT-1042",
    task: "Pregnancy follow-up",
    due: "Today",
    priority: "High",
    mode: "Home Visit"
  },
  {
    patient: "Maya Devi",
    id: "PT-1027",
    task: "Blood sugar monitoring",
    due: "Tomorrow",
    priority: "Medium",
    mode: "Phone"
  },
  {
    patient: "Hari Prasad",
    id: "PT-1018",
    task: "Cardiac medicine adherence",
    due: "05 Oct",
    priority: "Medium",
    mode: "Home Visit"
  }
];

export default function FollowUps() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="hw-page">

      <div className="hw-page-header">

        <div>
          <span className="hw-kicker">
            CONTINUITY OF CARE
          </span>

          <h2>Follow-up Management</h2>

          <p>
            Complete follow-up tasks assigned to your community.
          </p>
        </div>

        <div className="hw-followup-summary-badge">
          7 Pending Tasks
        </div>

      </div>

      <div className="hw-followup-tabs">
        <button className="active">
          All <span>7</span>
        </button>

        <button>
          Due Today <span>4</span>
        </button>

        <button>
          Overdue <span>3</span>
        </button>

        <button>
          Completed
        </button>
      </div>

      <section className="hw-followup-list">

        {tasks.map((task, index) => (

          <div
            className="hw-followup-card"
            key={index}
          >

            <div className="hw-task-priority">
              <span
                className={
                  task.priority === "High"
                    ? "high"
                    : "medium"
                }
              ></span>
            </div>

            <div className="hw-task-patient-avatar">
              {task.patient
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            <div className="hw-task-main">

              <div className="hw-task-title">

                <h3>{task.patient}</h3>

                <span>
                  {task.id}
                </span>

              </div>

              <p>{task.task}</p>

              <div className="hw-task-meta">

                <span>
                  📅 {task.due}
                </span>

                <span>
                  📍 {task.mode}
                </span>

                <b>
                  {task.priority} Priority
                </b>

              </div>

            </div>

            <button
              className="hw-primary-btn"
              onClick={() => setSelected(task)}
            >
              Complete Task
            </button>

          </div>

        ))}

      </section>

      {selected && (

        <div className="hw-modal-overlay">

          <div className="hw-modal">

            <button
              className="hw-modal-close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <span className="hw-kicker">
              FOLLOW-UP COMPLETION
            </span>

            <h2>
              {selected.patient}
            </h2>

            <p>
              Record the result of the follow-up interaction.
            </p>

            <div className="hw-form-group">
              <label>Follow-up Outcome</label>

              <select>
                <option>Select outcome</option>
                <option>Patient stable</option>
                <option>Needs doctor review</option>
                <option>Referral required</option>
                <option>Unable to contact</option>
              </select>
            </div>

            <div className="hw-form-group">
              <label>Notes</label>

              <textarea
                rows="4"
                placeholder="Record observations..."
              />
            </div>

            <div className="hw-modal-actions">

              <button
                className="hw-outline-btn"
                onClick={() => setSelected(null)}
              >
                Cancel
              </button>

              <button
                className="hw-primary-btn"
                onClick={() => setSelected(null)}
              >
                Save Follow-up
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
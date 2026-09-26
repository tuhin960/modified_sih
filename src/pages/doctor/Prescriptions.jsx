import { useState } from "react";

export default function Prescriptions() {
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      medicine: "Amlodipine",
      dosage: "5 mg",
      frequency: "Once daily",
      duration: "30 days",
      instructions: "After breakfast",
    },
  ]);

  const [form, setForm] = useState({
    medicine: "",
    dosage: "",
    frequency: "",
    duration: "",
    instructions: "",
  });

  const addMedicine = () => {
    if (!form.medicine || !form.dosage) {
      alert("Medicine and dosage are required.");
      return;
    }

    setMedicines((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      medicine: "",
      dosage: "",
      frequency: "",
      duration: "",
      instructions: "",
    });
  };

  const removeMedicine = (id) => {
    setMedicines((prev) =>
      prev.filter((medicine) => medicine.id !== id)
    );
  };

  const savePrescription = () => {
    localStorage.setItem(
      "doctor_prescription",
      JSON.stringify({
        patient: "Rahul Das",
        medicines,
        updatedAt: new Date().toISOString(),
      })
    );

    alert("Prescription saved locally.");
  };

  return (
    <div className="doctor-page">
      <div className="doctor-page-heading">
        <div>
          <span className="doctor-section-label">
            MEDICATION MANAGEMENT
          </span>
          <h1>Prescription</h1>
          <p>Create and manage the patient's prescription.</p>
        </div>
      </div>

      <section className="prescription-patient">
        <div className="doctor-avatar large">R</div>

        <div>
          <span>Patient</span>
          <h2>Rahul Das</h2>
          <p>54 years • PT-10024 • B+</p>
        </div>
      </section>

      <section className="doctor-panel">
        <div className="doctor-panel-header">
          <div>
            <span className="doctor-section-label">
              ADD MEDICINE
            </span>
            <h2>Prescription Items</h2>
          </div>
        </div>

        <div className="prescription-form">
          <label>
            Medicine
            <input
              value={form.medicine}
              onChange={(e) =>
                setForm({
                  ...form,
                  medicine: e.target.value,
                })
              }
              placeholder="Medicine name"
            />
          </label>

          <label>
            Dosage
            <input
              value={form.dosage}
              onChange={(e) =>
                setForm({
                  ...form,
                  dosage: e.target.value,
                })
              }
              placeholder="e.g. 500 mg"
            />
          </label>

          <label>
            Frequency
            <select
              value={form.frequency}
              onChange={(e) =>
                setForm({
                  ...form,
                  frequency: e.target.value,
                })
              }
            >
              <option value="">Select</option>
              <option>Once daily</option>
              <option>Twice daily</option>
              <option>Three times daily</option>
              <option>As required</option>
            </select>
          </label>

          <label>
            Duration
            <input
              value={form.duration}
              onChange={(e) =>
                setForm({
                  ...form,
                  duration: e.target.value,
                })
              }
              placeholder="e.g. 7 days"
            />
          </label>

          <label className="full-width">
            Instructions
            <input
              value={form.instructions}
              onChange={(e) =>
                setForm({
                  ...form,
                  instructions: e.target.value,
                })
              }
              placeholder="After food, before sleep, etc."
            />
          </label>

          <button className="primary-btn" onClick={addMedicine}>
            + Add Medicine
          </button>
        </div>
      </section>

      <section className="doctor-panel">
        <div className="doctor-panel-header">
          <h2>Current Prescription</h2>
          <span>{medicines.length} medicines</span>
        </div>

        <div className="prescription-list">
          {medicines.map((medicine, index) => (
            <div className="prescription-item" key={medicine.id}>
              <div className="medicine-number">
                {index + 1}
              </div>

              <div className="medicine-details">
                <strong>{medicine.medicine}</strong>

                <span>
                  {medicine.dosage} • {medicine.frequency} •{" "}
                  {medicine.duration}
                </span>

                <small>{medicine.instructions}</small>
              </div>

              <button
                className="remove-medicine"
                onClick={() => removeMedicine(medicine.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="prescription-footer">
          <span>
            ✓ Prescription will be available to the Pharmacy PWA
          </span>

          <button
            className="doctor-primary-btn"
            onClick={savePrescription}
          >
            Save Prescription
          </button>
        </div>
      </section>
    </div>
  );
}
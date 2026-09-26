import React from "react";
import MedicineAvailability
  from "../../components/facility/MedicineAvailability";

const FacilityMedicines = () => {

  const medicines = [
    {
      medicineId: "MED-001",
      name: "Paracetamol 500mg",
      quantity: 120,
      unit: "tablets",
      availability: "AVAILABLE",
      facilityName: "District Care Facility",
      lastUpdated: "10 min ago",
    },
    {
      medicineId: "MED-002",
      name: "Amoxicillin 500mg",
      quantity: 18,
      unit: "capsules",
      availability: "LOW_STOCK",
      facilityName: "District Care Facility",
      lastUpdated: "18 min ago",
    },
    {
      medicineId: "MED-003",
      name: "Salbutamol",
      quantity: 0,
      unit: "units",
      availability: "OUT_OF_STOCK",
      facilityName: "District Care Facility",
      lastUpdated: "25 min ago",
    },
  ];

  return (
    <div className="page-container">

      <div className="page-header">

        <div>
          <span className="eyebrow">
            FACILITY PHARMACY
          </span>

          <h1>Medicine Availability</h1>

          <p>
            Monitor medicine stock and availability.
          </p>
        </div>

      </div>

      <MedicineAvailability
        medicines={medicines}
      />

    </div>
  );
};

export default FacilityMedicines;
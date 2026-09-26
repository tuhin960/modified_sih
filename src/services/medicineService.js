const medicineService = {

  getMedicines() {
    const medicines =
      localStorage.getItem("facilityMedicines");

    return medicines
      ? JSON.parse(medicines)
      : [];
  },

  searchMedicine(query) {
    const medicines = this.getMedicines();

    return medicines.filter((medicine) =>
      medicine.name
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  },

  getMedicineAvailability(name) {
    return this.searchMedicine(name).filter(
      (medicine) =>
        medicine.availability === "AVAILABLE"
    );
  },

  updateMedicineStock(
    medicineId,
    quantity,
    availability
  ) {
    const medicines = this.getMedicines();

    const updated = medicines.map((medicine) =>
      medicine.medicineId === medicineId
        ? {
            ...medicine,
            quantity,
            availability,
            lastUpdated: new Date().toISOString(),
          }
        : medicine
    );

    localStorage.setItem(
      "facilityMedicines",
      JSON.stringify(updated)
    );

    return updated;
  },

  getLowStockMedicines() {
    return this.getMedicines().filter(
      (medicine) =>
        medicine.availability === "LOW_STOCK" ||
        medicine.availability === "OUT_OF_STOCK"
    );
  },
};

export default medicineService;
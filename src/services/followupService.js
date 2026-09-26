const followupService = {

  getFollowUps() {
    const data = localStorage.getItem("followUps");

    return data ? JSON.parse(data) : [];
  },

  createFollowUp(data) {
    const followUp = {
      followUpId: `FU-${Date.now()}`,
      ...data,
      status: "PENDING",
      createdAt: new Date().toISOString(),
    };

    const existing = this.getFollowUps();

    existing.push(followUp);

    localStorage.setItem(
      "followUps",
      JSON.stringify(existing)
    );

    return followUp;
  },

  updateStatus(followUpId, status) {
    const followUps = this.getFollowUps();

    const updated = followUps.map((item) =>
      item.followUpId === followUpId
        ? {
            ...item,
            status,
            updatedAt: new Date().toISOString(),
          }
        : item
    );

    localStorage.setItem(
      "followUps",
      JSON.stringify(updated)
    );

    return updated;
  },
};

export default followupService;
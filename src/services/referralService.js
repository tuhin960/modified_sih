const referralService = {

  findMatchingFacilities(patient, facilities) {
    return facilities
      .map((facility) => {

        let score = 0;

        if (
          facility.capabilities?.includes(
            patient.requiredCapability
          )
        ) {
          score += 30;
        }

        if (
          facility.specialties?.includes(
            patient.requiredSpecialty
          )
        ) {
          score += 25;
        }

        if (facility.emergencyAvailable) {
          score += 15;
        }

        if (facility.availableBeds > 0) {
          score += 15;
        }

        if (facility.dataFreshness === "FRESH") {
          score += 10;
        }

        if (facility.distance <= 10) {
          score += 5;
        }

        return {
          ...facility,
          matchScore: score,
        };
      })
      .sort((a, b) => b.matchScore - a.matchScore);
  },

  createReferral(referralData) {
    const referral = {
      referralId: `REF-${Date.now()}`,
      ...referralData,
      status: "CREATED",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      `referral-${referral.referralId}`,
      JSON.stringify(referral)
    );

    return referral;
  },

  getReferral(referralId) {
    const data = localStorage.getItem(
      `referral-${referralId}`
    );

    return data ? JSON.parse(data) : null;
  },

  updateReferralStatus(referralId, status) {
    const referral = this.getReferral(referralId);

    if (!referral) {
      return null;
    }

    const updatedReferral = {
      ...referral,
      status,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      `referral-${referralId}`,
      JSON.stringify(updatedReferral)
    );

    return updatedReferral;
  },

  acceptReferral(referralId) {
    return this.updateReferralStatus(
      referralId,
      "ACCEPTED"
    );
  },

  rejectReferral(referralId, reason) {
    const referral = this.getReferral(referralId);

    if (!referral) {
      return null;
    }

    return this.updateReferralStatus(
      referralId,
      "REJECTED"
    );
  },
};

export default referralService;
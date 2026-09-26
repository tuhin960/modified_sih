import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PatientDashboard from "../pages/patient/Dashboard";
import PatientHealthRecord from "../pages/patient/HealthRecord";
import PatientCareJourney from "../pages/patient/CareJourney";
import PatientAppointments from "../pages/patient/Appointments";
import PatientReferrals from "../pages/patient/Referrals";
import PatientMedicines from "../pages/patient/Medicines";
import PatientNotifications from "../pages/patient/Notifications";

import HealthWorkerDashboard from "../pages/healthworker/Dashboard";
import HealthWorkerPatients from "../pages/healthworker/MyPatients";
import RegisterPatient from "../pages/healthworker/RegisterPatient";
import HealthAssessment from "../pages/healthworker/HealthAssessment";
import HealthWorkerReferrals from "../pages/healthworker/Referrals";
import HealthWorkerFollowUps from "../pages/healthworker/FollowUps";
import OfflineSync from "../pages/healthworker/OfflineSync";
import HealthWorkerNotifications from "../pages/healthworker/Notifications";

import DoctorDashboard from "../pages/doctor/Dashboard";
import DoctorPatients from "../pages/doctor/MyPatients";
import DoctorAppointments from "../pages/doctor/Appointments";
import DoctorConsultations from "../pages/doctor/Consultations";
import DoctorRecords from "../pages/doctor/PatientRecords";
import ReferPatient from "../pages/doctor/ReferPatient";
import DoctorFollowUps from "../pages/doctor/FollowUps";
import DoctorPrescriptions from "../pages/doctor/Prescriptions";
import DoctorNotifications from "../pages/doctor/Notifications";

import FacilityDashboard from "../pages/facility/Dashboard";
import IncomingReferrals from "../pages/facility/IncomingReferrals";
import FacilityPatients from "../pages/facility/Patients";
import ResourceAvailability from "../pages/facility/ResourceAvailability";
import BedsEquipment from "../pages/facility/BedsEquipment";
import Diagnostics from "../pages/facility/Diagnostics";
import FacilityMedicines from "../pages/facility/Medicines";
import ReferralHistory from "../pages/facility/ReferralHistory";
import FacilityNotifications from "../pages/facility/Notifications";

import CommandCenter from "../pages/admin/CommandCenter";
import AdminPatients from "../pages/admin/Patients";
import CareTeam from "../pages/admin/CareTeam";
import Facilities from "../pages/admin/Facilities";
import EmergencyReferrals from "../pages/admin/EmergencyReferrals";
import ResourceMonitoring from "../pages/admin/ResourceMonitoring";
import AdminFollowUps from "../pages/admin/FollowUps";
import AdminMedicines from "../pages/admin/Medicines";
import Alerts from "../pages/admin/Alerts";
import ImpactAnalytics from "../pages/admin/ImpactAnalytics";

import HealthWorkerLayout from "../pages/healthworker/HealthWorkerLayout";
import Assessment from "../pages/healthworker/Assessment";
import HealthWorkerPatientsAlt from "../pages/healthworker/Patients";
import FollowUpsAlt from "../pages/healthworker/FollowUps";
import OfflineMode from "../pages/healthworker/OfflineMode";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PATIENT */}
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
      <Route path="/patient-health-record" element={<PatientHealthRecord />} />
      <Route path="/patient-care-journey" element={<PatientCareJourney />} />
      <Route path="/patient-appointments" element={<PatientAppointments />} />
      <Route path="/patient-referrals" element={<PatientReferrals />} />
      <Route path="/patient-medicines" element={<PatientMedicines />} />
      <Route path="/patient-notifications" element={<PatientNotifications />} />

      {/* HEALTH WORKER (flat routes) */}
      <Route path="/healthworker-dashboard" element={<HealthWorkerDashboard />} />
      <Route path="/healthworker-patients" element={<HealthWorkerPatients />} />
      <Route path="/healthworker-register" element={<RegisterPatient />} />
      <Route path="/healthworker-assessment" element={<HealthAssessment />} />
      <Route path="/healthworker-referrals" element={<HealthWorkerReferrals />} />
      <Route path="/healthworker-followups" element={<HealthWorkerFollowUps />} />
      <Route path="/healthworker-offline" element={<OfflineSync />} />
      <Route path="/healthworker-notifications" element={<HealthWorkerNotifications />} />

      {/* HEALTH WORKER (nested layout routes) */}
      <Route path="/healthworker" element={<HealthWorkerLayout />}>
        <Route index element={<HealthWorkerDashboard />} />
        <Route path="register-patient" element={<RegisterPatient />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="patients" element={<HealthWorkerPatientsAlt />} />
        <Route path="referrals" element={<HealthWorkerReferrals />} />
        <Route path="follow-ups" element={<FollowUpsAlt />} />
        <Route path="offline" element={<OfflineMode />} />
      </Route>

      {/* DOCTOR */}
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/doctor-patients" element={<DoctorPatients />} />
      <Route path="/doctor-appointments" element={<DoctorAppointments />} />
      <Route path="/doctor-consultations" element={<DoctorConsultations />} />
      <Route path="/doctor-records" element={<DoctorRecords />} />
      <Route path="/doctor-refer" element={<ReferPatient />} />
      <Route path="/doctor-followups" element={<DoctorFollowUps />} />
      <Route path="/doctor-prescriptions" element={<DoctorPrescriptions />} />
      <Route path="/doctor-notifications" element={<DoctorNotifications />} />

      {/* FACILITY */}
      <Route path="/facility-dashboard" element={<FacilityDashboard />} />
      <Route path="/facility-referrals" element={<IncomingReferrals />} />
      <Route path="/facility-patients" element={<FacilityPatients />} />
      <Route path="/facility-resources" element={<ResourceAvailability />} />
      <Route path="/facility-beds" element={<BedsEquipment />} />
      <Route path="/facility-diagnostics" element={<Diagnostics />} />
      <Route path="/facility-medicines" element={<FacilityMedicines />} />
      <Route path="/facility-history" element={<ReferralHistory />} />
      <Route path="/facility-notifications" element={<FacilityNotifications />} />

      {/* ADMIN */}
      <Route path="/admin-command-center" element={<CommandCenter />} />
      <Route path="/admin-patients" element={<AdminPatients />} />
      <Route path="/admin-care-team" element={<CareTeam />} />
      <Route path="/admin-facilities" element={<Facilities />} />
      <Route path="/admin-emergency-referrals" element={<EmergencyReferrals />} />
      <Route path="/admin-resources" element={<ResourceMonitoring />} />
      <Route path="/admin-followups" element={<AdminFollowUps />} />
      <Route path="/admin-medicines" element={<AdminMedicines />} />
      <Route path="/admin-alerts" element={<Alerts />} />
      <Route path="/admin-analytics" element={<ImpactAnalytics />} />

      <Route path="*" element={<Navigate to="/patient-dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
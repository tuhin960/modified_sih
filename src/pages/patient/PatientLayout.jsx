import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import "./patient.css";

export default function PatientLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="patient-app">
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="patient-main">
        <Navbar setMobileOpen={setMobileOpen} />

        <main className="patient-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
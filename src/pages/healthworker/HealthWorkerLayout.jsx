import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import HealthWorkerSidebar from "../../components/HealthWorkerSidebar";
import HealthWorkerNavbar from "../../components/HealthWorkerNavbar";

import "./healthworker.css";

export default function HealthWorkerLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="healthworker-app">

      <HealthWorkerSidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="hw-main">

        <HealthWorkerNavbar
          setMobileOpen={setMobileOpen}
        />

        <main className="hw-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}
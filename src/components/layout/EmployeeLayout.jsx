import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function EmployeeLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-rms-neutral-50 via-white to-rms-neutral-100/80">
      <Sidebar role="EMPLOYEE" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 lg:p-8">
          <div className="max-w-[1400px] mx-auto animate-fadeIn">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

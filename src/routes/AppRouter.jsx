import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";
import Spinner from "../components/common/Spinner";
import { Construction, ShieldX } from "lucide-react";

// Layouts
import GuestLayout from "../components/layout/GuestLayout";
import EmployeeLayout from "../components/layout/EmployeeLayout";
import AdminLayout from "../components/layout/AdminLayout";

// Auth
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));

// Guest Pages
const GuestDashboard = lazy(() => import("../pages/guest/GuestDashboard"));

// Employee Pages
const EmployeeDashboard = lazy(
  () => import("../pages/employee/EmployeeDashboard"),
);
const AssignedEvents = lazy(() => import("../pages/employee/AssignedEvents"));

// Admin Pages
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));
const ReservationsManagement = lazy(
  () => import("../pages/admin/ReservationsManagement"),
);
const RoomsManagement = lazy(() => import("../pages/admin/RoomsManagement"));
const EmployeesManagement = lazy(
  () => import("../pages/admin/EmployeesManagement"),
);
const InventoryManagement = lazy(
  () => import("../pages/admin/InventoryManagement"),
);

// Placeholder for missing pages
const PlaceholderPage = ({ title }) => (
  <div className="flex items-center justify-center h-[60vh]">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-rms-primary-50 flex items-center justify-center">
        <Construction size={28} className="text-rms-primary-500" />
      </div>
      <h1 className="text-xl font-bold text-rms-neutral-800 mb-2">{title}</h1>
      <p className="text-sm text-rms-neutral-400 max-w-xs mx-auto">
        This feature is currently under development and will be available soon.
      </p>
    </div>
  </div>
);

export default function AppRouter() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Guest Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<RoleRoute allowedRoles={["GUEST", "ADMIN"]} />}>
            <Route path="/guest" element={<GuestLayout />}>
              <Route path="dashboard" element={<GuestDashboard />} />
              <Route
                path="search"
                element={<PlaceholderPage title="Search Rooms" />}
              />
              <Route
                path="reservations"
                element={<PlaceholderPage title="My Reservations" />}
              />
              <Route
                path="invoices"
                element={<PlaceholderPage title="My Invoices" />}
              />
              <Route
                path="profile"
                element={<PlaceholderPage title="My Profile" />}
              />
            </Route>
          </Route>
        </Route>

        {/* Employee Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<RoleRoute allowedRoles={["EMPLOYEE", "ADMIN"]} />}>
            <Route path="/employee" element={<EmployeeLayout />}>
              <Route path="dashboard" element={<EmployeeDashboard />} />
              <Route
                path="tasks"
                element={<PlaceholderPage title="My Tasks" />}
              />
              <Route path="events" element={<AssignedEvents />} />
              <Route
                path="rooms"
                element={<PlaceholderPage title="Room Management" />}
              />
            </Route>
          </Route>
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<RoleRoute allowedRoles={["ADMIN"]} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="reservations" element={<ReservationsManagement />} />
              <Route path="rooms" element={<RoomsManagement />} />
              <Route path="employees" element={<EmployeesManagement />} />
              <Route path="inventory" element={<InventoryManagement />} />
              <Route
                path="settings"
                element={<PlaceholderPage title="Settings" />}
              />
            </Route>
          </Route>
        </Route>

        <Route
          path="/unauthorized"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rms-neutral-50 to-rms-neutral-100">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-50 flex items-center justify-center">
                  <ShieldX size={36} className="text-red-500" />
                </div>
                <h1 className="text-5xl font-bold text-rms-neutral-800 mb-2">403</h1>
                <p className="text-rms-neutral-500 mb-8 max-w-sm mx-auto">
                  You don't have permission to access this page. Contact an administrator if you think this is an error.
                </p>
                <button
                  onClick={() => window.history.back()}
                  className="px-6 py-2.5 text-sm font-semibold text-rms-primary-600 border border-rms-primary-200 bg-rms-primary-50 hover:bg-rms-primary-100 rounded-xl transition-all duration-200"
                >
                  Go Back
                </button>
              </div>
            </div>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  );
}

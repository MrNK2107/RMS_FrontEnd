import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function RoleRoute({ allowedRoles = [] }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) return <Navigate to="/login" replace />;

  const ok = user.roles?.some((r) => allowedRoles.includes(r));

  return ok ? <Outlet /> : <Navigate to="/unauthorized" replace />;
}

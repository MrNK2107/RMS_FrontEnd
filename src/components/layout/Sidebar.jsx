import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link, useLocation } from "react-router-dom";
import {
  LogOut,
  Home,
  Calendar,
  Users,
  Settings,
  FileText,
  Briefcase,
  CreditCard,
  Search,
  LayoutDashboard,
  BedDouble,
  Package,
  ClipboardList,
  UserCircle,
  PartyPopper,
} from "lucide-react";

export default function Sidebar({ role }) {
  const { logout } = useAuth();
  const location = useLocation();

  const menuItems = {
    GUEST: [
      { name: "Dashboard", path: "/guest/dashboard", icon: LayoutDashboard },
      { name: "Search Rooms", path: "/guest/search", icon: Search },
      { name: "My Reservations", path: "/guest/reservations", icon: ClipboardList },
      { name: "My Invoices", path: "/guest/invoices", icon: CreditCard },
      { name: "My Profile", path: "/guest/profile", icon: UserCircle },
    ],
    EMPLOYEE: [
      { name: "Dashboard", path: "/employee/dashboard", icon: LayoutDashboard },
      { name: "My Tasks", path: "/employee/tasks", icon: ClipboardList },
      { name: "Assigned Events", path: "/employee/events", icon: PartyPopper },
      { name: "Room Management", path: "/employee/rooms", icon: BedDouble },
    ],
    ADMIN: [
      { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
      { name: "Reservations", path: "/admin/reservations", icon: Calendar },
      { name: "Rooms", path: "/admin/rooms", icon: BedDouble },
      { name: "Employees", path: "/admin/employees", icon: Users },
      { name: "Inventory", path: "/admin/inventory", icon: Package },
      { name: "Settings", path: "/admin/settings", icon: Settings },
    ],
  };

  const items = menuItems[role] || [];

  const isActive = (path) => location.pathname === path;

  const roleLabels = {
    ADMIN: "Administrator",
    EMPLOYEE: "Staff Portal",
    GUEST: "Guest Portal",
  };

  return (
    <div className="w-[260px] min-w-[260px] bg-gradient-to-b from-rms-neutral-900 via-rms-neutral-900 to-rms-neutral-800 text-white flex flex-col">
      {/* Brand */}
      <div className="px-6 pt-7 pb-6">
        <h1 className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-rms-primary-400 to-emerald-300 bg-clip-text text-transparent">
            Serenity
          </span>
          <span className="text-rms-neutral-300 font-normal ml-1.5">Resort</span>
        </h1>
        <p className="text-[11px] font-medium tracking-widest uppercase text-rms-neutral-500 mt-1.5">
          {roleLabels[role] || role}
        </p>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-gradient-to-r from-transparent via-rms-neutral-700 to-transparent" />

      {/* Nav */}
      <nav className="flex-1 px-3 pt-5 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium
                transition-all duration-200 relative
                ${active
                  ? "bg-rms-primary-500/15 text-rms-primary-400"
                  : "text-rms-neutral-400 hover:text-rms-neutral-200 hover:bg-white/[0.04]"
                }
              `}
            >
              {/* Active bar */}
              {active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-rms-primary-400 rounded-r-full" />
              )}
              <Icon
                size={19}
                strokeWidth={active ? 2.2 : 1.8}
                className={`transition-all duration-200 flex-shrink-0 ${active ? "text-rms-primary-400" : "group-hover:text-rms-neutral-300"
                  }`}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom divider */}
      <div className="mx-5 h-px bg-gradient-to-r from-transparent via-rms-neutral-700 to-transparent" />

      {/* Logout */}
      <div className="p-3 pb-5">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3.5 py-2.5 w-full rounded-xl text-sm font-medium text-rms-neutral-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
        >
          <LogOut size={19} strokeWidth={1.8} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}

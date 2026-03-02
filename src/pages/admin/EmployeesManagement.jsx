import React from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { Search, UserPlus, Eye, UserX, Mail, Phone } from "lucide-react";

const employees = [
  { id: "EMP-101", name: "Alice Rivera", role: "Front Desk Manager", department: "Front Office", status: "Active", email: "alice@serenity.com" },
  { id: "EMP-102", name: "David Kim", role: "Head Chef", department: "F&B", status: "Active", email: "david@serenity.com" },
  { id: "EMP-103", name: "Maria Santos", role: "Housekeeper", department: "Housekeeping", status: "Active", email: "maria@serenity.com" },
  { id: "EMP-104", name: "Robert Clark", role: "Concierge", department: "Guest Services", status: "On Leave", email: "robert@serenity.com" },
  { id: "EMP-105", name: "Sarah Mitchell", role: "Event Coordinator", department: "Events", status: "Active", email: "sarah@serenity.com" },
];

const getStatusStyle = (status) => {
  const styles = {
    "Active": "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    "On Leave": "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    "Inactive": "bg-red-50 text-red-700 ring-1 ring-red-200",
  };
  return styles[status] || styles["Active"];
};

const getDeptColor = (dept) => {
  const colors = {
    "Front Office": "from-blue-400 to-indigo-500",
    "F&B": "from-orange-400 to-red-500",
    "Housekeeping": "from-emerald-400 to-teal-500",
    "Guest Services": "from-violet-400 to-purple-500",
    "Events": "from-pink-400 to-rose-500",
  };
  return colors[dept] || "from-slate-400 to-slate-500";
};

export default function EmployeesManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-rms-neutral-900">Employees</h1>
          <p className="text-sm text-rms-neutral-500 mt-0.5">Manage your resort team</p>
        </div>
        <Button>
          <UserPlus size={18} />
          Add Employee
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rms-neutral-400" />
        <input
          type="text"
          placeholder="Search employees…"
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-rms-neutral-200 rounded-xl placeholder:text-rms-neutral-400 focus:outline-none focus:ring-2 focus:ring-rms-primary-500/30 focus:border-rms-primary-400 transition-all duration-200"
        />
      </div>

      {/* Table */}
      <Card padding={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-rms-neutral-100">
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Employee</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Role</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Department</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Status</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rms-neutral-100/80">
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-rms-neutral-50/60 transition-colors duration-150">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${getDeptColor(emp.department)} flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0`}>
                        {emp.name.split(" ").map(w => w[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-rms-neutral-800">{emp.name}</p>
                        <p className="text-xs text-rms-neutral-400">{emp.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-rms-neutral-600">{emp.role}</td>
                  <td className="px-5 py-3.5">
                    <span className="text-xs font-medium text-rms-neutral-600 bg-rms-neutral-100 px-2.5 py-1 rounded-md">
                      {emp.department}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold ${getStatusStyle(emp.status)}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 text-rms-neutral-400 hover:text-rms-primary-600 hover:bg-rms-primary-50 rounded-lg transition-all duration-200" title="View">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 text-rms-neutral-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200" title="Email">
                        <Mail size={16} />
                      </button>
                      <button className="p-1.5 text-rms-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200" title="Deactivate">
                        <UserX size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

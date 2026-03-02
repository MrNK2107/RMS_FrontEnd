import React from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { Search, Filter, MoreHorizontal, Eye, XCircle, CalendarDays } from "lucide-react";

const reservations = [
  { id: "RES-1001", guest: "Sarah Chen", room: "Ocean Suite", checkIn: "Oct 11, 2026", checkOut: "Oct 16, 2026", status: "Confirmed", amount: "$2,450" },
  { id: "RES-1002", guest: "Michael Torres", room: "Deluxe King", checkIn: "Oct 12, 2026", checkOut: "Oct 17, 2026", status: "Checked In", amount: "$1,890" },
  { id: "RES-1003", guest: "Emma Williams", room: "Garden Villa", checkIn: "Oct 13, 2026", checkOut: "Oct 18, 2026", status: "Confirmed", amount: "$3,200" },
  { id: "RES-1004", guest: "James Wilson", room: "Penthouse Suite", checkIn: "Oct 14, 2026", checkOut: "Oct 19, 2026", status: "Pending", amount: "$5,100" },
  { id: "RES-1005", guest: "Lisa Anderson", room: "Standard Double", checkIn: "Oct 15, 2026", checkOut: "Oct 20, 2026", status: "Confirmed", amount: "$980" },
];

const getStatusStyle = (status) => {
  const styles = {
    "Confirmed": "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    "Checked In": "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    "Pending": "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    "Cancelled": "bg-red-50 text-red-700 ring-1 ring-red-200",
  };
  return styles[status] || "bg-gray-50 text-gray-700";
};

export default function ReservationsManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-rms-neutral-900">Reservations</h1>
          <p className="text-sm text-rms-neutral-500 mt-0.5">Manage and track all guest reservations</p>
        </div>
        <Button>
          <CalendarDays size={18} />
          New Reservation
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rms-neutral-400" />
          <input
            type="text"
            placeholder="Search by guest name or ID…"
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-rms-neutral-200 rounded-xl placeholder:text-rms-neutral-400 focus:outline-none focus:ring-2 focus:ring-rms-primary-500/30 focus:border-rms-primary-400 transition-all duration-200"
          />
        </div>
        <div className="flex gap-2">
          {["All", "Confirmed", "Pending", "Checked In"].map((filter) => (
            <button
              key={filter}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${filter === "All"
                  ? "bg-rms-primary-500 text-white shadow-sm"
                  : "bg-white text-rms-neutral-600 border border-rms-neutral-200 hover:bg-rms-neutral-50"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <Card padding={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-rms-neutral-100">
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">ID</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Guest</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Room</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Check In</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Check Out</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Amount</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Status</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rms-neutral-100/80">
              {reservations.map((res) => (
                <tr key={res.id} className="hover:bg-rms-neutral-50/60 transition-colors duration-150">
                  <td className="px-5 py-3.5 text-sm font-mono text-rms-primary-600 font-medium">{res.id}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rms-primary-400 to-rms-primary-600 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
                        {res.guest.split(" ").map(w => w[0]).join("")}
                      </div>
                      <span className="text-sm font-medium text-rms-neutral-800">{res.guest}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-rms-neutral-600">{res.room}</td>
                  <td className="px-5 py-3.5 text-sm text-rms-neutral-600">{res.checkIn}</td>
                  <td className="px-5 py-3.5 text-sm text-rms-neutral-600">{res.checkOut}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-rms-neutral-800">{res.amount}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold ${getStatusStyle(res.status)}`}>
                      {res.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 text-rms-neutral-400 hover:text-rms-primary-600 hover:bg-rms-primary-50 rounded-lg transition-all duration-200" title="View">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 text-rms-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200" title="Cancel">
                        <XCircle size={16} />
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

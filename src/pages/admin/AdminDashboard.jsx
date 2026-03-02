import React from "react";
import Card from "../../components/ui/Card";
import {
  DollarSign,
  BedDouble,
  CalendarPlus,
  Users,
  TrendingUp,
  AlertCircle,
  Wrench,
  ChevronRight,
} from "lucide-react";

const statCards = [
  {
    title: "Total Revenue",
    value: "$45,230",
    change: "+12.5%",
    icon: DollarSign,
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-600",
  },
  {
    title: "Occupancy Rate",
    value: "85%",
    change: "+3.2%",
    icon: BedDouble,
    gradient: "from-blue-500 to-indigo-500",
    lightBg: "bg-blue-50",
    lightText: "text-blue-600",
  },
  {
    title: "New Bookings",
    value: "24",
    change: "+8 today",
    icon: CalendarPlus,
    gradient: "from-violet-500 to-purple-500",
    lightBg: "bg-violet-50",
    lightText: "text-violet-600",
  },
  {
    title: "Active Staff",
    value: "42",
    change: "3 on leave",
    icon: Users,
    gradient: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
    lightText: "text-amber-600",
  },
];

const recentReservations = [
  { name: "Sarah Chen", room: "Ocean View Suite", status: "Confirmed", date: "Oct 15" },
  { name: "Michael Torres", room: "Deluxe King", status: "Checked In", date: "Oct 14" },
  { name: "Emma Williams", room: "Garden Villa", status: "Confirmed", date: "Oct 16" },
  { name: "James Wilson", room: "Penthouse Suite", status: "Pending", date: "Oct 17" },
];

const getStatusStyle = (status) => {
  const styles = {
    "Confirmed": "bg-emerald-50 text-emerald-700 ring-emerald-200",
    "Checked In": "bg-blue-50 text-blue-700 ring-blue-200",
    "Pending": "bg-amber-50 text-amber-700 ring-amber-200",
  };
  return styles[status] || "bg-gray-50 text-gray-700 ring-gray-200";
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-rms-neutral-900">
          Dashboard Overview
        </h1>
        <p className="text-rms-neutral-500 text-sm mt-1">
          Here's what's happening at your resort today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-rms-neutral-200/60 p-5 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-sm`}>
                  <Icon size={20} className="text-white" strokeWidth={2} />
                </div>
                <span className={`text-xs font-medium ${stat.lightText} ${stat.lightBg} px-2 py-0.5 rounded-full flex items-center gap-1`}>
                  <TrendingUp size={12} />
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-rms-neutral-500 font-medium">{stat.title}</p>
              <p className="text-2xl font-bold text-rms-neutral-900 mt-0.5">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Recent Reservations */}
        <Card className="lg:col-span-3">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-rms-neutral-800">
              Recent Reservations
            </h2>
            <button className="text-xs font-medium text-rms-primary-600 hover:text-rms-primary-700 flex items-center gap-0.5 transition-colors">
              View all <ChevronRight size={14} />
            </button>
          </div>
          <div className="space-y-3">
            {recentReservations.map((res, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl bg-rms-neutral-50/80 hover:bg-rms-neutral-100/80 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rms-primary-400 to-rms-primary-600 flex items-center justify-center text-white text-xs font-bold">
                    {res.name.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-rms-neutral-800">{res.name}</p>
                    <p className="text-xs text-rms-neutral-400">{res.room} · {res.date}</p>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ring-1 ${getStatusStyle(res.status)}`}>
                  {res.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* System Alerts */}
        <Card className="lg:col-span-2">
          <h2 className="text-base font-semibold text-rms-neutral-800 mb-5">
            System Alerts
          </h2>
          <div className="space-y-3">
            <div className="p-3.5 bg-red-50/80 border border-red-200/50 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertCircle size={16} className="text-red-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-800">Low Inventory</p>
                  <p className="text-xs text-red-600/80 mt-0.5">
                    Towels running low in Main Storage
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3.5 bg-amber-50/80 border border-amber-200/50 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Wrench size={16} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-800">Maintenance Required</p>
                  <p className="text-xs text-amber-600/80 mt-0.5">
                    AC unit in Room 302 needs inspection
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3.5 bg-blue-50/80 border border-blue-200/50 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CalendarPlus size={16} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-800">New Event Booking</p>
                  <p className="text-xs text-blue-600/80 mt-0.5">
                    Wedding reception booked for Oct 28
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

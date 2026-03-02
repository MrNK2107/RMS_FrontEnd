import React from "react";
import Card from "../../components/ui/Card";
import {
  ClipboardList,
  PartyPopper,
  CheckCircle2,
  Clock,
  BedDouble,
  ArrowRight,
} from "lucide-react";

const statCards = [
  {
    title: "Pending Tasks",
    value: "12",
    icon: ClipboardList,
    gradient: "from-blue-500 to-indigo-500",
    desc: "3 due today",
  },
  {
    title: "Assigned Events",
    value: "3",
    icon: PartyPopper,
    gradient: "from-violet-500 to-purple-500",
    desc: "Next: Oct 16",
  },
  {
    title: "Completed Today",
    value: "8",
    icon: CheckCircle2,
    gradient: "from-emerald-500 to-teal-500",
    desc: "92% efficiency",
  },
];

const activities = [
  { task: "Room 101 Cleaning", dept: "Housekeeping", status: "In Progress", time: "10 min ago", icon: BedDouble },
  { task: "Room 102 Cleaning", dept: "Housekeeping", status: "In Progress", time: "25 min ago", icon: BedDouble },
  { task: "Lobby Setup", dept: "Events", status: "Completed", time: "1h ago", icon: CheckCircle2 },
];

const getActivityStatus = (status) => {
  const styles = {
    "In Progress": "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    "Completed": "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    "Pending": "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  };
  return styles[status] || styles["Pending"];
};

export default function EmployeeDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-rms-neutral-900">My Dashboard</h1>
        <p className="text-rms-neutral-500 text-sm mt-1">Here's your work summary for today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-rms-neutral-200/60 p-5 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-sm`}>
                  <Icon size={20} className="text-white" strokeWidth={2} />
                </div>
              </div>
              <p className="text-sm text-rms-neutral-500 font-medium">{stat.title}</p>
              <p className="text-2xl font-bold text-rms-neutral-900 mt-0.5">{stat.value}</p>
              <p className="text-xs text-rms-neutral-400 mt-1">{stat.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Activity */}
      <Card>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-rms-neutral-800">Recent Activity</h2>
          <button className="text-xs font-medium text-rms-primary-600 hover:text-rms-primary-700 flex items-center gap-0.5 transition-colors">
            View all <ArrowRight size={14} />
          </button>
        </div>
        <div className="space-y-3">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <div
                key={i}
                className="flex items-center justify-between p-3.5 rounded-xl bg-rms-neutral-50/80 hover:bg-rms-neutral-100/80 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-rms-neutral-100 flex items-center justify-center">
                    <Icon size={18} className="text-rms-neutral-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-rms-neutral-800">{act.task}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-rms-neutral-400">{act.dept}</span>
                      <span className="text-rms-neutral-300">·</span>
                      <span className="text-xs text-rms-neutral-400 flex items-center gap-1">
                        <Clock size={11} /> {act.time}
                      </span>
                    </div>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${getActivityStatus(act.status)}`}>
                  {act.status}
                </span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

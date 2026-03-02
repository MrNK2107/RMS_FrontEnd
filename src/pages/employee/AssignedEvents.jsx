import React from "react";
import Button from "../../components/ui/Button";
import {
  RefreshCw,
  MapPin,
  Clock,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";

const events = [
  {
    name: "Wedding Reception — Thompson",
    date: "Oct 16, 2026",
    time: "18:00 – 23:00",
    location: "Grand Ballroom",
    role: "Server",
    guests: 250,
    status: "Upcoming",
  },
  {
    name: "Corporate Retreat — Nexus Inc.",
    date: "Oct 17, 2026",
    time: "09:00 – 17:00",
    location: "Summit Hall",
    role: "Setup Crew",
    guests: 80,
    status: "Upcoming",
  },
  {
    name: "Birthday Gala — Chen Family",
    date: "Oct 18, 2026",
    time: "19:00 – 00:00",
    location: "Rooftop Terrace",
    role: "Bartender",
    guests: 60,
    status: "Upcoming",
  },
];

const getStatusStyle = (status) => {
  const styles = {
    "Upcoming": "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    "In Progress": "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    "Completed": "bg-rms-neutral-100 text-rms-neutral-500 ring-1 ring-rms-neutral-200",
  };
  return styles[status] || styles["Upcoming"];
};

export default function AssignedEvents() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-rms-neutral-900">Assigned Events</h1>
          <p className="text-sm text-rms-neutral-500 mt-0.5">Your upcoming event assignments</p>
        </div>
        <Button variant="secondary">
          <RefreshCw size={16} />
          Refresh
        </Button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event, i) => (
          <div
            key={i}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-rms-neutral-200/60 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            {/* Date header */}
            <div className="bg-gradient-to-r from-rms-primary-500 to-rms-primary-600 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Calendar size={15} />
                <span className="text-sm font-semibold">{event.date}</span>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white`}>
                {event.status}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-sm font-semibold text-rms-neutral-800 mb-4 leading-snug">
                {event.name}
              </h3>

              <div className="space-y-2.5 text-xs text-rms-neutral-500 mb-5">
                <div className="flex items-center gap-2.5">
                  <Clock size={14} className="text-rms-neutral-400 flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={14} className="text-rms-neutral-400 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users size={14} className="text-rms-neutral-400 flex-shrink-0" />
                  <span>{event.guests} guests</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-rms-neutral-100">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-rms-neutral-400 font-medium">Your Role</span>
                  <p className="text-xs font-semibold text-rms-neutral-700 mt-0.5">{event.role}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-xs">
                  Details <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { Plus, BedDouble, Wifi, Wind, Bath } from "lucide-react";

const rooms = [
  { number: 101, type: "Standard", floor: 1, status: "Available", clean: true, price: "$120" },
  { number: 102, type: "Standard", floor: 1, status: "Occupied", clean: true, price: "$120" },
  { number: 103, type: "Deluxe", floor: 1, status: "Available", clean: true, price: "$220" },
  { number: 104, type: "Deluxe", floor: 1, status: "Maintenance", clean: false, price: "$220" },
  { number: 201, type: "Suite", floor: 2, status: "Occupied", clean: true, price: "$380" },
  { number: 202, type: "Suite", floor: 2, status: "Available", clean: true, price: "$380" },
  { number: 203, type: "Penthouse", floor: 2, status: "Available", clean: true, price: "$650" },
  { number: 204, type: "Penthouse", floor: 2, status: "Occupied", clean: true, price: "$650" },
];

const getStatusConfig = (status) => {
  const configs = {
    "Available": { bg: "bg-emerald-50", text: "text-emerald-700", ring: "ring-emerald-200", dot: "bg-emerald-500" },
    "Occupied": { bg: "bg-blue-50", text: "text-blue-700", ring: "ring-blue-200", dot: "bg-blue-500" },
    "Maintenance": { bg: "bg-amber-50", text: "text-amber-700", ring: "ring-amber-200", dot: "bg-amber-500" },
  };
  return configs[status] || configs["Available"];
};

const getTypeGradient = (type) => {
  const gradients = {
    "Standard": "from-slate-400 to-slate-500",
    "Deluxe": "from-blue-400 to-indigo-500",
    "Suite": "from-violet-400 to-purple-500",
    "Penthouse": "from-amber-400 to-orange-500",
  };
  return gradients[type] || "from-slate-400 to-slate-500";
};

export default function RoomsManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-rms-neutral-900">Rooms</h1>
          <p className="text-sm text-rms-neutral-500 mt-0.5">View and manage all rooms across floors</p>
        </div>
        <Button>
          <Plus size={18} />
          Add Room
        </Button>
      </div>

      {/* Room Summary Stats */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: "Available", count: rooms.filter(r => r.status === "Available").length, color: "text-emerald-600 bg-emerald-50 ring-emerald-200" },
          { label: "Occupied", count: rooms.filter(r => r.status === "Occupied").length, color: "text-blue-600 bg-blue-50 ring-blue-200" },
          { label: "Maintenance", count: rooms.filter(r => r.status === "Maintenance").length, color: "text-amber-600 bg-amber-50 ring-amber-200" },
        ].map(s => (
          <div key={s.label} className={`px-4 py-2 rounded-xl text-xs font-semibold ring-1 ${s.color}`}>
            {s.count} {s.label}
          </div>
        ))}
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {rooms.map((room) => {
          const statusConfig = getStatusConfig(room.status);
          return (
            <div
              key={room.number}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-rms-neutral-200/60 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${getTypeGradient(room.type)}`} />

              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-rms-neutral-900">{room.number}</p>
                    <p className={`text-xs font-semibold mt-0.5 bg-gradient-to-r ${getTypeGradient(room.type)} bg-clip-text text-transparent`}>
                      {room.type}
                    </p>
                  </div>
                  <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ring-1 ${statusConfig.bg} ${statusConfig.text} ${statusConfig.ring}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot} ${room.status === "Occupied" ? "animate-pulse" : ""}`} />
                    {room.status}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 text-xs text-rms-neutral-500 mb-4">
                  <div className="flex items-center justify-between">
                    <span>Floor {room.floor}</span>
                    <span className="font-semibold text-rms-neutral-800">{room.price}<span className="font-normal text-rms-neutral-400">/night</span></span>
                  </div>
                </div>

                {/* Amenity icons */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-rms-neutral-100">
                  {[Wifi, Wind, Bath, BedDouble].map((AmenIcon, i) => (
                    <div key={i} className="w-7 h-7 rounded-lg bg-rms-neutral-50 flex items-center justify-center">
                      <AmenIcon size={14} className="text-rms-neutral-400" />
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" fullWidth className="text-xs">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" fullWidth className="text-xs">
                    History
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

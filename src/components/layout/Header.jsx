import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Bell, Search, User } from "lucide-react";

export default function Header() {
  const { user } = useAuth();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-rms-neutral-200/60 h-16 flex items-center justify-between px-6 gap-4">
      {/* Left: Greeting */}
      <div className="flex flex-col min-w-0">
        <span className="text-[13px] text-rms-neutral-400 leading-tight">{getGreeting()},</span>
        <span className="text-sm font-semibold text-rms-neutral-800 truncate leading-tight">
          {user?.name || "User"}
        </span>
      </div>

      {/* Center: Search */}
      <div className="hidden md:flex flex-1 max-w-md mx-4">
        <div className="relative w-full">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rms-neutral-400" />
          <input
            type="text"
            placeholder="Search anything…"
            className="w-full pl-10 pr-4 py-2 text-sm bg-rms-neutral-100/80 border border-rms-neutral-200/50 rounded-xl text-rms-neutral-700 placeholder:text-rms-neutral-400 focus:outline-none focus:ring-2 focus:ring-rms-primary-500/30 focus:border-rms-primary-400 focus:bg-white transition-all duration-200"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <button className="relative p-2.5 text-rms-neutral-400 hover:text-rms-neutral-700 hover:bg-rms-neutral-100 rounded-xl transition-all duration-200">
          <Bell size={19} strokeWidth={1.8} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rms-accent-500 rounded-full ring-2 ring-white" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2.5 ml-1 pl-3 border-l border-rms-neutral-200/60">
          <div className="w-8 h-8 bg-gradient-to-br from-rms-primary-400 to-rms-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
            {getInitials(user?.name)}
          </div>
        </div>
      </div>
    </header>
  );
}

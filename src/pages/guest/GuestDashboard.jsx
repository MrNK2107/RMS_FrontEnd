import React from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import {
  CalendarDays,
  Star,
  Award,
  CreditCard,
  BedDouble,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function GuestDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rms-primary-600 via-rms-primary-700 to-rms-neutral-900 p-7 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rms-primary-400/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/8 rounded-full translate-y-1/3 -translate-x-1/4 blur-2xl" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Award size={18} className="text-amber-300" />
            <span className="text-xs font-semibold text-amber-300 tracking-wide uppercase">Gold Member</span>
          </div>
          <h1 className="text-2xl font-bold">Welcome back, Guest</h1>
          <p className="text-rms-primary-200 text-sm mt-1 max-w-md">
            Your next stay is just around the corner. Manage your reservations and explore resort amenities.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <div className="flex items-center gap-1.5 text-sm">
              <Star size={16} className="text-amber-300" />
              <span className="font-semibold">12,450</span>
              <span className="text-rms-primary-300 text-xs">points</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Upcoming Reservation */}
        <Card hover>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-rms-primary-50 flex items-center justify-center">
              <CalendarDays size={16} className="text-rms-primary-500" />
            </div>
            <h2 className="text-sm font-semibold text-rms-neutral-800">Upcoming Reservation</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-rms-neutral-500 flex items-center gap-1.5">
                <Clock size={12} /> Check-in
              </span>
              <span className="text-sm font-semibold text-rms-neutral-800">Oct 15, 2026</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-rms-neutral-500 flex items-center gap-1.5">
                <Clock size={12} /> Check-out
              </span>
              <span className="text-sm font-semibold text-rms-neutral-800">Oct 20, 2026</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-rms-neutral-500 flex items-center gap-1.5">
                <BedDouble size={12} /> Room
              </span>
              <span className="text-sm font-semibold text-rms-neutral-800">Ocean View Suite</span>
            </div>
          </div>
          <Button variant="secondary" fullWidth className="mt-5" size="sm">
            View Details <ArrowRight size={14} />
          </Button>
        </Card>

        {/* Profile Summary */}
        <Card hover>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
              <Award size={16} className="text-violet-500" />
            </div>
            <h2 className="text-sm font-semibold text-rms-neutral-800">Profile Summary</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-rms-neutral-500">Name</span>
              <span className="text-sm font-semibold text-rms-neutral-800">Guest User</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-rms-neutral-500">Membership</span>
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full ring-1 ring-amber-200">
                Gold Member
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-rms-neutral-500">Reward Points</span>
              <span className="text-sm font-semibold text-rms-primary-600">12,450</span>
            </div>
          </div>
          <Button variant="secondary" fullWidth className="mt-5" size="sm">
            Edit Profile <ArrowRight size={14} />
          </Button>
        </Card>

        {/* Billing */}
        <Card hover>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
              <CreditCard size={16} className="text-emerald-500" />
            </div>
            <h2 className="text-sm font-semibold text-rms-neutral-800">Billing</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-rms-neutral-500">Last Invoice</span>
              <span className="text-sm font-semibold text-rms-neutral-800">$2,450.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-rms-neutral-500">Status</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full ring-1 ring-emerald-200">
                Paid
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-rms-neutral-500">Payment Method</span>
              <span className="text-sm font-medium text-rms-neutral-600">•••• 4242</span>
            </div>
          </div>
          <Button variant="secondary" fullWidth className="mt-5" size="sm">
            View Invoices <ArrowRight size={14} />
          </Button>
        </Card>
      </div>
    </div>
  );
}

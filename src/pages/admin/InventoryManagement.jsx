import React from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { Search, Plus, Eye, ShoppingCart, AlertTriangle, Package, ArrowUpDown } from "lucide-react";

const inventoryItems = [
  { code: "INV-101", name: "Bath Towels", category: "Linens", quantity: 15, maxQty: 200, status: "Low Stock" },
  { code: "INV-102", name: "Bed Sheets (King)", category: "Linens", quantity: 8, maxQty: 150, status: "Critical" },
  { code: "INV-103", name: "Shampoo Bottles", category: "Amenities", quantity: 320, maxQty: 500, status: "In Stock" },
  { code: "INV-104", name: "Mini Soap Bars", category: "Amenities", quantity: 450, maxQty: 600, status: "In Stock" },
  { code: "INV-105", name: "Cleaning Solution", category: "Supplies", quantity: 45, maxQty: 100, status: "In Stock" },
];

const getStatusConfig = (status) => {
  const configs = {
    "In Stock": { style: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200", barColor: "bg-emerald-500" },
    "Low Stock": { style: "bg-amber-50 text-amber-700 ring-1 ring-amber-200", barColor: "bg-amber-500" },
    "Critical": { style: "bg-red-50 text-red-700 ring-1 ring-red-200", barColor: "bg-red-500" },
  };
  return configs[status] || configs["In Stock"];
};

export default function InventoryManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-rms-neutral-900">Inventory</h1>
          <p className="text-sm text-rms-neutral-500 mt-0.5">Track supplies and manage stock levels</p>
        </div>
        <Button>
          <Plus size={18} />
          Add Item
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-rms-neutral-200/60 p-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Package size={20} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-rms-neutral-500 font-medium">Total Items</p>
            <p className="text-lg font-bold text-rms-neutral-900">{inventoryItems.length}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-rms-neutral-200/60 p-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
            <AlertTriangle size={20} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-rms-neutral-500 font-medium">Low Stock</p>
            <p className="text-lg font-bold text-amber-600">{inventoryItems.filter(i => i.status === "Low Stock").length}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-rms-neutral-200/60 p-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
            <AlertTriangle size={20} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-rms-neutral-500 font-medium">Critical</p>
            <p className="text-lg font-bold text-red-600">{inventoryItems.filter(i => i.status === "Critical").length}</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rms-neutral-400" />
        <input
          type="text"
          placeholder="Search inventory…"
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-rms-neutral-200 rounded-xl placeholder:text-rms-neutral-400 focus:outline-none focus:ring-2 focus:ring-rms-primary-500/30 focus:border-rms-primary-400 transition-all duration-200"
        />
      </div>

      {/* Table */}
      <Card padding={false}>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-rms-neutral-100">
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Item</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Category</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Stock Level</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider">Status</th>
                <th className="px-5 py-3.5 text-xs font-semibold text-rms-neutral-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rms-neutral-100/80">
              {inventoryItems.map((item) => {
                const config = getStatusConfig(item.status);
                const pct = Math.round((item.quantity / item.maxQty) * 100);
                return (
                  <tr key={item.code} className="hover:bg-rms-neutral-50/60 transition-colors duration-150">
                    <td className="px-5 py-3.5">
                      <p className="text-sm font-medium text-rms-neutral-800">{item.name}</p>
                      <p className="text-xs text-rms-neutral-400 font-mono">{item.code}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-xs font-medium text-rms-neutral-600 bg-rms-neutral-100 px-2.5 py-1 rounded-md">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="w-32">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-semibold text-rms-neutral-700">{item.quantity}</span>
                          <span className="text-rms-neutral-400">/ {item.maxQty}</span>
                        </div>
                        <div className="h-1.5 bg-rms-neutral-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${config.barColor}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold ${config.style}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-rms-neutral-400 hover:text-rms-primary-600 hover:bg-rms-primary-50 rounded-lg transition-all duration-200" title="View">
                          <Eye size={16} />
                        </button>
                        <button className="p-1.5 text-rms-neutral-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200" title="Reorder">
                          <ShoppingCart size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

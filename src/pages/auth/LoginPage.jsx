import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../components/ui/Button";
import { Eye, EyeOff, LogIn, Info } from "lucide-react";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await login({ username, password });
      if (user.roles.includes("ADMIN")) {
        navigate("/admin/dashboard");
      } else if (user.roles.includes("EMPLOYEE")) {
        navigate("/employee/dashboard");
      } else {
        navigate("/guest/dashboard");
      }
    } catch (err) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Branding */}
      <div className="hidden lg:flex lg:w-[45%] relative bg-gradient-to-br from-rms-neutral-900 via-rms-primary-900 to-rms-neutral-900 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-rms-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rms-primary-400/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-emerald-400/6 rounded-full blur-2xl" />

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-rms-primary-400 to-emerald-300 bg-clip-text text-transparent">
                Serenity
              </span>
              <span className="text-white/60 font-normal ml-2">Resort</span>
            </h1>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Manage your
              <br />
              <span className="bg-gradient-to-r from-rms-primary-400 to-emerald-300 bg-clip-text text-transparent">
                resort operations
              </span>
              <br />
              with elegance.
            </h2>
            <p className="text-rms-neutral-400 text-lg max-w-md leading-relaxed">
              A premium management platform designed for modern hospitality. Streamline reservations, staff, and guest experiences.
            </p>
          </div>

          <div className="flex items-center gap-3 text-rms-neutral-500 text-sm">
            <div className="flex -space-x-2">
              {["bg-rms-primary-400", "bg-emerald-400", "bg-teal-400"].map((c, i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${c} ring-2 ring-rms-neutral-900 flex items-center justify-center text-xs font-bold text-white`}>
                  {["SR", "MK", "JP"][i]}
                </div>
              ))}
            </div>
            <span>Trusted by 200+ resort teams worldwide</span>
          </div>
        </div>
      </div>

      {/* Right Panel — Login Form */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-rms-neutral-50 via-white to-rms-neutral-100/60 p-6">
        <div className="w-full max-w-[400px]">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-10">
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-rms-primary-500 to-rms-primary-600 bg-clip-text text-transparent">Serenity</span>
              <span className="text-rms-neutral-400 font-normal ml-1.5">Resort</span>
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-rms-neutral-900">Welcome back</h2>
            <p className="text-rms-neutral-500 mt-1 text-sm">Sign in to your management portal</p>
          </div>

          {error && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200/60 text-red-600 rounded-xl text-sm flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <span className="text-red-500 text-xs font-bold">!</span>
              </div>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-rms-neutral-700 mb-1.5">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-rms-neutral-200 rounded-xl text-sm text-rms-neutral-800 placeholder:text-rms-neutral-400 focus:outline-none focus:ring-2 focus:ring-rms-primary-500/30 focus:border-rms-primary-400 transition-all duration-200"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-rms-neutral-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 pr-11 bg-white border border-rms-neutral-200 rounded-xl text-sm text-rms-neutral-800 placeholder:text-rms-neutral-400 focus:outline-none focus:ring-2 focus:ring-rms-primary-500/30 focus:border-rms-primary-400 transition-all duration-200"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-rms-neutral-400 hover:text-rms-neutral-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button type="submit" fullWidth disabled={loading} loading={loading}>
              <LogIn size={18} />
              {loading ? "Signing in…" : "Sign In"}
            </Button>
          </form>

          <div className="mt-8 p-4 bg-rms-primary-50/60 border border-rms-primary-100 rounded-xl">
            <div className="flex items-center gap-2 text-rms-primary-700 text-xs font-semibold mb-2">
              <Info size={14} />
              Demo Credentials
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { role: "Admin", user: "admin / admin" },
                { role: "Staff", user: "employee / employee" },
                { role: "Guest", user: "guest / guest" },
              ].map((cred) => (
                <div key={cred.role} className="bg-white/80 rounded-lg px-2.5 py-2 text-center">
                  <div className="font-semibold text-rms-neutral-700">{cred.role}</div>
                  <div className="text-rms-neutral-400 mt-0.5">{cred.user}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

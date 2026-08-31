import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen grid lg:grid-cols-2 relative overflow-hidden bg-black text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-fuchsia-600/25 rounded-full blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/10 shadow-2xl shadow-black/50 rounded-3xl p-8 sm:p-10 animate-fade-in-up">
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-3 group">
                <div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500
                  flex items-center justify-center shadow-lg shadow-violet-500/30
                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                >
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight mt-2 text-white">Welcome back</h1>
                <p className="text-white/45 text-sm">Sign in to continue to Clix Chat</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-control">
                <label className="label pb-1.5">
                  <span className="label-text font-medium text-sm text-white/80">Email</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="h-4.5 w-4.5 text-white/35 group-focus-within:text-violet-400 transition-colors" />
                  </div>
                  <input
                    type="email"
                    className="input w-full pl-10 h-12 rounded-xl bg-white/[0.03] border border-white/10 text-white
                    placeholder-white/25 focus:border-violet-400/60 focus:bg-white/[0.06] focus:outline-none
                    focus:ring-4 focus:ring-violet-500/10 transition-all duration-200"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label pb-1.5">
                  <span className="label-text font-medium text-sm text-white/80">Password</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Lock className="h-4.5 w-4.5 text-white/35 group-focus-within:text-violet-400 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input w-full pl-10 pr-11 h-12 rounded-xl bg-white/[0.03] border border-white/10 text-white
                    placeholder-white/25 focus:border-violet-400/60 focus:bg-white/[0.06] focus:outline-none
                    focus:ring-4 focus:ring-violet-500/10 transition-all duration-200"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-white/35
                    hover:text-violet-400 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn w-full h-12 rounded-xl border-none text-white
                bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-[length:200%_100%] bg-left
                hover:bg-right hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5
                active:translate-y-0 transition-all duration-500 mt-2"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-white/45 text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="text-violet-400 font-medium no-underline hover:underline">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex items-center justify-center relative animate-fade-in">
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm border-l

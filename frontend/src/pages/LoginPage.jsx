import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

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
    <div className="h-screen w-full flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Ambient glow behind the card */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/25 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-indigo-500/15 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-md mx-4">
        <div className="relative rounded-[2rem] p-10 backdrop-blur-2xl bg-white/[0.06] border border-white/[0.12] shadow-2xl shadow-black/60 overflow-hidden">
          {/* glass sheen highlight along the top */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.08] to-transparent" />

          {/* thin glowing side rails, like the reference */}
          <div className="pointer-events-none absolute -left-px top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-blue-400/70 to-transparent" />
          <div className="pointer-events-none absolute -right-px top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-blue-400/70 to-transparent" />

          <div className="relative text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-white">Log in</h1>
            <p className="text-white/50 text-sm mt-3 leading-relaxed px-2">
              Log in to your account and seamlessly continue managing your
              projects, ideas, and progress just where you left off.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Mail className="h-4.5 w-4.5 text-white/40" />
              </div>
              <input
                type="email"
                className="w-full h-14 pl-12 pr-5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/[0.12] text-white placeholder-white/35 focus:border-blue-400/60 focus:bg-white/[0.08] focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Lock className="h-4.5 w-4.5 text-white/40" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-14 pl-12 pr-12 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/[0.12] text-white placeholder-white/35 focus:border-blue-400/60 focus:bg-white/[0.08] focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-5 flex items-center text-blue-400/80 hover:text-blue-400 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full h-14 rounded-full font-semibold text-white bg-white/[0.09] backdrop-blur-md border border-white/[0.14] hover:bg-white/[0.14] active:scale-[0.99] transition-all duration-200 mt-2 flex items-center justify-center gap-2 disabled:opacity-60"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Log in"
              )}
            </button>
          </form>

          <div className="relative text-center mt-6">
            <p className="text-white/45 text-sm">
              Didn&apos;t have an account?{" "}
              <Link to="/signup" className="text-blue-400 font-medium no-underline hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

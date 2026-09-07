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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md mx-4">
        <div className="relative rounded-[2rem] p-10 bg-gradient-to-b from-[#151823] to-[#0a0b10] border border-white/10 shadow-2xl shadow-black/60">
          {/* thin glowing side rails, like the reference */}
          <div className="pointer-events-none absolute -left-px top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-blue-500/60 to-transparent" />
          <div className="pointer-events-none absolute -right-px top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-blue-500/60 to-transparent" />

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-white">Log in</h1>
            <p className="text-white/45 text-sm mt-3 leading-relaxed px-2">
              Log in to your account and seamlessly continue managing your
              projects, ideas, and progress just where you left off.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Mail className="h-4.5 w-4.5 text-white/35" />
              </div>
              <input
                type="email"
                className="w-full h-14 pl-12 pr-5 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder-white/35 focus:border-blue-400/60 focus:bg-white/[0.06] focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Lock className="h-4.5 w-4.5 text-white/35" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-14 pl-12 pr-12 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder-white/35 focus:border-blue-400/60 focus:bg-white/[0.06] focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
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
              className="w-full h-14 rounded-full font-semibold text-white bg-white/[0.08] border border-white/10 hover:bg-white/[0.12] active:scale-[0.99] transition-all duration-200 mt-2 flex items-center justify-center gap-2 disabled:opacity-60"
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

          {/* Social buttons — visual only, no backend wired */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <button
              type="button"
              className="h-12 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors flex items-center justify-center gap-2 text-sm text-white/80"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35C.594 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0" />
              </svg>
              Facebook
            </button>
            <button
              type="button"
              className="h-12 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors flex items-center justify-center gap-2 text-sm text-white/80"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.766 12.276c0-.818-.074-1.604-.21-2.36H12.24v4.466h6.482a5.54 5.54 0 0 1-2.401 3.632v3.017h3.887c2.275-2.095 3.558-5.18 3.558-8.755z" />
                <path fill="#34A853" d="M12.24 24c3.24 0 5.956-1.075 7.943-2.907l-3.887-3.017c-1.077.72-2.454 1.146-4.056 1.146-3.12 0-5.762-2.107-6.705-4.937H1.53v3.102A11.997 11.997 0 0 0 12.24 24z" />
                <path fill="#FBBC05" d="M5.535 14.285a7.2 7.2 0 0 1 0-4.57V6.613H1.53a12 12 0 0 0 0 10.774l4.005-3.102z" />
                <path fill="#EA4335" d="M12.24 4.773c1.762 0 3.344.606 4.588 1.795l3.442-3.442C18.19 1.19 15.475 0 12.24 0 7.462 0 3.334 2.7 1.53 6.613l4.005 3.102c.943-2.83 3.585-4.942 6.705-4.942z" />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="h-12 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors flex items-center justify-center gap-2 text-sm text-white/80"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.24-.02-.29-.03-.017-.06-.075-.35-.075-.65 0-1.11.507-2.24 1.19-3.02.744-.87 2.06-1.55 3.13-1.55.02.1.02.3.02.6zm-3.87 4.86c1.02 0 2.66-.53 3.62-1.32 1.36.13 2.54.86 3.34 2.05-2.86 1.7-2.4 5.79.44 7.15-.5 1.03-.75 1.42-1.34 2.29-.83 1.24-1.99 2.78-3.43 2.79-1.29.02-1.63-.83-3.4-.82-1.77.01-2.15.84-3.44.82-1.44-.02-2.52-1.4-3.35-2.63-2.4-3.53-2.7-7.68-1.2-9.87.99-1.49 2.57-2.35 4.03-2.35 1.56 0 2.5.85 3.72.84z" />
              </svg>
              Apple
            </button>
          </div>

          <div className="text-center mt-6">
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

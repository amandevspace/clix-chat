import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageCircle,
  Zap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

// Option A: image lives in /public (e.g. public/bg-wave.jpg) — no import needed:
const BG_IMAGE = "/bg-wave.jpg";

// Option B: image lives in src/assets — comment out the line above and use this instead:
// import BG_IMAGE from "../assets/bg-wave.jpg";

const Logo = ({ small }) => (
  <div className={`flex items-center gap-3 ${small ? "" : "mb-11"}`}>
    <div className={`flex items-end gap-[3px] ${small ? "h-[22px]" : "h-[26px]"}`}>
      <span className="w-[5px] h-[45%] rounded-sm bg-gradient-to-b from-sky-300 to-blue-500 shadow-[0_0_8px_rgba(60,150,255,0.7)]" />
      <span className="w-[5px] h-full rounded-sm bg-gradient-to-b from-sky-300 to-blue-500 shadow-[0_0_8px_rgba(60,150,255,0.7)]" />
      <span className="w-[5px] h-[70%] rounded-sm bg-gradient-to-b from-sky-300 to-blue-500 shadow-[0_0_8px_rgba(60,150,255,0.7)]" />
      <span className="w-[5px] h-[85%] rounded-sm bg-gradient-to-b from-sky-300 to-blue-500 shadow-[0_0_8px_rgba(60,150,255,0.7)]" />
    </div>
    <span className={`font-extrabold tracking-tight ${small ? "text-[22px]" : "text-[26px]"}`}>
      Clix <span className="text-sky-400">Chat</span>
    </span>
  </div>
);

const features = [
  { icon: MessageCircle, title: "Natural Conversations", desc: "Get clear and helpful answers" },
  { icon: Zap, title: "Fast Responses", desc: "Powered by advanced AI models" },
  { icon: ShieldCheck, title: "Your Chats, Your Privacy", desc: "Secure and private by default" },
];

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
    <div
      className="min-h-screen w-full bg-[#050710] text-white relative overflow-hidden flex items-center justify-center lg:justify-between px-6 sm:px-10 lg:px-20 py-12 gap-10"
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional dark overlay for text contrast — tune the alpha to taste */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-black/40 via-black/10 to-black/40" />

      {/* Hero panel */}
      <div className="relative z-10 hidden lg:block max-w-lg">
        <Logo />
        <p className="text-[12.5px] tracking-[3px] text-white/40 font-semibold mb-4">
          SIMPLE &nbsp;&middot;&nbsp; FAST &nbsp;&middot;&nbsp; INTELLIGENT
        </p>
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
          A Smarter Way
          <br />
          to{" "}
          <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
            Chat
          </span>
        </h1>
        <p className="text-white/55 text-[16.5px] leading-relaxed max-w-md mb-10">
          Have meaningful conversations, get instant answers, and explore
          ideas with the power of AI — all in one place.
        </p>

        <div className="flex flex-col gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="flex-none w-11 h-11 rounded-[10px] bg-blue-500/[0.08] border border-blue-400/25 flex items-center justify-center text-sky-300">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-[15.5px] font-bold">{title}</div>
                <div className="text-[13.5px] text-white/40">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Login card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-[22px] p-10 backdrop-blur-2xl bg-[rgba(10,16,30,0.55)] border border-sky-400/25 shadow-2xl shadow-black/60">
          <div className="flex justify-center mb-6 lg:hidden">
            <Logo small />
          </div>

          <div className="text-center mb-7">
            <h2 className="text-[28px] font-extrabold tracking-tight">Welcome Back</h2>
            <p className="text-white/50 text-sm mt-1.5">
              Sign in to continue to Clix Chat
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-[18px] w-[18px] text-white/35" />
              </div>
              <input
                type="email"
                className="w-full h-[52px] pl-11 pr-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/35 focus:border-sky-400/50 focus:bg-white/[0.05] focus:outline-none transition-all duration-150"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-[18px] w-[18px] text-white/35" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-[52px] pl-11 pr-11 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/35 focus:border-sky-400/50 focus:bg-white/[0.05] focus:outline-none transition-all duration-150"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/35 hover:text-white/60 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
              </button>
            </div>

            <div className="flex items-center justify-between text-[13.5px] pt-1 pb-1">
              <label className="flex items-center gap-2 text-white/80 cursor-pointer select-none">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-[18px] h-[18px] rounded-[5px] accent-blue-500 cursor-pointer"
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-sky-400 font-medium hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full h-[52px] rounded-xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow-[0_12px_30px_rgba(25,110,255,0.35)] hover:shadow-[0_16px_36px_rgba(25,110,255,0.45)] hover:-translate-y-px active:scale-[0.99] transition-all duration-150 flex items-center justify-center gap-2 disabled:opacity-60"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={16} strokeWidth={2} />
                </>
              )}
            </button>
          </form>

          <div className="h-px bg-white/[0.08] my-6" />

          <p className="text-center text-[13.5px] text-white/50">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-sky-400 font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

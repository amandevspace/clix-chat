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
    <div className="h-screen grid lg:grid-cols-2 relative overflow-hidden bg-base-100">
      {/* Ambient animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Glass card */}
          <div className="backdrop-blur-xl bg-base-100/60 border border-base-content/10 shadow-2xl shadow-primary/5 rounded-3xl p-8 sm:p-10 animate-fade-in-up">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-3 group">
                <div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary
                  flex items-center justify-center shadow-lg shadow-primary/30
                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                >
                  <MessageSquare className="w-7 h-7 text-primary-content" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight mt-2">Welcome Back</h1>
                <p className="text-base-content/50 text-sm">Sign in to continue to Clix Chat</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-control">
                <label className="label pb-1.5">
                  <span className="label-text font-medium text-sm">Email</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="h-4.5 w-4.5 text-base-content/35 group-focus-within:text-primary transition-colors" />
                  </div>
                  <input
                    type="email"
                    className="input w-full pl-10 h-12 rounded-xl bg-base-200/50 border border-base-content/10
                    focus:border-primary focus:bg-base-100 focus:outline-none focus:ring-4 focus:ring-primary/10
                    transition-all duration-200"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label pb-1.5">
                  <span className="label-text font-medium text-sm">Password</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Lock className="h-4.5 w-4.5 text-base-content/35 group-focus-within:text-primary transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input w-full pl-10 pr-11 h-12 rounded-xl bg-base-200/50 border border-base-content/10
                    focus:border-primary focus:bg-base-100 focus:outline-none focus:ring-4 focus:ring-primary/10
                    transition-all duration-200"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-base-content/35
                    hover:text-primary transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn w-full h-12 rounded-xl border-none text-primary-content
                bg-gradient-to-r from-primary to-secondary bg-[length:200%_100%] bg-left
                hover:bg-right hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5
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
              <p className="text-base-content/60 text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="link link-primary font-medium no-underline hover:underline">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <div className="hidden lg:block animate-fade-in">
        <AuthImagePattern
          title={"Welcome back!"}
          subtitle={"Sign in to continue your conversations and catch up with your messages."}
        />
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 10s infinite ease-in-out; }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out both; }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 1s ease-out both; }
      `}</style>
    </div>
  );
};
export default LoginPage;

import React, { useState, useEffect } from "react";
import { Lock, ShieldCheck, KeyRound } from "lucide-react";

interface SplashScreenProps {
  onFinish?: () => void;
  duration?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  duration = 2400,
}) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Secure Storage...");
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 35) {
        setStatusText("Initializing End-to-End Encryption...");
      } else if (pct < 70) {
        setStatusText("Securing AES-256 Client Keys...");
      } else if (pct < 95) {
        setStatusText("Establishing Zero-Knowledge Vault...");
      } else {
        setStatusText("Vault Ready!");
      }

      if (pct >= 100) {
        clearInterval(interval);
        setIsFadingOut(true);
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 500); // 500ms fade transition duration
      }
    }, 40);

    return () => clearInterval(interval);
  }, [duration, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-500 selection:bg-none ${isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 animate-pulse pointer-events-none" />

      {/* Animated Glowing Security Rings */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer Pulsing Ring */}
        <div className="absolute w-36 h-36 rounded-full border border-blue-500/20 animate-ping" />
        <div className="absolute w-48 h-48 rounded-full border border-indigo-500/10 animate-pulse" />

        {/* Logo Container */}
        <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-[2px] shadow-[0_0_50px_rgba(37,99,235,0.4)] animate-bounce duration-1000">
          <div className="w-full h-full bg-slate-900/90 rounded-[22px] flex items-center justify-center backdrop-blur-xl">
            <Lock className="w-12 h-12 text-blue-400 animate-pulse" />
          </div>
        </div>
      </div>

      {/* App Branding */}
      <div className="text-center space-y-2 z-10">
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
          SecureVault
        </h1>
        <p className="text-xs uppercase tracking-[0.3em] font-semibold text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          End-to-End Encrypted Platform
        </p>
      </div>

      {/* Progress & Status */}
      <div className="w-72 mt-10 space-y-3 z-10">
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-xs text-slate-400 font-medium px-1">
          <span className="flex items-center gap-1.5">
            <KeyRound className="w-3.5 h-3.5 text-blue-400 animate-spin" />
            {statusText}
          </span>
          <span className="text-blue-400 font-mono font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

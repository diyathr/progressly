"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WelcomePage() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  const goToLogin = () => {
    setLeaving(true);
    setTimeout(() => router.push("/login"), 450);
  };

  return (
    <div className="min-h-screen w-full">
      {/* No black border/frame */}
      <div className="relative min-h-screen w-full overflow-hidden isolate">
        {/* Background */}
        <Image
          src="/bg.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Soft blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/10" />

        {/* Content layer */}
<div
  className={[
    "relative z-10 h-screen w-full flex items-center justify-center",
    "transition-all duration-500 ease-in-out",
    leaving
      ? "-translate-x-[110%] opacity-0 blur-sm"
      : "translate-x-0 opacity-100 blur-0",
  ].join(" ")}
>
            <div className="flex items-center justify-center gap-10">
                {/* Bigger Logo */}
                <Image
                src="/logo.png"
                alt="Progressly Logo"
                width={720}
                height={240}
                priority
                className="select-none"
                />

                {/* Bigger Arrow */}
                <button
                type="button"
                onClick={goToLogin}
                className="cursor-pointer group grid place-items-center h-24 w-24 rounded-full bg-[#163a59] shadow-xl hover:scale-[1.03] active:scale-[0.98] transition"
                aria-label="Go to login"
                >
                <ArrowRight
                    size={40}
                    className="text-white/90 group-hover:text-white transition"
                />
                </button>
            </div>
            </div>

        {/* Optional small label */}
        <div className="absolute left-6 top-4 z-20 text-xs text-white/60">
          Welcome
        </div>
      </div>
    </div>
  );
}

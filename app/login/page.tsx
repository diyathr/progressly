"use client";

import Link from "next/link";
import Image from "next/image";
import { User, KeyRound, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function LoginPage() {
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setEnter(true));
  }, []);

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

        {/* Tint overlay (make it NOT block clicks) */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/10" />
{/* ENTER ANIMATION WRAPPER */}
        <div
          className={[
            "mix-blend-darken relative z-20 w-full transition-all duration-500 ease-out",
            enter ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
          ].join(" ")}
        >
          {/* Main layout */}
          <div className="mx-auto flex min-h-screen max-w-[1400px] items-center px-8">
            {/* Left illustration */}
            <div className="hidden lg:flex w-1/2 justify-center">
              <Image
            src="/art.png"
            alt="Art"
            width={1536}
            height={1024}
            priority
            quality={100}
            sizes="560px"
            className="block h-auto w-auto"
            draggable={false}
          />
            </div>
        {/* Logo (clickable) */}
        <Link
          href="/welcome"
          className="mix-blend-darken absolute left-8 top-6 z-[999] inline-block cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="Progressly Logo"
            width={170}
            height={60}
            priority
            className="block"
          />
        </Link>

        
            {/* Login card */}
            <div className="flex w-full lg:w-1/2 justify-center">
              <div className="w-[440px] max-w-[92vw]">
                <div className="relative rounded-2xl border border-white/35 bg-white/18 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
                    <button
                    type="button"
                    aria-label="Close"
                    className="cursor-pointer absolute right-3 top-3 h-8 w-8 rounded-full border border-black/10 bg-white/25 text-slate-700
                              flex items-center justify-center
                              transition-all duration-200 ease-out
                              hover:bg-white/35 hover:scale-110"
                  >
                    <X className="transition-transform duration-200 ease-out hover:rotate-90" size={18} strokeWidth={2} />
                  </button>
                  <div className="px-10 pb-10 pt-12">
                    {/* Avatar icon (no box) */}
                    <div className="mx-auto mb-6 flex items-center justify-center">
                      <User size={96} className="text-slate-700" strokeWidth={1.4} />
                    </div>

                    <h1 className="text-center text-3xl font-extrabold text-slate-800">
                      WELCOME!
                    </h1>

                    <div className="mt-8 space-y-5">
                      {/* Username */}
                      <div className="flex items-center gap-3 rounded-full border border-white/45 bg-white/30 px-5 py-3 shadow-sm">
                        <User size={20} className="text-slate-600" />
                        <input
                          className="w-full bg-transparent outline-none placeholder:text-slate-500 text-slate-800"
                          placeholder="Username"
                          type="text"
                        />
                      </div>

                      {/* Password */}
                      <div className="flex items-center gap-3 rounded-full border border-white/45 bg-white/30 px-5 py-3 shadow-sm">
                        <KeyRound size={18} className="text-slate-600" />
                        <input
                          className="w-full bg-transparent outline-none placeholder:text-slate-500 text-slate-800"
                          placeholder="Password"
                          type="password"
                        />
                      </div>

                      {/* Login */}
                      <button
                        type="button"
                        className="cursor-pointer mx-auto mt-2 flex w-44 items-center justify-center gap-2 rounded-full border border-slate-300/60 bg-white/28 px-6 py-3 font-semibold text-slate-800 shadow-md hover:bg-white/45 active:scale-[0.99]"
                      >
                        <ArrowRight size={18} className="text-slate-700" />
                        Login
                      </button>

                      <div className="pt-3 text-right">
                        <a
                          href="#"
                          className="text-xs text-slate-600 hover:text-slate-800"
                        >
                          Need help?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end layout */}
          </div>
        </div>
      </div>
    </div>
  );
}

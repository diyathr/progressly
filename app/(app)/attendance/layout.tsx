"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Anchor,
  History,
  OctagonMinus,
} from "lucide-react";

function formatTime(d: Date) {
  return d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function AttendanceLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // ✅ keep time/avatar in academics (optional). If you don’t want it, delete this block.
  const [time, setTime] = useState(formatTime(new Date()));
  useEffect(() => {
    const t = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(t);
  }, []);

  const nav = [
    { href: "/attendance/overview", label: "Attendance Overview", icon: <Anchor size={26} className="text-black" /> },
    { href: "/attendance/daily-history", label: "Daily History", icon: <History size={26} className="text-black" /> },
    { href: "/attendance/leave-requests", label: "Leave Requests", icon: <OctagonMinus size={26} className="text-black" /> },
  ];


  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        {/* Left grey sidebar */}
        <aside className="w-[340px] bg-[#D9D9D9] rounded-tr-[48px] rounded-br-[48px] px-10 py-10">
          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/progressly-logo.png"
              alt="Progressly"
              width={220}
              height={70}
              priority
              className="mix-blend-multiply h-auto w-[220px] object-contain"
            />
          </div>

          {/* Sub nav */}
          <nav className="flex flex-col gap-10 mt-10">
            {nav.map((item) => {
              // ✅ important: keep highlight active for nested routes
              const active = pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link key={item.href} href={item.href} className="relative block">
                  {active && (
                    <motion.div
                      layoutId="activePill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 bg-white shadow-sm rounded-l-full rounded-r-none w-[calc(100%+40px)] -mr-10"
                    />
                  )}

                  <div
  className={[
    "relative z-10 flex items-center gap-6 text-[#0f172a] font-semibold",
    active ? "px-8 py-5" : "px-2 py-3 opacity-90 hover:opacity-100",
  ].join(" ")}
>
  <span className="shrink-0">{item.icon}</span>

  {/* ✅ keep text in one line without changing sidebar width */}
  <span className="flex-1 min-w-0 whitespace-nowrap">
    {item.label}
  </span>
</div>

                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main area */}
        <main className="flex-1 relative px-14 pt-6 pb-10 bg-white">
          {/* Optional: top right time + avatar */}
          <div className="absolute right-10 top-6 flex items-center gap-6">
            <div className="text-lg font-bold text-[#0f172a]">{time}</div>
            <Link href="/account" className="group">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-200 group-hover:ring-black/10 transition">
              <Image
                src="/avatar icon.avif"
                alt="User avatar"
                width={48}
                height={48}
                className="h-full w-full object-cover"
                priority
              />    
            </div>
            </Link>
          </div>

          {/* Page content ONLY */}
          <div className="pt-10">{children}</div>
        </main>
      </div>
    </div>
  );
}

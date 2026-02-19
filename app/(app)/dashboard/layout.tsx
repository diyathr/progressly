"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LayoutGrid, BarChart3, Target, Bell } from "lucide-react";

function formatTime(d: Date) {
  return d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "GOOD MORNING";
  if (hour < 18) return "GOOD AFTERNOON";
  return "GOOD EVENING";
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [time, setTime] = useState(formatTime(new Date()));
  const username = "DUMIDU";

  useEffect(() => {
    const t = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(t);
  }, []);

  // ✅ Dashboard sub-navigation (grey sidebar)
  const nav = [
    {
      href: "/dashboard",
      label: "Overview",
      icon: <LayoutGrid size={26} className="text-black" />,
    },
    {
      href: "/dashboard/progress-summary",
      label: "Progress",
      icon: <BarChart3 size={26} className="text-black" />,
    },
    {
      href: "/dashboard/upcoming-classes",
      label: "Upcoming classes",
      icon: <Target size={26} className="text-black" />,
    },
    {
      href: "/dashboard/notifications",
      label: "Notifications",
      icon: <Bell size={26} className="text-black" />,
    },
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

          {/* Nav */}
          <nav className="flex flex-col gap-10 mt-10">
            {nav.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative block"
                >
                  {/* The animated background */}
                  {active && (
                    <motion.div
                      layoutId="activePill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 bg-white shadow-sm rounded-l-full rounded-r-none w-[calc(100%+40px)] -mr-10"
                    />
                  )}

                  {/* Content stays above the animated background */}
                  <div
                    className={[
                      "relative z-10 flex items-center gap-6 text-[#0f172a] font-semibold",
                      active ? "px-8 py-5" : "px-2 py-3 opacity-90 hover:opacity-100",
                    ].join(" ")}
                  >
                    <span className="text-[#0f172a]">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </nav>

        </aside>
        {/* Main area */}
        <main className="flex-1 relative px-14 py-10 bg-white">
          {/* top right time + avatar */}
          <div className="absolute right-10 top-6 flex items-center gap-6">
            <div className="text-lg font-bold text-[#0f172a]">{time}</div>

            <Link href="/account" className="group">
              <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-200 ring-2 ring-transparent group-hover:ring-black/10 transition">
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

          {/* greeting */}
          <h1 className="mt-12 text-center text-3xl font-extrabold tracking-wide text-black">
            HI, {getGreeting()} {username}!
          </h1>

          {/* page content */}
          <div className="mt-16">{children}</div>
        </main>
      </div>
    </div>
  );
}

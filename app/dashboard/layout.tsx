"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  GraduationCap,
  CalendarCheck2,
  FileText,
  Library,
  CreditCard,
  LifeBuoy,
  Settings,
} from "lucide-react";


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

  const nav = [
    { href: "/dashboard", label: "Overview", icon: <OverviewIcon /> },
    {
      href: "/dashboard/progress-summary",
      label: "Progress",
      icon: <ProgressIcon />,
    },
    {
      href: "/dashboard/upcoming-classes",
      label: "Upcoming classes",
      icon: <TargetIcon />,
    },
    { href: "/dashboard/notifications", label: "Notifications", icon: <WaveIcon /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        {/* Left dark bar */}
        <aside className="w-20 bg-[#163B57] flex flex-col items-center py-10">
          {/* Spacer to align with logo + nav spacing in grey sidebar */}
          <div className="h-[20px]" />

          <div className="flex flex-col gap-8">
            <DarkNavIcon
              label="Dashboards"
              href="/dashboard"
              active={pathname.startsWith("/dashboard")}
              icon={<LayoutDashboard size={28} color="white" />}
            />

            <DarkNavIcon
              label="Academics"
              href="/academics"
              active={pathname.startsWith("/academics")}
              icon={<GraduationCap size={28} color="white" />}
            />

            <DarkNavIcon
              label="Attendance"
              href="/attendance"
              active={pathname.startsWith("/attendance")}
              icon={<CalendarCheck2 size={28} color="white" />}
            />

            <DarkNavIcon
              label="Reports"
              href="/reports"
              active={pathname.startsWith("/reports")}
              icon={<FileText size={28} color="white" />}
            />

            <DarkNavIcon
              label="Learning resources"
              href="/learning-resources"
              active={pathname.startsWith("/learning-resources")}
              icon={<Library size={28} color="white" />}
            />

            <DarkNavIcon
              label="Payments"
              href="/payments"
              active={pathname.startsWith("/payments")}
              icon={<CreditCard size={28} color="white" />}
            />

            <DarkNavIcon
              label="Support"
              href="/support"
              active={pathname.startsWith("/support")}
              icon={<LifeBuoy size={28} color="white" />}
            />

            <DarkNavIcon
              label="Settings"
              href="/settings"
              active={pathname.startsWith("/settings")}
              icon={<Settings size={28} color="white" />}
            />

          </div>
        </aside>


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
            <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-200">
              <Image
                src="/avatar icon.avif"
                alt="User avatar"
                width={48}
                height={48}
                className="h-full w-full object-cover"
                priority
              />
            </div>

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

/* ---------- tiny components ---------- */

function IconButton({
  children,
  title,
  active,
}: {
  children: React.ReactNode;
  title: string;
  active?: boolean;
}) {
  return (
    <button
      aria-label={title}
      title={title}
      className={[
        "relative h-14 w-14 rounded-2xl flex items-center justify-center hover:bg-white/10",
        active ? "bg-white/10" : "",
      ].join(" ")}
    >
      {/* left white vertical indicator */}
      {active && (
        <span className="absolute left-[-12px] top-1/2 -translate-y-1/2 h-10 w-1.5 rounded-full bg-white" />
      )}
      {children}
    </button>
  );
}

function DashboardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h7v7H4V4Z" stroke="white" strokeWidth="1.8" />
      <path d="M13 4h7v4h-7V4Z" stroke="white" strokeWidth="1.8" />
      <path d="M13 10h7v10h-7V10Z" stroke="white" strokeWidth="1.8" />
      <path d="M4 13h7v7H4v-7Z" stroke="white" strokeWidth="1.8" />
    </svg>
  );
}

function AcademicsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 7l9-4 9 4-9 4-9-4Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 10v5c0 2 3 4 6 4s6-2 6-4v-5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AttendanceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M7 4v2M17 4v2" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 7h14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M6 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="white"
        strokeWidth="1.8"
      />
      <path
        d="M9 13l2 2 4-5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReportsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="white"
        strokeWidth="1.8"
      />
      <path d="M14 3v4h4" stroke="white" strokeWidth="1.8" />
      <path d="M8 12h8M8 16h8" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ResourcesIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z"
        stroke="white"
        strokeWidth="1.8"
      />
      <path
        d="M18 3a2 2 0 0 1 2 2v16a2 2 0 0 0-2-2h-2"
        stroke="white"
        strokeWidth="1.8"
      />
      <path d="M8 8h6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PaymentsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
        stroke="white"
        strokeWidth="1.8"
      />
      <path d="M2 11h20" stroke="white" strokeWidth="1.8" />
      <path d="M7 16h4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3a7 7 0 0 0-7 7v3a3 3 0 0 0 3 3h1v-6H8"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 3a7 7 0 0 1 7 7v3a3 3 0 0 1-3 3h-1v-6h3"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 19c.7 1.2 2 2 3 2s2.3-.8 3-2"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        stroke="white"
        strokeWidth="1.8"
      />
      <path
        d="M19.4 15a8.3 8.3 0 0 0 .1-2l2-1.2-2-3.5-2.2.7a7.7 7.7 0 0 0-1.7-1l-.3-2.3H10.6l-.3 2.3a7.7 7.7 0 0 0-1.7 1l-2.2-.7-2 3.5 2 1.2a8.3 8.3 0 0 0 .1 2l-2 1.2 2 3.5 2.2-.7c.5.4 1.1.8 1.7 1l.3 2.3h4.1l.3-2.3c.6-.2 1.2-.6 1.7-1l2.2.7 2-3.5-2-1.2Z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function DarkNavIcon({
  label,
  icon,
  active,
  href,
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  href: string;
}) {
  return (
    <div className="relative group z-0">
      {/* active indicator */}
      {active && (
        <span className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-10 w-1.5 rounded-full bg-white" />
      )}

      <Link
        href={href}
        aria-label={label}
        className={[
          "h-14 w-14 rounded-2xl flex items-center justify-center",
          "hover:bg-white/10 transition",
          active ? "bg-white/10" : "",
        ].join(" ")}
      >
        {icon}
      </Link>

      {/* tooltip */}
      {/* tooltip */}
      <div
        className={[
          "pointer-events-none absolute left-[70px] top-1/2 -translate-y-1/2",
          "opacity-0 group-hover:opacity-100 transition",
          "bg-black/80 text-white text-xs font-semibold px-3 py-2 rounded-lg",
          "whitespace-nowrap shadow-lg",
          "z-[9999]", // always above everything
        ].join(" ")}
      >
        {label}
      </div>

    </div>
  );
}



/* ---------- Grey sidebar icons (black) ---------- */

function OverviewIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M7 7h10v10H7V7Z" stroke="black" strokeWidth="1.8" />
      <path d="M7 12h10" stroke="black" strokeWidth="1.8" />
    </svg>
  );
}

function ProgressIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4"
        stroke="black"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M8 8h8v8H8V8Z" stroke="black" strokeWidth="1.8" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="black" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="1.8" />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 14c2.5 0 2.5-4 5-4s2.5 4 5 4 2.5-4 5-4"
        stroke="black"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- Dark bar icons (white) ---------- */

function OverviewIconWhite() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M7 7h10v10H7V7Z" stroke="white" strokeWidth="1.8" />
      <path d="M7 12h10" stroke="white" strokeWidth="1.8" />
    </svg>
  );
}

function ProgressIconWhite() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M8 8h8v8H8V8Z" stroke="white" strokeWidth="1.8" />
    </svg>
  );
}

function TargetIconWhite() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.8" />
    </svg>
  );
}

function WaveIconWhite() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 14c2.5 0 2.5-4 5-4s2.5 4 5 4 2.5-4 5-4"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

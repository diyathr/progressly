"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
  LayoutGrid,
  ClipboardList,
  BadgeCheck,
  BookOpen,
  ListChecks,
  MessageSquareText,
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

export default function AcademicsLayout({
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

  // ✅ Academics sub-navigation (grey sidebar)
  const nav = [
    {
      href: "/academics",
      label: "Overview",
      icon: <LayoutGrid size={26} className="text-black" />,
    },
    {
      href: "/academics/assessments",
      label: "Assessments",
      icon: <ClipboardList size={26} className="text-black" />,
    },
    {
      href: "/academics/marks-grades",
      label: "Marks & Grades",
      icon: <BadgeCheck size={26} className="text-black" />,
    },
    {
      href: "/academics/subjects-classes",
      label: "Subjects & Classes",
      icon: <BookOpen size={26} className="text-black" />,
    },
    {
      href: "/academics/syllabus-topics",
      label: "Syllabus & Topics",
      icon: <ListChecks size={26} className="text-black" />,
    },
    {
      href: "/academics/teacher-feedback",
      label: "Teacher Feedback",
      icon: <MessageSquareText size={26} className="text-black" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        {/* Left dark bar */}
        <aside className="w-20 bg-[#163B57] flex flex-col items-center py-10">
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
              // ✅ stays active for subroutes too
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link key={item.href} href={item.href} className="relative block">
                  {/* Animated background pill */}
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
                      active
                        ? "px-8 py-5"
                        : "px-2 py-3 opacity-90 hover:opacity-100",
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

/* ---------- Dark bar nav icon (with tooltip) ---------- */

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
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  function onEnter(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      top: rect.top + rect.height / 2,
      left: rect.right + 12,
    });
    setShow(true);
  }

  function onLeave() {
    setShow(false);
  }

  return (
    <>
      <Link
        href={href}
        aria-label={label}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={[
          "relative h-14 w-14 rounded-2xl flex items-center justify-center",
          "hover:bg-white/10 transition",
          active ? "bg-white/10" : "",
        ].join(" ")}
      >
        {active && (
          <span className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-10 w-1.5 rounded-full bg-white" />
        )}
        {icon}
      </Link>

      {show && (
        <div
          style={{ top: pos.top, left: pos.left }}
          className={[
            "fixed -translate-y-1/2",
            "bg-black/80 text-white text-xs font-semibold",
            "px-3 py-2 rounded-lg whitespace-nowrap shadow-lg",
            "z-[99999] pointer-events-none",
          ].join(" ")}
        >
          {label}
        </div>
      )}
    </>
  );
}

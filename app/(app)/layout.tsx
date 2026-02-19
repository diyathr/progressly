"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

export default function AppShellLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        {/* ✅ Universal Dark Bar ONLY */}
        <aside className="w-20 bg-[#163B57] flex flex-col items-center py-10">
          <div className="h-[20px]" />
          <div className="flex flex-col gap-8">
            <DarkNavIcon
              label="Dashboards"
              href="/dashboard/overview"
              active={pathname.startsWith("/dashboard")}
              icon={<LayoutDashboard size={28} color="white" />}
            />
            <DarkNavIcon
              label="Academics"
              href="/academics/assessments"
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

        {/* ✅ Content only */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
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
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  function onEnter(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ top: rect.top + rect.height / 2, left: rect.right + 12 });
    setShow(true);
  }

  return (
    <>
      <Link
        href={href}
        aria-label={label}
        onMouseEnter={onEnter}
        onMouseLeave={() => setShow(false)}
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
          className="fixed -translate-y-1/2 bg-black/80 text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap shadow-lg z-[99999] pointer-events-none"
        >
          {label}
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function formatTime(d: Date) {
  return d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function AccountPage() {
  const pathname = usePathname();

  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const t = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(t);
  }, []);

  // demo user data (replace with real user later)
  const [fullName, setFullName] = useState("Dumidu");
  const [email, setEmail] = useState("dumidu@example.com");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [bio, setBio] = useState("");

  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifs, setEmailNotifs] = useState(true);

  function saveProfile() {
    alert("Saved (demo). Connect this to your backend later.");
  }
  function changePassword(e: React.FormEvent) {
    e.preventDefault();
    alert("Password change (demo). Connect to auth later.");
  }
  function signOut() {
    alert("Sign out (demo). Hook into your auth later.");
  }

  const headerNav = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/account", label: "Account" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-6xl px-10 py-4 flex items-center justify-between">
          {/* Left: logo */}
          <Link href="/dashboard" className="flex items-center gap-3">
            <Image
              src="/progressly-logo.png"
              alt="Progressly"
              width={160}
              height={48}
              priority
              className="mix-blend-multiply h-auto w-[160px] object-contain"
            />
          </Link>

          {/* Center: nav */}
          <nav className="hidden md:flex items-center gap-2">
            {headerNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "px-4 py-2 rounded-full font-semibold transition",
                    active ? "bg-black text-white" : "text-black/70 hover:bg-black/5",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: time + avatar */}
          <div className="flex items-center gap-5">
            <div className="text-lg font-bold text-[#0f172a]">{time}</div>
            <Link href="/account" className="group">
              <div className="h-11 w-11 rounded-full overflow-hidden bg-slate-200 ring-2 ring-transparent group-hover:ring-black/10 transition">
                <Image
                  src="/avatar icon.avif"
                  alt="User avatar"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden px-10 pb-4 flex gap-2">
          {headerNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "flex-1 text-center px-3 py-2 rounded-full font-semibold transition",
                  active ? "bg-black text-white" : "text-black/70 hover:bg-black/5",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </header>

      {/* Page body */}
      <div className="px-10 py-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-extrabold text-black">Account</h1>
          <p className="mt-2 text-black/60">
            Manage your profile, preferences, and security settings.
          </p>

          {/* Profile card */}
          <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="h-20 w-20 rounded-full overflow-hidden bg-slate-200">
                <Image
                  src="/avatar icon.avif"
                  alt="Profile photo"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="text-xl font-bold text-black">{fullName}</div>
                <div className="text-black/60">{email}</div>
                <div className="mt-3">
                  <button
                    className="rounded-full bg-black px-4 py-2 text-white font-semibold hover:bg-black/90"
                    onClick={() => alert("Later: open upload modal")}
                  >
                    Change photo
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Full name">
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                  placeholder="name@email.com"
                />
              </Field>

              <Field label="Phone (optional)">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                  placeholder="+94..."
                />
              </Field>

              <Field label="Institute / School (optional)">
                <input
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                  placeholder="Your institute"
                />
              </Field>

              <div className="md:col-span-2">
                <Field label="Bio (optional)">
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30 min-h-[110px]"
                    placeholder="A short bio..."
                  />
                </Field>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={saveProfile}
                className="rounded-full bg-[#163B57] px-5 py-2.5 text-white font-semibold hover:opacity-95"
              >
                Save changes
              </button>
              <button
                onClick={() => window.location.reload()}
                className="rounded-full border border-black/10 px-5 py-2.5 font-semibold text-black hover:bg-black/5"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Preferences */}
          <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-black">Preferences</h2>

            <div className="mt-5 space-y-4">
              <ToggleRow
                title="Dark mode"
                description="Switch theme (wire this to Tailwind theme later)."
                checked={darkMode}
                onChange={setDarkMode}
              />
              <ToggleRow
                title="Email notifications"
                description="Receive important updates by email."
                checked={emailNotifs}
                onChange={setEmailNotifs}
              />
            </div>
          </div>

          {/* Security */}
          <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-black">Security</h2>

            <form
              onSubmit={changePassword}
              className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <Field label="Current password">
                <input
                  type="password"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                  placeholder="••••••••"
                />
              </Field>

              <Field label="New password">
                <input
                  type="password"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
                  placeholder="••••••••"
                />
              </Field>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="rounded-full bg-black px-5 py-2.5 text-white font-semibold hover:bg-black/90"
                >
                  Change password
                </button>
              </div>
            </form>
          </div>

          {/* Danger zone */}
          <div className="mt-8 rounded-3xl border border-red-500/20 bg-red-50 p-6">
            <h2 className="text-xl font-extrabold text-red-700">Danger zone</h2>
            <p className="mt-2 text-red-700/70">
              Be careful — these actions can’t be undone.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={signOut}
                className="rounded-full bg-[#163B57] px-5 py-2.5 text-white font-semibold hover:opacity-95"
              >
                Sign out
              </button>

              <button
                onClick={() => alert("Delete account (demo). Hook to backend later.")}
                className="rounded-full bg-red-600 px-5 py-2.5 text-white font-semibold hover:bg-red-700"
              >
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-bold text-black/70">{label}</div>
      {children}
    </label>
  );
}

function ToggleRow({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 p-4">
      <div>
        <div className="font-bold text-black">{title}</div>
        <div className="text-sm text-black/60">{description}</div>
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={[
          "h-7 w-12 rounded-full transition relative",
          checked ? "bg-[#163B57]" : "bg-black/20",
        ].join(" ")}
        aria-pressed={checked}
      >
        <span
          className={[
            "absolute top-0.5 h-6 w-6 rounded-full bg-white transition",
            checked ? "left-5" : "left-0.5",
          ].join(" ")}
        />
      </button>
    </div>
  );
}

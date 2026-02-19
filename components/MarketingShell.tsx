"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MarketingShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const nav = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/75 backdrop-blur border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/progressly-logo.png"
              alt="Progressly"
              width={160}
              height={48}
              priority
              className="mix-blend-multiply h-auto w-[160px] object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={[
                    "px-4 py-2 rounded-full font-semibold transition",
                    active ? "bg-black text-white" : "text-[var(--muted)] hover:bg-black/5 hover:text-black",
                  ].join(" ")}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="px-4 py-2 rounded-full font-semibold text-[var(--muted)] hover:bg-black/5 hover:text-black">
              Log in
            </Link>
            <Link
              href="/auth/login"
              className="px-5 py-2 rounded-full font-semibold text-white bg-[var(--brand)] hover:opacity-95 shadow-sm"
            >
              Get started
            </Link>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden px-6 pb-4 flex gap-2 overflow-x-auto">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={[
                  "whitespace-nowrap px-4 py-2 rounded-full font-semibold transition border",
                  active
                    ? "bg-black text-white border-black"
                    : "text-[var(--muted)] border-[var(--border)] hover:bg-black/5 hover:text-black",
                ].join(" ")}
              >
                {n.label}
              </Link>
            );
          })}
        </div>
      </header>

      {/* Page */}
      {children}

      {/* Footer */}
      <footer className="border-t border-[var(--border)] mt-16">
        <div className="mx-auto max-w-6xl px-6 py-10 text-[var(--muted)] flex flex-col md:flex-row gap-4 justify-between">
          <div>© {new Date().getFullYear()} Progressly</div>
          <div className="flex gap-5">
            <Link className="hover:text-black" href="/privacy">Privacy</Link>
            <Link className="hover:text-black" href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

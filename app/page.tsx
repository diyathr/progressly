import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MarketingShell from "@/components/MarketingShell";

const features = [
  { title: "Progress dashboard", desc: "See student progress at a glance with clear summaries." },
  { title: "Attendance tracking", desc: "Mark attendance quickly and reduce mistakes." },
  { title: "Upcoming classes", desc: "Plan ahead with a clean upcoming schedule view." },
  { title: "Reports", desc: "Generate useful reports for students and parents." },
  { title: "Learning resources", desc: "Share materials and keep everything organised." },
  { title: "Payments", desc: "Track payments and due dates without messy spreadsheets." },
];

export default function HomePage() {
  return (
    <MarketingShell>
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-16">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--muted)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  Built for institutes & tuition classes
                </div>

                <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight">
                  Track student progress.
                  <span className="block text-[var(--brand)]">Stay ahead, effortlessly.</span>
                </h1>

                <p className="mt-4 text-lg text-[var(--muted)]">
                  Progressly helps teachers and institutes monitor progress, attendance, upcoming classes, and performance — all in one clean web dashboard.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/auth/login"
                    className="px-6 py-3 rounded-full bg-[var(--brand)] text-white font-semibold hover:opacity-95 shadow-[0_18px_60px_-35px_rgba(22,59,87,0.9)]"
                  >
                    Start free
                  </Link>
                  <Link
                    href="/features"
                    className="px-6 py-3 rounded-full border border-[var(--border)] font-semibold hover:bg-black/5"
                  >
                    View features
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--brand-2)]" /> Fast setup
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" /> Smooth UX
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-black/30" /> Secure & reliable
                  </span>
                </div>
              </div>

              <div>
                <div className="rounded-3xl border border-[var(--border)] bg-white shadow-sm p-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--surface)]">
                    {/* Put a screenshot here: /public/dashboard-preview.png */}
                    <Image
                      src="/dashboard-preview.png"
                      alt="Progressly dashboard preview"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* subtle glow */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]" />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <StatCard label="Teachers" value="Faster tracking" />
                  <StatCard label="Students" value="Clear progress" />
                  <StatCard label="Parents" value="Better visibility" />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Logos/Trust */}
        <section className="mx-auto max-w-6xl px-6 pt-10">
          <Reveal>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="font-extrabold text-black">Designed to feel modern, not complicated.</div>
              <div className="text-[var(--muted)]">
                Clean UI • Smooth animations • Built for real education workflows
              </div>
            </div>
          </Reveal>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 pt-14">
          <Reveal>
            <h2 className="text-3xl font-extrabold">Everything you need, in one place</h2>
            <p className="mt-2 text-[var(--muted)]">
              A dashboard that helps you manage learning — without stress.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                      <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    </span>
                    <div className="text-xl font-bold">{f.title}</div>
                  </div>
                  <div className="mt-3 text-[var(--muted)]">{f.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-6 pt-14">
          <Reveal>
            <h2 className="text-3xl font-extrabold">How it works</h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              ["Create your institute", "Set up classes, subjects, and teachers in minutes."],
              ["Add students", "Upload or add students easily — no messy spreadsheets."],
              ["Track & improve", "Monitor progress and take action early."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
                  <div className="text-sm font-extrabold text-[var(--brand)]">Step {i + 1}</div>
                  <div className="mt-2 text-xl font-bold">{t}</div>
                  <div className="mt-2 text-[var(--muted)]">{d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pt-14">
          <Reveal>
            <div className="rounded-3xl bg-[var(--brand)] text-white p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[0_24px_70px_-45px_rgba(22,59,87,0.9)]">
              <div>
                <div className="text-3xl font-extrabold">Ready to use Progressly?</div>
                <div className="mt-2 text-white/80">Start building your institute dashboard today.</div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/auth/login"
                  className="px-6 py-3 rounded-full bg-white text-[var(--brand)] font-extrabold hover:bg-white/90"
                >
                  Get started
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full border border-white/30 font-semibold hover:bg-white/10"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </MarketingShell>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3">
      <div className="text-xs font-bold text-[var(--muted)]">{label}</div>
      <div className="text-sm font-extrabold text-black">{value}</div>
    </div>
  );
}

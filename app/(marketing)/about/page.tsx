import MarketingShell from "@/components/MarketingShell";

export default function AboutPage() {
  return (
    <MarketingShell>
      <main className="mx-auto max-w-6xl px-6 pt-14">
        <h1 className="text-4xl font-extrabold">About</h1>
        <p className="mt-3 text-[var(--muted)]">
          Progressly is built to make progress tracking simple, clean, and modern.
        </p>
      </main>
    </MarketingShell>
  );
}

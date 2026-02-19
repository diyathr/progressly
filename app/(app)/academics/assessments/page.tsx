export default function AssessmentsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-extrabold text-[#0f172a]">Assessments</h2>

      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <p className="text-slate-700">
          This is a sample Assessments page to test routing + layout.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card title="Pending" value="3" />
          <Card title="Completed" value="12" />
          <Card title="Average" value="78%" />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border border-black/10 bg-slate-50 p-4">
      <div className="text-sm font-semibold text-slate-600">{title}</div>
      <div className="mt-2 text-2xl font-extrabold text-[#0f172a]">{value}</div>
    </div>
  );
}

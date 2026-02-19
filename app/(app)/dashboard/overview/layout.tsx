function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "GOOD MORNING";
  if (hour < 18) return "GOOD AFTERNOON";
  return "GOOD EVENING";
}

export default function OverviewPage() {
  const username = "DUMIDU";

  return (
    <div className="space-y-10">
      <h1 className="text-center text-3xl font-extrabold tracking-wide text-black">
        HI, {getGreeting()} {username}!
      </h1>

      {/* centered white box (your overview card) */}
      <div className="flex items-center justify-center">
        <div className="h-[360px] w-[820px] rounded-[32px] bg-grey shadow-md border border-black/10" />
      </div>
    </div>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-zinc-800 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-zinc-700" />
        <div className="ml-2 h-6 w-16 rounded-md bg-zinc-800 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-zinc-800 px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-zinc-700" />
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <div className="p-5">
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-700`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

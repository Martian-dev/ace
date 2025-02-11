import { fetchTodayTasks } from "~/server/data";

export const dynamic = "force-dynamic";
export default async function Dashboard() {
  const todaysTasks = await fetchTodayTasks();

  return (
    <main className="m-auto p-6">
      <h1 className="mb-6 text-2xl font-semibold">Today</h1>
      {todaysTasks.map((task) => (
        <div
          key={task.id}
          className="mb-4 flex items-center justify-between rounded-lg bg-slate-800 p-4"
        >
          <div>
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p className="text-sm">{task.description}</p>
          </div>
          <div>
            <span className="text-sm">{task.due?.toDateString()}</span>
          </div>
        </div>
      ))}
    </main>
  );
}

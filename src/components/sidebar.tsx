import NavLinks from "~/components/nav-links";
import AddTask from "~/components/add-task";
import { addTask } from "~/server/server-actions";

export default function Sidebar() {
  return (
    <div className="flex w-[280px] flex-col border-2 border-solid border-r-slate-700">
      <div className="p-4">
        <AddTask addTaskAction={addTask} />
      </div>
      <NavLinks />
    </div>
  );
}

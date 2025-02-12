import React from "react";
import { Mail } from "lucide-react";
import { fetchAllTasks } from "~/server/data";

export const dynamic = "force-dynamic";
export default async function InboxPage() {
  const tasks = await fetchAllTasks();

  return (
    <div className="p-5">
      <h1 className="mb-4 flex items-center text-2xl font-bold">
        <Mail className="mr-2" /> Inbox
      </h1>
      <ul className="list-none p-0">
        {tasks.map((task) => (
          <React.Fragment key={task.id}>
            <li className="border-b border-gray-300 py-2">
              <h2 className="m-0 text-xl font-semibold">{task.title}</h2>
              <p className="m-0">{task.description}</p>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

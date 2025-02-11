import React from "react";
import { Calendar } from "lucide-react";

const UpcomingPage = () => {
  const upcomingTasks = [
    {
      id: 1,
      title: "Upcoming Task 1",
      description: "Description for upcoming task 1",
    },
    {
      id: 2,
      title: "Upcoming Task 2",
      description: "Description for upcoming task 2",
    },
    {
      id: 3,
      title: "Upcoming Task 3",
      description: "Description for upcoming task 3",
    },
  ];

  return (
    <div className="p-5">
      <h1 className="mb-4 flex items-center text-2xl font-bold">
        <Calendar className="mr-2" /> Upcoming
      </h1>
      <ul className="list-none p-0">
        {upcomingTasks.map((task) => (
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
};

export default UpcomingPage;

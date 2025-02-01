"use client";
import { useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { PlusCircle, Users } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { createTeam } from "~/server/server-actions";

export default function SideNav() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const maxScroll = container.scrollHeight - container.clientHeight;
    const currentScroll = container.scrollTop;
    setScrollPosition((currentScroll / maxScroll) * 100);
  };

  const teams = [
    { id: 1, name: "Marketing", members: ["Alice", "Bob", "Charlie"] },
    { id: 2, name: "Development", members: ["David", "Eve", "Frank"] },
    { id: 3, name: "Design", members: ["Grace", "Henry", "Ivy"] },
    { id: 4, name: "Sales", members: ["Jack", "Kate", "Liam"] },
  ];

  return (
    <div className="relative flex w-64 flex-col border-r border-gray-700 bg-gray-800 shadow-lg">
      <div className="bg-gradient-to-b from-blue-900 to-gray-800 p-4">
        <UserButton />
      </div>
      <div className="flex-grow overflow-y-auto" onScroll={handleScroll}>
        <h3 className="px-4 py-2 text-sm font-semibold uppercase text-blue-400">
          Your Teams
        </h3>
        {teams.map((team) => (
          <Card
            key={team.id}
            className={`m-2 cursor-pointer border-gray-600 bg-gray-700 transition-colors duration-200 hover:bg-gray-600`}
            onClick={() => {
              console.log("");
            }}
          >
            <CardContent className="flex items-center p-4">
              <Users className="mr-2 h-5 w-5 text-blue-400" />
              <h3 className="font-semibold text-blue-200">{team.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="bg-gradient-to-t from-blue-900 to-gray-800 p-4">
        <Button
          className="flex w-full items-center justify-center border-none bg-blue-600 text-white hover:bg-blue-700"
          onClick={async () => {
            await createTeam();
          }}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Team
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 top-0 w-1 bg-gray-700">
        <div
          className="w-full bg-blue-500"
          style={{
            height: "20px",
            position: "absolute",
            top: `${scrollPosition}%`,
            transition: "top 0.1s ease-out",
          }}
        />
      </div>
    </div>
  );
}

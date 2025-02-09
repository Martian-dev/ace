"use client";

import { Button } from "~/components/ui/button";
import { Calendar, Hash, Inbox, Plus, Search, Tag } from "lucide-react";
import { cn } from "~/lib/utils";

const navigation = [
  {
    icon: Search,
    label: "Search",
  },
  {
    icon: Inbox,
    label: "Inbox",
    badge: "5",
  },
  {
    icon: Calendar,
    label: "Today",
    isActive: true,
  },
  {
    icon: Calendar,
    label: "Upcoming",
  },
  {
    icon: Tag,
    label: "Filters & Labels",
  },
];

const projects = [
  {
    icon: Hash,
    label: "College",
    color: "text-blue-400",
  },
];

export default function Sidebar() {
  return (
    <div className="flex w-[280px] flex-col border-2 border-solid border-r-slate-700">
      <div className="p-4">
        <Button className="w-full justify-start gap-2">
          <Plus className="h-4 w-4" />
          Add task
        </Button>
      </div>
      <nav className="flex-1 px-2">
        {navigation.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={cn(
              "mb-1 w-full justify-start gap-2",
              item.isActive && "bg-accent",
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
            {item.badge && (
              <span className="ml-auto text-muted-foreground">
                {item.badge}
              </span>
            )}
          </Button>
        ))}
        <div className="mt-6">
          <div className="flex items-center justify-between px-2 py-2">
            <h2 className="text-sm font-semibold">My Projects</h2>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          {projects.map((project) => (
            <Button
              key={project.label}
              variant="ghost"
              className="mb-1 w-full justify-start gap-2"
            >
              <project.icon className={cn("h-4 w-4", project.color)} />
              {project.label}
            </Button>
          ))}
        </div>
      </nav>
      <div className="mt-auto p-4">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Plus className="h-4 w-4" />
          Browse templates
        </Button>
      </div>
    </div>
  );
}

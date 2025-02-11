"use client";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Calendar, Inbox, Plus, Tag } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  {
    icon: Inbox,
    label: "Inbox",
    badge: "5",
    href: "/dashboard/inbox",
  },
  {
    icon: Calendar,
    label: "Today",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Upcoming",
    href: "/dashboard/upcoming",
  },
  {
    icon: Tag,
    label: "Filters & Labels",
    href: "/dashboard/filter",
  },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="flex-1 px-2">
      {navigation.map((item) => (
        <Link key={item.label} href={item.href}>
          <Button
            key={item.label}
            variant="ghost"
            className={cn(
              "mb-1 w-full justify-start gap-2",
              pathname == item.href && "bg-accent",
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
        </Link>
      ))}
      <div className="mt-6">
        <div className="flex items-center justify-between px-2 py-2">
          <h2 className="text-sm font-semibold">My Projects</h2>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

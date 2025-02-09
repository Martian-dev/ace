"use client";

import { Bell, LayoutGrid } from "lucide-react";
import { Button } from "~/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-b border-border px-4">
      <div className="flex items-center gap-2">
        <OrganizationSwitcher appearance={{ elements: { rootBox: "flex" } }} />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <LayoutGrid className="h-4 w-4" />
        </Button>
      </div>
      <UserButton
        appearance={{
          elements: {
            rootBox: "flex",
          },
        }}
      />
    </header>
  );
}

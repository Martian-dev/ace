import { Button } from "~/components/ui/button";
import NavLinks from "~/components/nav-links";
import { Plus } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex w-[280px] flex-col border-2 border-solid border-r-slate-700">
      <div className="p-4">
        <Button className="w-full justify-start gap-2">
          <Plus className="h-4 w-4" />
          Add task
        </Button>
      </div>
      <NavLinks />
    </div>
  );
}

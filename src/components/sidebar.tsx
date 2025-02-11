import { Button } from "~/components/ui/button";
import NavLinks from "~/components/nav-links";
import { Plus } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { addTask } from "~/server/server-actions";

export default function Sidebar() {
  return (
    <div className="flex w-[280px] flex-col border-2 border-solid border-r-slate-700">
      <div className="p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-full justify-start gap-2">
              <Plus className="h-4 w-4" />
              Add task
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add Task</SheetTitle>
              <SheetDescription>{"Create a new Task"}</SheetDescription>
            </SheetHeader>
            <form className="flex flex-col gap-4 p-4" action={addTask}>
              <Input type="text" placeholder="Task title" name="title" />
              <Label>Description</Label>
              <Input
                type="text"
                placeholder="Task description"
                name="description"
              />
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>
      <NavLinks />
    </div>
  );
}

"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useFormState, useFormStatus } from "react-dom"; // Import hooks for form handling
import { revalidatePath } from "next/cache"; // Import for revalidation
import { useState, useEffect } from "react"; // For managing sheet open state

// Assuming your addTask server action is imported like this
import { addTask, type AddTaskState } from "~/server/server-actions";

// Component that uses the useFormStatus hook to show pending state
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="bg-slate-100"
      variant="default"
      type="submit"
      disabled={pending} // Disable button while submitting
    >
      {pending ? "Adding..." : "Add"}
    </Button>
  );
}

export default function AddTask() {
  const [state, formAction] = useFormState<AddTaskState, FormData>(addTask, null);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full" variant="default">Add Task</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Task</SheetTitle>
        </SheetHeader>
        {/* Use the form element and assign the formAction */}
        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Name
              </Label>
              {/* Make sure the input 'name' attribute matches the formData key */}
              <Input id="title" name="title" placeholder="create the next gpt" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              {/* Make sure the input 'name' attribute matches the formData key */}
              <Input id="description" name="description" placeholder="add your description here" className="col-span-3" />
            </div>
            {/* Add the due date input */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="due" className="text-right">
                Due Date
              </Label>
              <Input id="due" name="due" type="date" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            {/* Use the SubmitButton component */}
            <SubmitButton />
          </SheetFooter>
        </form>
        {/* Display errors if any
        {state?.errors && (
          <div className="mt-4 text-red-500">
            <p>{state.message}</p>
            <ul>
              {Object.entries(state.errors).map(([field, messages]) => (
                <li key={field}>
                  {field}: {(messages as string[]).join(', ')}
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </SheetContent>
    </Sheet>
  );
}

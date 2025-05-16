"use server";

import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { tasks } from "~/server/db/schema";
import { InsertTask } from "~/server/db/schema";

import { revalidatePath } from 'next/cache';

export type AddTaskState = {
  errors: {
    title?: string[];
    description?: string[];
    completed?: string[];
    created_at?: string[];
    updated_at?: string[];
    due?: string[];
    user_id?: string[];
    team_id?: string[];
  };
  message: string;
} | null; // Add null as a possible state for initial state or success


export async function revalidateTasksList() {
  // Replace '/' with the actual path of your tasks list page
  revalidatePath('/dashboard');
  console.log('Tasks list revalidated');
}

export async function addTask(prevState: AddTaskState, formData: FormData): Promise<AddTaskState> {
  const orgId = auth().orgId ? auth().orgId : auth().userId;

  // Get the raw value from the form data
  const rawDueValue = formData.get("due");

  let due: Date | null = null;
  if (rawDueValue) {
    if (typeof rawDueValue === 'string' && rawDueValue.trim() !== '') {
      // Attempt to create a Date object from the string
      const parsedDate = new Date(rawDueValue);

      // Check if the parsed date is valid
      if (!isNaN(parsedDate.getTime())) {
        due = parsedDate;
      } else {
        console.error("Invalid date string received for 'due':", rawDueValue);
        // You might want to return an error to the client here
        // For now, we'll just log and 'due' remains null
      }
    } else if (rawDueValue instanceof Date) {
      // If it's already a Date object (less common from form data but possible)
      due = rawDueValue;
    } else {
      console.error("Unexpected type for 'due':", typeof rawDueValue);
      // Handle other unexpected types as needed
      // 'due' remains null
    }
  }

  const validatedData = InsertTask.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    user_id: auth().userId,
    team_id: orgId,
  });

  if (!validatedData.success) {
    console.log("didnt work");
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Missing fields. Failed to create task.",
    };
  }

  try {
    await db.insert(tasks).values({ ...validatedData.data, due });
    await revalidateTasksList();
    return null;
  } catch (error) {
    console.error("Database insertion failed:", error);
    // Return an error state in case of a database error
    return {
      errors: {}, // No field-specific errors in this case
      message: "Failed to create task due to a database error."
    };

  }
}

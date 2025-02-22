"use server";

import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { tasks } from "~/server/db/schema";
import { InsertTask } from "~/server/db/schema";

export async function addTask(formData: FormData) {
  const orgId = auth().orgId ? auth().orgId : auth().userId;

  const validatedData = InsertTask.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    user_id: auth().userId,
    team_id: orgId,
  });

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: "Missing fields. Failed to create task.",
    };
  }

  await db.insert(tasks).values(validatedData.data);
}

"use server";

import "server-only";
import { unstable_noStore as noStore } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { tasks } from "~/server/db/schema";
import { eq, and, gte, lt } from "drizzle-orm";

export async function fetchTodayTasks() {
  noStore();
  const user_id = auth().userId;
  let orgId = auth().orgId;

  if (!user_id) {
    return [];
  }
  if (!orgId) {
    orgId = user_id;
  }

  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  );
  // Create a new Date for tomorrow by adding one day
  const startOfTomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
  );

  const todaysTasks = await db
    .select()
    .from(tasks)
    .where(
      and(
        gte(tasks.due, startOfToday),
        lt(tasks.due, startOfTomorrow),
        eq(tasks.user_id, user_id),
        eq(tasks.team_id, orgId),
      ),
    );
  return todaysTasks;
}

export async function fetchAllTasks() {
  noStore();
  const user_id = auth().userId;
  let orgId = auth().orgId;

  if (!user_id) {
    return [];
  }
  if (!orgId) {
    orgId = user_id;
  }

  const allTasks = await db
    .select()
    .from(tasks)
    .where(and(eq(tasks.user_id, user_id), eq(tasks.team_id, orgId)));
  return allTasks;
}

import {
  integer,
  varchar,
  boolean,
  timestamp,
  pgTableCreator,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const createTable = pgTableCreator((name) => `ace_${name}`);

export const tasks = createTable("tasks", {
  id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
  title: varchar("title").notNull(),
  description: varchar("description"),
  completed: boolean("completed").notNull().default(false),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
  due: timestamp("due"),
  user_id: varchar("user_id").notNull(),
  team_id: varchar("team_id").notNull(),
});

export const InsertTask = createInsertSchema(tasks);
export const SelectTask = createSelectSchema(tasks);

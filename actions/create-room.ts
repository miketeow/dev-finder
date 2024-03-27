"use server";

import { currentUser } from "@/data/auth";
import { db } from "@/db";
import { room } from "@/db/schema";
import { formSchema } from "@/schema";

import * as z from "zod";

export const createRoomAction = async (
  roomData: Omit<z.infer<typeof formSchema>, "userId" | "id">
) => {
  const user = await currentUser();
  if (!user) {
    throw new Error("you must be logged in to create room");
  }

  await db.insert(room).values({ ...roomData, userId: user.id });
};

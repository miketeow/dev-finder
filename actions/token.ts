"use server";
import { StreamChat } from "stream-chat";
import { currentUser } from "@/data/auth";

export async function generateTokenAction() {
  const user = await currentUser();
  const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
  const secret = process.env.GET_STREAM_SECRET_KEY;
  if (!user) {
    throw new Error("No user found");
  }
  const serverClient = StreamChat.getInstance(apiKey, secret);
  const token = serverClient.createToken(user.id);

  return token;
}

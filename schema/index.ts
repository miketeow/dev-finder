import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(1).max(50),
  githubRepo: z.string().min(1).max(50),
  language: z.string().min(1).max(50),
});

import { z } from "zod";

export const singUpTypes = z.object({
  username: z.string().trim().min(4),
  avatar: z.string().trim(),
  email: z.string().trim().email(),
  password: z.string(8).trim(),
});

export const singInTypes = z.object({
  email: z.string().email(),
  password: z.string(),
});

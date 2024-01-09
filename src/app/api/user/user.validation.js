import { z } from "zod";
export const UserValidationSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string({ message: "password is required" }),
  role: z.string(),
});

import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, {
    message: "name required",
  }),
  phone: z.string().min(1, {
    message: "phone required",
  }),
});

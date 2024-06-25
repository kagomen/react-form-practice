import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().min(1).email(),
  body: z.string().min(1)
})

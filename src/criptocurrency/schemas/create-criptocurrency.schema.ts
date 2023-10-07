import { z } from 'zod'

export const createCriptocurrencySchema = z.object({
  id: z.string().optional(),
  votes: z.number().optional().default(0),
  name: z.string()
})

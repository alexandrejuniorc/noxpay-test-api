import { z } from 'zod'

export const updateCriptocurrencyVotesSchema = z.object({
  id: z.string(),
  vote: z.number()
})

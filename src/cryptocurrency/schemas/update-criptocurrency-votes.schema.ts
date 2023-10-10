import { z } from 'zod'

export const updateCryptocurrencyVotesSchema = z.object({
  id: z.string().optional(),
  vote: z.number().optional()
})

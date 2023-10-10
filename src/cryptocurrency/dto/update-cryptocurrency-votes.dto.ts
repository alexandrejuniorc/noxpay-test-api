import { z } from 'zod'
import { updateCryptocurrencyVotesSchema } from '../schemas/update-criptocurrency-votes.schema'

export type UpdateCryptocurrencyVotesSchemaDto = z.infer<typeof updateCryptocurrencyVotesSchema>

import { z } from 'zod'
import { updateCriptocurrencyVotesSchema } from '../schemas/update-criptocurrency-votes.schema'

export type UpdateCriptocurrencyVotesSchemaDto = z.infer<typeof updateCriptocurrencyVotesSchema>

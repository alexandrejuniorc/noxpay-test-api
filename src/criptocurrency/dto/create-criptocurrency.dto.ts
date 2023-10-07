import { z } from 'zod'
import { createCriptocurrencySchema } from '../schemas/create-criptocurrency.schema'

export type CreateCriptocurrencySchemaDto = z.infer<typeof createCriptocurrencySchema>

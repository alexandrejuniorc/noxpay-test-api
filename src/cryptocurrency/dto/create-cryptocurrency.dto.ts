import { z } from 'zod'
import { createCryptocurrencySchema } from '../schemas/create-criptocurrency.schema'

export type CreateCryptocurrencySchemaDto = z.infer<typeof createCryptocurrencySchema>

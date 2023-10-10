import { createValidationMiddlewareFromZod } from '../../shared/utils/create-validation-middleware-from-zod.util'
import { createCryptocurrencySchema } from '../schemas/create-criptocurrency.schema'

export const CreateCryptocurrencyValidatorMiddleware =
  createValidationMiddlewareFromZod(createCryptocurrencySchema)

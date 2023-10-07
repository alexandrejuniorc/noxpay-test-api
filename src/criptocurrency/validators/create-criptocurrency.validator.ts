import { createValidationMiddlewareFromZod } from '../../shared/utils/create-validation-middleware-from-zod.util'
import { createCriptocurrencySchema } from '../schemas/create-criptocurrency.schema'

export const CreateCriptoCurrencyValidatorMiddleware =
  createValidationMiddlewareFromZod(createCriptocurrencySchema)

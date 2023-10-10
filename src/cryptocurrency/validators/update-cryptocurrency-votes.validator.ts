import { createValidationMiddlewareFromZod } from '../../shared/utils/create-validation-middleware-from-zod.util'
import { updateCryptocurrencyVotesSchema } from '../schemas/update-criptocurrency-votes.schema'

export const UpdateCryptocurrencyVotesValidatorMiddleware = createValidationMiddlewareFromZod(
  updateCryptocurrencyVotesSchema
)

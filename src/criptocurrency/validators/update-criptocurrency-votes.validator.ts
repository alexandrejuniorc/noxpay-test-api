import { createValidationMiddlewareFromZod } from '../../shared/utils/create-validation-middleware-from-zod.util'
import { updateCriptocurrencyVotesSchema } from '../schemas/update-criptocurrency-votes.schema'

export const UpdateCriptoCurrencyVotesValidatorMiddleware = createValidationMiddlewareFromZod(
  updateCriptocurrencyVotesSchema
)

import { NextFunction, Request, Response } from 'express'
import { ZodSchema } from 'zod'

import { HttpFieldValidationException } from '../exceptions/http-field-validation.exception'
import { logger } from './logger.util'

export function createValidationMiddlewareFromZod(zodSchema: ZodSchema) {
  return (request: Request, _: Response, next: NextFunction) => {
    const body = request.body

    const result = zodSchema.safeParse(body)

    if (!result.success) {
      const fields = result.error.errors.map(zodError => ({
        field: String(zodError.path[0]),
        message: zodError.message
      }))

      logger.error(fields)

      throw new HttpFieldValidationException({ fields })
    }

    return next()
  }
}

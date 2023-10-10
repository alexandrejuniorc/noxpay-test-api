import { AxiosError } from 'axios'
import { NextFunction, Request, Response } from 'express'

import { BaseException } from '../exceptions/base-exception.exception'
import { HttpFieldValidationException } from '../exceptions/http-field-validation.exception'

export function errorHandler(error: Error, request: Request, response: Response, next: NextFunction) {
  console.error(error)

  if (error instanceof BaseException) {
    if (error instanceof HttpFieldValidationException) {
      return response.status(error.status).json({
        id: error.id,
        message: error.message,
        status: error.status,
        fields: error.fields
      })
    }

    return response.status(error.status).json({ id: error.id, message: error.message, status: error.status })
  }

  if (error instanceof AxiosError) {
    console.error(error.response?.data)

    return response.status(error.response?.status || 500).json({
      id: 'axios-error',
      status: error.response?.status,
      message: error?.message
    })
  }

  return response.status(500).json({
    id: 'internal-error',
    status: 500,
    message: error?.message
  })
}

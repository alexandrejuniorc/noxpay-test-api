import { BaseException } from './base-exception.exception'

interface NotFoundExceptionProps {
  id?: string
  message: string
}

export class NotFoundException extends BaseException {
  constructor({ id = 'not-found', message }: NotFoundExceptionProps) {
    super({ id, message, status: 404 })
  }
}

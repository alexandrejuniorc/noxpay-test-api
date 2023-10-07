import { BaseException } from "./base-exception.exception"

interface InternalExceptionProps {
  id?: string
  message: string
}

export class InternalException extends BaseException {
  constructor({ id = "internal", message }: InternalExceptionProps) {
    super({ id, message, status: 500 })
  }
}

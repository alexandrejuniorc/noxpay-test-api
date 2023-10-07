import { BaseException } from "./base-exception.exception"

interface BadRequestExceptionProps {
  id?: string
  message: string
}

export class BadRequestException extends BaseException {
  constructor({ id = "bad-request", message }: BadRequestExceptionProps) {
    super({ id, message, status: 400 })
  }
}

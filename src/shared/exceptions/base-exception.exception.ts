interface BaseExceptionProps {
  id: string
  message: string
  status: number
}

export class BaseException extends Error {
  public id: string
  public status: number

  constructor({ id, message, status }: BaseExceptionProps) {
    super(message)

    this.id = id
    this.status = status
  }
}

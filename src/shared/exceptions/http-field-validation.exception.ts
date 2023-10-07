import { BaseException } from "./base-exception.exception"

export interface HttpFieldValidationPayload {
  field: string
  message: string
}

interface HttpFieldValidationExceptionProps {
  fields: HttpFieldValidationPayload[]
}

export class HttpFieldValidationException extends BaseException {
  public fields: HttpFieldValidationPayload[]

  constructor({ fields }: HttpFieldValidationExceptionProps) {
    super({
      id: "http-field-validation",
      message: "Validation failed",
      status: 400,
    })

    this.fields = fields
  }
}

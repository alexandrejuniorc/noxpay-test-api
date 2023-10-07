import { NextFunction, Request, Response } from 'express'
import i18next from 'i18next'

export async function changeLanguageMiddleware(request: Request, response: Response, next: NextFunction) {
  const language = request.headers.language

  if (!language) return next()

  await i18next.changeLanguage(language as string)

  return next()
}

import chalk from 'chalk'
import { NextFunction, Request, Response } from 'express'

import { logger } from '../utils/logger.util'

const METHOD_COLORS = {
  GET: chalk.blue,
  POST: chalk.green,
  PUT: chalk.yellow,
  DELETE: chalk.red
}

const STATUS_COLORS = {
  '1': chalk.bold.bgCyan,
  '2': chalk.bold.bgGreen,
  '3': chalk.bold.bgBlue,
  '4': chalk.bold.bgHex('#f59e0b'),
  '5': chalk.bold.bgRed
}

export async function requestTime(request: Request, response: Response, next: NextFunction) {
  const dateStarted = new Date()

  const methodLog = METHOD_COLORS[request.method as keyof typeof METHOD_COLORS](request.method)

  logger.info(`${methodLog} > ${request.path}`)

  response.on('finish', () => {
    const responseStatusType = response.statusCode.toString()[0] as keyof typeof STATUS_COLORS

    const responseLog = STATUS_COLORS[responseStatusType](` ${response.statusCode} `)

    const dateFinished = new Date()

    const ms = dateFinished.getTime() - dateStarted.getTime()

    logger.info(`${responseLog} ${methodLog} > ${request.path} DONE IN ${ms} MS`)
  })

  return next()
}

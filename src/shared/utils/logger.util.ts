import chalk from 'chalk'
import { createLogger, format, transports } from 'winston'

export const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [new transports.File({ filename: 'logs/error.log', level: 'error' })]
})

const LEVEL_COLORS = {
  error: chalk.bold.red,
  warn: chalk.bold.yellow,
  info: chalk.bold.cyan,
  debug: chalk.bold.blue
}

const consoleDevFormat = format.printf(({ level, message, timestamp }) => {
  const timestampLog = chalk.gray.bold(timestamp)
  const levelLog = LEVEL_COLORS[level as keyof typeof LEVEL_COLORS](level.toUpperCase())

  if (typeof message === 'object') message = JSON.stringify(message, undefined, 1)

  return `[${timestampLog}] ${levelLog}: ${message}`
})

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(consoleDevFormat),
      level: 'debug'
    })
  )
}

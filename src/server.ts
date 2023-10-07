import 'express-async-errors'

import { app } from './app'
import { env } from './shared/env'
import { logger } from './shared/utils/logger.util'

app.listen(env.PORT, () => logger.info(`Portal CriptoCurrencies has been started on ${env.PORT} port.`))

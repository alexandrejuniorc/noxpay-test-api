import 'express-async-errors'

import { app } from './app'
import { env } from './shared/env'
import { logger } from './shared/utils/logger.util'

app.listen(env.PORT, () => logger.info(`Portal Crypto's has been started on ${env.PORT} port.`))

import 'express-async-errors'

import { app } from './app'
import { env } from './shared/env'

app.listen(env.PORT, () => console.log(`Portal Crypto's has been started on ${env.PORT} port.`))

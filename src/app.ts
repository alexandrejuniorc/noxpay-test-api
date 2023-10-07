import cors from 'cors'
import express from 'express'
import { changeLanguageMiddleware } from './shared/middlewares/change-lang.middleware'
import { errorHandler } from './shared/middlewares/error-handler.middleware'
import { requestTime } from './shared/middlewares/request-time.middleware'
import { router } from './shared/routes'

export const app = express()

app.use(cors({ exposedHeaders: ['Max-Pages', 'Count'] }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(requestTime)
app.use(changeLanguageMiddleware)
app.use(router)
app.use(errorHandler)

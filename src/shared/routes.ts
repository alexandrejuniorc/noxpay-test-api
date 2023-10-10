import { Router } from 'express'
import { cryptocurrencyRouter } from '../cryptocurrency/cryptocurrency.routes'

export const router = Router()

router.use('/cryptocurrency', cryptocurrencyRouter)

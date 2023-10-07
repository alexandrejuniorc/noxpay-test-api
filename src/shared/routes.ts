import { Router } from 'express'
import { criptoCurrencyRouter } from '../criptocurrency/criptocurrency.routes'

export const router = Router()

router.use('/cryptocurrency', criptoCurrencyRouter)

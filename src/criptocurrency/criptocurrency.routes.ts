import { Router } from 'express'
import { criptoCurrencyController } from './criptocurrency.controllers'

export const criptoCurrencyRouter = Router()

criptoCurrencyRouter.get('/', criptoCurrencyController.listAllCriptoCurrencies)
// criptoCurrencyRouter.get("/cryptocurrency")
// criptoCurrencyRouter.get("/cryptocurrency")

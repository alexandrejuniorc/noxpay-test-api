import { Router } from 'express'
import { criptoCurrencyController } from './criptocurrency.controllers'

export const criptoCurrencyRouter = Router()

criptoCurrencyRouter.get('/', criptoCurrencyController.listAllCriptoCurrencies)
criptoCurrencyRouter.put('/:id/vote', criptoCurrencyController.updateCriptocurrencyVotes)

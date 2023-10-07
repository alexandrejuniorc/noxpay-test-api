import { Router } from 'express'
import { criptoCurrencyController } from './criptocurrency.controllers'
import { CreateCriptoCurrencyValidatorMiddleware } from './validators/create-criptocurrency.validator'
import { UpdateCriptoCurrencyVotesValidatorMiddleware } from './validators/update-criptocurrency-votes.validator'

export const criptoCurrencyRouter = Router()

criptoCurrencyRouter.post(
  '/',
  CreateCriptoCurrencyValidatorMiddleware,
  criptoCurrencyController.createCriptoCurrency
)
criptoCurrencyRouter.get('/', criptoCurrencyController.listAllCriptoCurrencies)
criptoCurrencyRouter.put(
  '/:id/vote',
  UpdateCriptoCurrencyVotesValidatorMiddleware,
  criptoCurrencyController.updateCriptoCurrencyVotes
)

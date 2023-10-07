import { Router } from 'express'
import { criptoCurrencyController } from './criptocurrency.controllers'
import { UpdateCriptoCurrencyVotesValidatorMiddleware } from './validators/update-criptocurrency-votes.validator'

export const criptoCurrencyRouter = Router()

criptoCurrencyRouter.get('/', criptoCurrencyController.listAllCriptoCurrencies)
criptoCurrencyRouter.put(
  '/:id/vote',
  UpdateCriptoCurrencyVotesValidatorMiddleware,
  criptoCurrencyController.updateCriptocurrencyVotes
)

import { Router } from 'express'
import { cryptocurrencyController } from './cryptocurrency.controllers'
import { CreateCryptocurrencyValidatorMiddleware } from './validators/create-cryptocurrency.validator'
import { UpdateCryptocurrencyVotesValidatorMiddleware } from './validators/update-cryptocurrency-votes.validator'

export const cryptocurrencyRouter = Router()

cryptocurrencyRouter.post(
  '/',
  CreateCryptocurrencyValidatorMiddleware,
  cryptocurrencyController.createCryptocurrency
)
cryptocurrencyRouter.get('/', cryptocurrencyController.listAllCryptocurrencies)
cryptocurrencyRouter.put(
  '/:id/vote',
  UpdateCryptocurrencyVotesValidatorMiddleware,
  cryptocurrencyController.updateCryptocurrencyVotes
)

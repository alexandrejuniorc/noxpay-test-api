import { Request, Response } from 'express'
import { listAllCriptoCurrenciesService } from './services/list-all-criptocurrencies.service'
import { updateCriptocurrencyVotes } from './services/update-criptocurrency-votes.service'

export const criptoCurrencyController = {
  listAllCriptoCurrencies: async (request: Request, response: Response) => {
    const criptoCurrencies = await listAllCriptoCurrenciesService()
    return response.status(200).json(criptoCurrencies)
  },

  updateCriptocurrencyVotes: async (request: Request, response: Response) => {
    const { id } = request.params
    const { vote } = request.body
    const params = { id, vote }
    const criptoCurrency = await updateCriptocurrencyVotes(params)
    return response.status(200).json(criptoCurrency)
  }
}

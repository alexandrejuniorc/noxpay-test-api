import { Request, Response } from 'express'
import { listAllCriptoCurrenciesService } from './services/list-all-criptocurrencies.service'

export const criptoCurrencyController = {
  listAllCriptoCurrencies: async (request: Request, response: Response) => {
    const criptoCurrencies = await listAllCriptoCurrenciesService()

    return response.status(200).json(criptoCurrencies)
  }
}

import { Request, Response } from 'express'
import { ListAllCryptocurrenciesFiltersDto } from './dto/list-all-cryptocurrencies.dto'

import { createCryptocurrency } from './services/create-cryptocurrency.service'
import { listAllCryptocurrenciesService } from './services/list-all-cryptocurrencies.service'
import { updateCryptocurrencyVotes } from './services/update-cryptocurrency-votes.service'
import { validatePaginationQuery } from './validators/validate-pagination-query.validator'

export const cryptocurrencyController = {
  listAllCryptocurrencies: async (request: Request, response: Response) => {
    const paginationQuery = validatePaginationQuery(request)
    const { count, maxPages, results } = await listAllCryptocurrenciesService(
      request.query as unknown as ListAllCryptocurrenciesFiltersDto,
      paginationQuery
    )

    response.setHeader('Count', count)
    response.setHeader('Max-Pages', maxPages)
    return response.status(200).json(results)
  },
  updateCryptocurrencyVotes: async (request: Request, response: Response) => {
    const { id } = request.params
    const cryptoCurrency = await updateCryptocurrencyVotes({ id })
    return response.status(200).json(cryptoCurrency)
  },
  createCryptocurrency: async (request: Request, response: Response) => {
    const { name, price } = request.body
    const params = { name, price, votes: 0 }
    const cryptoCurrency = await createCryptocurrency(params)
    return response.status(201).json(cryptoCurrency)
  }
}

import { Request, Response } from 'express'
import { ListAllCriptocurrenciesFiltersDto } from './dto/list-all-criptocurrencies.dto'
import { createCriptocurrency } from './services/create-criptocurrency.service'
import { listAllCriptoCurrenciesService } from './services/list-all-criptocurrencies.service'
import { updateCriptocurrencyVotes } from './services/update-criptocurrency-votes.service'
import { validatePaginationQuery } from './validators/validate-pagination-query.validator'

export const criptoCurrencyController = {
  listAllCriptoCurrencies: async (request: Request, response: Response) => {
    const paginationQuery = validatePaginationQuery(request)
    const { count, maxPages, results } = await listAllCriptoCurrenciesService(
      request.query as unknown as ListAllCriptocurrenciesFiltersDto,
      paginationQuery
    )

    response.setHeader('Count', count)
    response.setHeader('Max-Pages', maxPages)
    return response.status(200).json(results)
  },
  updateCriptoCurrencyVotes: async (request: Request, response: Response) => {
    const { id } = request.params
    const { vote } = request.body
    const params = { id, vote }
    const criptoCurrency = await updateCriptocurrencyVotes(params)
    return response.status(200).json(criptoCurrency)
  },
  createCriptoCurrency: async (request: Request, response: Response) => {
    const { name } = request.body
    const params = { name, price: 0, votes: 0 }
    const criptoCurrency = await createCriptocurrency(params)
    return response.status(201).json(criptoCurrency)
  }
}

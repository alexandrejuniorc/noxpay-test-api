import { cryptocurrencyRepository } from '../cryptocurrency.repositories'
import {
  ListAllCryptocurrenciesFiltersDto,
  ListAllCryptocurrenciesPaginationDto
} from '../dto/list-all-cryptocurrencies.dto'

export async function listAllCryptocurrenciesService(
  filters?: ListAllCryptocurrenciesFiltersDto,
  paginationQuery?: ListAllCryptocurrenciesPaginationDto
) {
  const prismaFilters = {
    skip: paginationQuery ? (paginationQuery.page - 1) * paginationQuery.top : undefined,
    take: paginationQuery ? paginationQuery.top : undefined,
    where: {
      name: {
        contains: filters?.name
      }
    }
  }

  const [results, count] = await Promise.all([
    cryptocurrencyRepository.findMany(prismaFilters),
    cryptocurrencyRepository.countGroup(prismaFilters.where)
  ])

  const maxPages = paginationQuery ? Math.ceil(count / paginationQuery.top) : 1

  return { maxPages, count, results }
}

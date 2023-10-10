import { criptoCurrencyRepository } from '../criptocurrency.repositories'
import {
  ListAllCriptocurrenciesFiltersDto,
  ListAllCriptocurrenciesPaginationDto
} from '../dto/list-all-criptocurrencies.dto'

export async function listAllCriptoCurrenciesService(
  filters?: ListAllCriptocurrenciesFiltersDto,
  paginationQuery?: ListAllCriptocurrenciesPaginationDto
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
    criptoCurrencyRepository.findMany(prismaFilters),
    criptoCurrencyRepository.countGroup(prismaFilters.where)
  ])

  const maxPages = paginationQuery ? Math.ceil(count / paginationQuery.top) : 1

  return { maxPages, count, results }
}

import { criptoCurrencyRepository } from '../criptocurrency.repositories'

export async function listAllCriptoCurrenciesService() {
  const criptoCurrencies = await criptoCurrencyRepository.findMany({})
  return criptoCurrencies
}

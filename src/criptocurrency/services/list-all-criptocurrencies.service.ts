import { prisma } from '../../shared/database/prisma'

export async function listAllCriptoCurrenciesService() {
  const criptoCurrencies = await prisma.criptoCurrency.findMany()
  console.log(criptoCurrencies)

  return criptoCurrencies
}

import { criptoCurrencyRepository } from '../criptocurrency.repositories'
import { CreateCriptocurrencySchemaDto } from '../dto/create-criptocurrency.dto'

export async function createCriptocurrency({ name, votes }: CreateCriptocurrencySchemaDto) {
  const criptoCurrency = await criptoCurrencyRepository.create({
    name,
    votes
  })

  return criptoCurrency
}

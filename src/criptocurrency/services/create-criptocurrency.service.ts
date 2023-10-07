import { InternalException } from '../../shared/exceptions/internal.exception'
import { criptoCurrencyRepository } from '../criptocurrency.repositories'
import { CreateCriptocurrencySchemaDto } from '../dto/create-criptocurrency.dto'

export async function createCriptocurrency({ name, votes }: CreateCriptocurrencySchemaDto) {
  const criptoCurrencyExists = await criptoCurrencyRepository.findMany({
    where: { name }
  })

  if (criptoCurrencyExists.length > 0) {
    throw new InternalException({
      id: 'internal',
      message: 'Criptocurrency already exists'
    })
  }

  const criptoCurrency = await criptoCurrencyRepository.create({
    name,
    votes
  })

  return criptoCurrency
}

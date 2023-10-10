import { InternalException } from '../../shared/exceptions/internal.exception'
import { cryptocurrencyRepository } from '../cryptocurrency.repositories'
import { CreateCryptocurrencySchemaDto } from '../dto/create-cryptocurrency.dto'

export async function createCryptocurrency({ name, price, votes }: CreateCryptocurrencySchemaDto) {
  const cryptoCurrencyExists = await cryptocurrencyRepository.findMany({
    where: { name }
  })

  if (cryptoCurrencyExists.length > 0) {
    throw new InternalException({
      id: 'internal',
      message: 'Cryptocurrency already exists'
    })
  }

  const cryptoCurrency = await cryptocurrencyRepository.create({
    name,
    price,
    votes
  })

  return cryptoCurrency
}

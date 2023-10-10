import { InternalException } from '../../shared/exceptions/internal.exception'
import { cryptocurrencyRepository } from '../cryptocurrency.repositories'
import { UpdateCryptocurrencyVotesSchemaDto } from '../dto/update-cryptocurrency-votes.dto'

export async function updateCryptocurrencyVotes({ id }: UpdateCryptocurrencyVotesSchemaDto) {
  const cryptoCurrency = await cryptocurrencyRepository.findUnique({
    where: { id }
  })

  if (!cryptoCurrency) {
    throw new InternalException({
      id: 'internal',
      message: 'Cryptocurrency not found'
    })
  }

  return cryptocurrencyRepository.update({
    where: { id },
    data: { votes: cryptoCurrency.votes + 1 }
  })
}

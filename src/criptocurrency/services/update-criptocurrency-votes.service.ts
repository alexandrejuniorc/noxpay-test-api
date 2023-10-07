import { InternalException } from '../../shared/exceptions/internal.exception'
import { criptoCurrencyRepository } from '../criptocurrency.repositories'
import { UpdateCriptocurrencyVotesSchemaDto } from '../dto/update-criptocurrency-votes.dto'

export async function updateCriptocurrencyVotes({ id, vote }: UpdateCriptocurrencyVotesSchemaDto) {
  const criptoCurrency = await criptoCurrencyRepository.findUnique({
    where: { id }
  })

  if (!criptoCurrency) {
    throw new InternalException({
      id: 'internal',
      message: 'Criptocurrency not found'
    })
  }

  return criptoCurrencyRepository.update({
    where: { id },
    data: { votes: criptoCurrency.votes + vote }
  })
}

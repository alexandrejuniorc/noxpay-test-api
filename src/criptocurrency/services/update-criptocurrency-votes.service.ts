import { prisma } from '../../shared/database/prisma'
import { InternalException } from '../../shared/exceptions/internal.exception'
import { UpdateCriptocurrencyVotesSchemaDto } from '../dto/update-criptocurrency-votes.dto'

export async function updateCriptocurrencyVotes({ id, vote }: UpdateCriptocurrencyVotesSchemaDto) {
  const criptoCurrency = await prisma.criptoCurrency.findUnique({
    where: { id }
  })

  if (!criptoCurrency) {
    throw new InternalException({
      id: 'internal',
      message: 'Criptocurrency not found'
    })
  }

  return prisma.criptoCurrency.update({
    where: { id },
    data: { votes: criptoCurrency.votes + vote }
  })
}

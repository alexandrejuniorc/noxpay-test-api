import { prisma } from '../../shared/database/prisma'
import { InternalException } from '../../shared/exceptions/internal.exception'

export async function updateCriptocurrencyVotes(id: string, vote: number) {
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

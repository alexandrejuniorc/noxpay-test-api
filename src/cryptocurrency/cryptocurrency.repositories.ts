import { Prisma } from '@prisma/client'
import { prisma } from '../shared/database/prisma'

export const cryptocurrencyRepository = {
  async create(data: Prisma.CryptocurrencyCreateInput) {
    return await prisma.cryptocurrency.create({ data })
  },
  async update(args: Prisma.CryptocurrencyUpdateArgs) {
    return await prisma.cryptocurrency.update(args)
  },
  async findMany(args: Prisma.CryptocurrencyFindManyArgs) {
    return await prisma.cryptocurrency.findMany(args)
  },
  async findUnique(args: Prisma.CryptocurrencyFindUniqueArgs) {
    return await prisma.cryptocurrency.findUnique(args)
  },
  async countGroup(where: Prisma.CryptocurrencyFindManyArgs['where']) {
    return await prisma.cryptocurrency.count({ where })
  }
}

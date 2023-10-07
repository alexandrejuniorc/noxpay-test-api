import { Prisma } from '@prisma/client'
import { prisma } from '../shared/database/prisma'

export const criptoCurrencyRepository = {
  async create(data: Prisma.CriptoCurrencyCreateInput) {
    return await prisma.criptoCurrency.create({ data })
  },
  async update(args: Prisma.CriptoCurrencyUpdateArgs) {
    return await prisma.criptoCurrency.update(args)
  },
  async findMany(args: Prisma.CriptoCurrencyFindManyArgs) {
    return await prisma.criptoCurrency.findMany(args)
  },
  async findUnique(args: Prisma.CriptoCurrencyFindUniqueArgs) {
    return await prisma.criptoCurrency.findUnique(args)
  }
}

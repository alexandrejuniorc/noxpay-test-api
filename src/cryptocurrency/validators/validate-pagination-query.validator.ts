import { Request } from 'express'
import { BadRequestException } from '../../shared/exceptions/bad-request.exception'

export function validatePaginationQuery(request: Request) {
  if (!request.query.top && !request.query.page) return

  if (request.query.top && request.query.page) {
    if (Array.isArray(request.query.top) || Array.isArray(request.query.page)) {
      throw new BadRequestException({
        id: 'invalid-pagination-query',
        message: 'Pagination properties must be unique'
      })
    }

    if (Number.isNaN(request.query.top) || Number.isNaN(request.query.page)) {
      throw new BadRequestException({
        id: 'invalid-pagination-query',
        message: 'Pagination properties must be numbers'
      })
    }

    if (Number(request.query.top) <= 0 || Number(request.query.page) <= 0) {
      throw new BadRequestException({
        id: 'invalid-pagination-query',
        message: 'Paging properties must be greater than 0'
      })
    }

    return { top: Number(request.query.top), page: Number(request.query.page) }
  }

  throw new BadRequestException({
    id: 'invalid-pagination-query',
    message: 'Only a pagination query value has been provided. Submit both or submit neither.'
  })
}

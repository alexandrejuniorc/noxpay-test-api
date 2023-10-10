export interface ListAllCriptocurrenciesPaginationDto {
  page: number
  top: number
}

export interface ListAllCriptocurrenciesFiltersDto {
  createdAt: 'asc' | 'desc'
  name: string
  id: string
}

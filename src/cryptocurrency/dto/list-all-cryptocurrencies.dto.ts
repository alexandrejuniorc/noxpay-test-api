export interface ListAllCryptocurrenciesPaginationDto {
  page: number
  top: number
}

export interface ListAllCryptocurrenciesFiltersDto {
  createdAt: 'asc' | 'desc'
  name: string
  id: string
}

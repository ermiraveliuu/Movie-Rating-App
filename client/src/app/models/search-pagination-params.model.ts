export interface SearchPaginationParams {
  searchValue: string;
  nextUrl?: string;
  limit?: string;
  page?: number;
  isDesc?: boolean;
  sortDirection?: string;
  sortColumn?: string;
}

export const defaultSearchPaginationParams: SearchPaginationParams = {
  searchValue: '',
  limit: '50'
};

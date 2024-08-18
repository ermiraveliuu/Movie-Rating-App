export interface ApiResponse<T> {
  status: string;
  data: T[];
  length: number;
  pageCount: string;
}

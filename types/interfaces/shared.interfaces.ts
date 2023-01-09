interface GetListRequest {
  page?: number;
  onPage?: number;
  sortBy?: number;
  sortDirection?: 1 | -1;
  search?: string;
}

interface GetListResponse<Data> {
  data: Data;
  totalCount: number;
}

export { GetListRequest, GetListResponse };

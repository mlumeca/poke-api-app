export interface BerryListResponse {
    count: number
    next: string
    previous: any
    results: Berry[]
  }
  
  export interface Berry {
    name: string
    url: string
  }
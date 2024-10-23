export interface MoveListResponse {
    count: number
    next: string
    previous: any
    results: Move[]
  }
  
  export interface Move {
    name: string
    url: string
  }
  
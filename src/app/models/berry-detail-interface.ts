export interface BerryDetailResponse {
    firmness: Firmness
    flavors: Flavor[]
    growth_time: number
    id: number
    item: Item
    max_harvest: number
    name: string
    natural_gift_power: number
    natural_gift_type: NaturalGiftType
    size: number
    smoothness: number
    soil_dryness: number
  }
  
  export interface Firmness {
    name: string
    url: string
  }
  
  export interface Flavor {
    flavor: Flavor2
    potency: number
  }
  
  export interface Flavor2 {
    name: string
    url: string
  }
  
  export interface Item {
    name: string
    url: string
  }
  
  export interface NaturalGiftType {
    name: string
    url: string
  }
  
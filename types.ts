
export interface CeramicProduct {
  id: string;
  name: string;
  artist: string;
  price: number;
  imageUrl: string;
  series: string;
  origin?: string;
  firing?: string;
  texture?: string;
  craftDetails?: string;
}

export interface Artist {
  id: string;
  name: string;
  tagline: string;
  avatarUrl: string;
  bgUrl: string;
}

export interface CartItem extends CeramicProduct {
  quantity: number;
}

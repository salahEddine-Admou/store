export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
  rating: number;
}

export interface Image {
  id: string;
  url: string;
}

export interface BillboardImage {
  url: string;
  label: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface PriceRange {
  id: string;
  name: string;
  min: number;
  max: number | null;
}


export interface Store {
  id: string;
  name: string;
}
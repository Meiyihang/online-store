export interface Product {
  name: string,
  sku: string,
  price: number,
  discountPrice: number,
  pictureUrls: string[],
  description: string,
  stock: number
}

export enum ProductCategoryType {
  Shirts = 1,
  Pants,
  Shoes,
  Accessories,
  SwimWear,
  ActiveWear
}

export interface ProductCategory {
  pictureUrl: string,
  name: string,
  id: ProductCategoryType
}

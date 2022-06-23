import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Product,ProductCategoryType, ProductCategory } from "src/models/product.model";

@Injectable({providedIn: 'root'})

export class ProductService {

  constructor(private httpClient: HttpClient){}

  public  getProducts(type: ProductCategoryType): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:4200/allproducts');
}

/**
 * Returns a list of mocked product categories.
 * TODO: Remove this when we have a back-end.
 * @returns
 */
public getCategories(): Observable<ProductCategory[]> {
  return this.httpClient.get<ProductCategory[]>('http://localhost:4200/allproducts');
}

}

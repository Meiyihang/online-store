import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory, ProductCategoryType } from 'src/models/product.model';
import { ProductService } from 'src/services/women.product.service';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  public products: Product[] = [];

  public categories: ProductCategory[] = [];

  public selectedCategory?:ProductCategoryType;
  productService: any;

  constructor(
    private womenProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.categories = this.womenProductService.getCategories();
  }

  public onCategoryClick(womenType: ProductCategoryType) {
    this.selectedCategory = womenType;

    this.products = this.productService.getProducts(womenType);
}

}

import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory, ProductCategoryType } from 'src/models/product.model';
import { ProductService } from 'src/services/kids.product.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  public products: Product[] = [];

  public categories: ProductCategory[] = [];

  public selectedCategory?:ProductCategoryType;
  productService: any;

  constructor(
    private menProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.categories = this.menProductService.getCategories();
  }

  public onCategoryClick(menType: ProductCategoryType) {
    this.selectedCategory = menType;

    this.products = this.productService.getProducts(menType);
}



}

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

  constructor(
    private kidsProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.categories = this.kidsProductService.getCategories();
  }

  public onCategoryClick(kidsType: ProductCategoryType) {
    this.selectedCategory = kidsType;

    this.products = this.kidsProductService.getProducts(kidsType);
}

public onBackToCategories(): void {
  this.selectedCategory = undefined;
  this.products = [];
}

}

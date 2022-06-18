import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory, ProductCategoryType } from 'src/models/product.model';
import { ProductService } from 'src/services/men.product.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  public products: Product[] = [];

  public categories: ProductCategory[] = [];

  public selectedCategory?:ProductCategoryType;



  constructor(
    private menProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.categories = this.menProductService.getCategories();
  }

  public onCategoryClick(menType: ProductCategoryType) {
    this.selectedCategory = menType;

    this.products = this.menProductService.getProducts(menType);
}

public onBackToCategories(): void {
  this.selectedCategory = undefined;
  this.products = [];
}


}

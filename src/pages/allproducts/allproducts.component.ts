import { Component, OnInit } from '@angular/core';
import { Product, ProductCategory, ProductCategoryType } from 'src/models/product.model';
import { ProductService } from 'src/services/all.products.service';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  public products: Product[] = [];

  public categories: ProductCategory[] = [];

  public selectedCategory?:ProductCategoryType;


  constructor(
    public allProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.allProductService.getCategories().subscribe(data =>{
      this.categories = data;
    });
  }

  public onCategoryClick(allType: ProductCategoryType) {
    this.selectedCategory = allType;

    this.allProductService.getProducts(allType).subscribe(data =>{
      this.products = data;
    });
  }

  public onBackToCategories(): void {
    this.selectedCategory = undefined;
    this.products = [];
  }

}

import { Injectable } from "@angular/core";
import { Product, ProductCategory, ProductCategoryType } from "src/models/product.model";

@Injectable({providedIn: 'root'})
export class ProductService {
    getProducts(type: ProductCategoryType): Product[] {
        const prodArr: Product[] = [];

        prodArr.push({
            description: 'This is a sample product',
            name: 'Sample product',
            discountPrice: 1000,
            price: 1500,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a sample product',
            name: 'Sample product',
            discountPrice: 1000,
            price: 1500,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a sample product',
            name: 'Sample product',
            discountPrice: 1000,
            price: 1500,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a sample product',
            name: 'Sample product',
            discountPrice: 1000,
            price: 1500,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a sample product',
            name: 'Sample product',
            discountPrice: 1000,
            price: 1500,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a sample product',
            name: 'Sample product',
            discountPrice: 1000,
            price: 1500,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-on-shoes-1637184473.jpg'
            ]
        });

        return prodArr;
    }

    /**
     * Returns a list of mocked product categories.
     * TODO: Remove this when we have a back-end.
     * @returns
     */
    public getCategories(): ProductCategory[] {
        const womenArray: ProductCategory[] = [];
        womenArray.push({
            name: 'Shirts',
            pictureUrl: '/assets/women-shirts.jpg',
            id: ProductCategoryType.Shirts
        });
        womenArray.push({
            name: 'Pants',
            pictureUrl: '/assets/women-dress.jpg',
            id: ProductCategoryType.Pants
        });
        womenArray.push({
            name: 'Shoes',
            pictureUrl: '/assets/women-pants.jpg',
            id: ProductCategoryType.Shoes
        });
        womenArray.push({
            name: 'Accessories',
            pictureUrl: '/assets/women-accessories.jpg',
            id: ProductCategoryType.Accessories
        });
        womenArray.push({
            name: 'SwimWear',
            pictureUrl: '/assets/women-swimwear.jpg',
            id: ProductCategoryType.SwimWear
          });
        womenArray.push({
            name: 'ActiveWear',
            pictureUrl: '/assets/women-activewear.jpg',
            id: ProductCategoryType.ActiveWear
        });

        return womenArray;
    }
}

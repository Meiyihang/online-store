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
        const menArray: ProductCategory[] = [];
        menArray.push({
            name: 'Shirts',
            pictureUrl: '/assets/men-shirts.jpg',
            id: ProductCategoryType.Shirts
        });
        menArray.push({
            name: 'Pants',
            pictureUrl: '/assets/men-pants.jpg',
            id: ProductCategoryType.Pants
        });
        menArray.push({
            name: 'Shoes',
            pictureUrl: '/assets/men-shoes.jpg',
            id: ProductCategoryType.Shoes
        });
        menArray.push({
            name: 'Accessories',
            pictureUrl: '/assets/men-accessories.jpg',
            id: ProductCategoryType.Accessories
        });
        menArray.push({
            name: 'SwimWear',
            pictureUrl: '/assets/men-swimwear.jpg',
            id: ProductCategoryType.SwimWear
          });
        menArray.push({
            name: 'ActiveWear',
            pictureUrl: '/assets/men-activewear.jpg',
            id: ProductCategoryType.ActiveWear
        });

        return menArray;
    }
}

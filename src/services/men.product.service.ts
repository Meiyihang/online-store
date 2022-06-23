import { Injectable } from "@angular/core";

import { Product, ProductCategory, ProductCategoryType } from "src/models/product.model";

@Injectable({providedIn: 'root'})
export class ProductService {
    getProducts(type: ProductCategoryType): Product[] {
        const prodArr: Product[] = [];

        prodArr.push({
            description: 'This is a mens product 1',
            name: 'menwear 1',
            discountPrice: 1000,
            price: 1500,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/menwear1.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a mens product 2',
            name: 'menwear 2',
            discountPrice: 800,
            price: 1600,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
              '/assets/menwear2.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a mens product 3',
            name: 'menwear 3',
            discountPrice: 900,
            price: 2000,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
              '/assets/menwear3.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a mens product 4',
            name: 'menwear 4',
            discountPrice: 550,
            price: 1700,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
              '/assets/menwear4.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a mens product 5',
            name: 'menwear 5',
            discountPrice: 1540,
            price: 3600,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
              '/assets/menwear5.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a mens product 6',
            name: 'menwear 6',
            discountPrice: 1800,
            price: 2000,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
              '/assets/menwear6.jpg'
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

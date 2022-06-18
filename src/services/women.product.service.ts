import { Injectable } from "@angular/core";
import { Product, ProductCategory, ProductCategoryType } from "src/models/product.model";

@Injectable({providedIn: 'root'})
export class ProductService {
    getProducts(type: ProductCategoryType): Product[] {
        const prodArr: Product[] = [];

        prodArr.push({
            description: 'This is a womens product 1',
            name: 'womenwear 1',
            discountPrice: 333,
            price: 1500,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/womenwear1.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a womens product 2',
            name: 'womenwear 2',
            discountPrice: 190,
            price: 800,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/womenwear2.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a womens product 3',
            name: 'womenwear 3',
            discountPrice: 170,
            price: 200,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/womenwear3.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a womens product 4',
            name: 'womenwear 4',
            discountPrice: 600,
            price: 1000,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/womenwear4.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a womens product 5',
            name: 'womenwear 5',
            discountPrice: 800,
            price: 1900,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/womenwear5.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a womens product 6',
            name: 'womenwear 6',
            discountPrice: 1550,
            price: 2300,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/womenwear6.jpg'
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

import { Injectable } from "@angular/core";
import { Product, ProductCategory, ProductCategoryType } from "src/models/product.model";

@Injectable({providedIn: 'root'})
export class ProductService {
    getProducts(type: ProductCategoryType): Product[] {
        const prodArr: Product[] = [];

        prodArr.push({
            description: 'This is kids product 1',
            name: 'kidswear 1',
            discountPrice: 100,
            price: 200,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/kidswear1.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a kids product 2',
            name: 'kidswear 2',
            discountPrice: 300,
            price: 400,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/kidswear2.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a kids product 3',
            name: 'kidswear 3',
            discountPrice: 500,
            price: 600,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/kidswear3.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a kids product 4',
            name: 'kidswear 4',
            discountPrice: 700,
            price: 800,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/kidswear4.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a kids product 5',
            name: 'kidswear 5',
            discountPrice: 900,
            price: 1500,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/kidswear5.jpg'
            ]
        });

        prodArr.push({
            description: 'This is a kids product 6',
            name: 'kidswear 6',
            discountPrice: 1000,
            price: 1500,
            sku: 'prod-1',
            stock: 5,
            pictureUrls: [
                '/assets/kidswear6.jpg'
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
            pictureUrl: '/assets/kids-shirts.jpg',
            id: ProductCategoryType.Shirts
        });
        menArray.push({
            name: 'Pants',
            pictureUrl: '/assets/kids-pants.jpg',
            id: ProductCategoryType.Pants
        });
        menArray.push({
            name: 'Shoes',
            pictureUrl: '/assets/kids-shoes.jpg',
            id: ProductCategoryType.Shoes
        });
        menArray.push({
            name: 'Accessories',
            pictureUrl: '/assets/kids-accessories.png',
            id: ProductCategoryType.Accessories
        });
        menArray.push({
            name: 'SwimWear',
            pictureUrl: '/assets/kids-swimwear.jpg',
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

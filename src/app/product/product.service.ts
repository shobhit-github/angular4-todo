import {Injectable} from '@angular/core';
import {Product} from './product';
import {PRODUCT_DATA} from './product-data';
import { findIndex } from 'lodash';


@Injectable()
export class ProductService {
  private upersons =  PRODUCT_DATA;

  getProductsFromData(): Product[]{

    return this.upersons;
  }

  addProduct(user: Product) {
    this.upersons.push(user);
    console.log(this.upersons);

  }
  updateProduct(product: any) {
    console.log(product)
    const index = findIndex(this.upersons,( u: any) => {
      return u.id === product.id;
    })
    this.upersons[index] = product;
  }
  deleteProduct(product: Product) {
    this.upersons.splice(this.upersons.indexOf(product),1);
    console.log(this.upersons);
  }

  constructor() { }

}

import {Component, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';
import {clone} from 'lodash';

@Component({
  selector: 'app-user',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  isNewProduct: boolean;
  newProduct: any = {};
  editedProduct: any = {};

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts = function () {
    this.products = this.productService.getProductsFromData();
  };

  showEditProductForm(pdt: Product, id: number) {
    if (!pdt) {
      return;
    }
    pdt['id'] = id;
    this.editedProduct = clone(pdt);


  }

  showAddProductForm() {

    // resets form if edited product
    if (this.products.length) {
      this.newProduct = {};
    }
    this.isNewProduct = true;

  }

  saveProduct = function (pdt: Product) {
    if (this.isNewProduct) {

      this.productService.addProduct(pdt);
    }
  };

  updateProduct() {
    this.productService.updateProduct(this.editedProduct);
    this.editedProduct = {};
  }

  removeProduct(pdt: Product) {
    this.productService.deleteProduct(pdt);
  }

  cancelEdits() {
    this.editedProduct = {};
  }

  cancelNewProduct() {
    this.newProduct = {};
  }

}

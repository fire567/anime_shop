import { makeAutoObservable } from "mobx";
import {
    productsData,
    productMapType,
    productEntityType,
    productType,
} from "../Components/data/data";
import { toJS } from "mobx";

class Products {
    allProducts: productMapType = productsData;

    constructor() {
        makeAutoObservable(this);
    }

    addProduct(product: productEntityType) {
        this.allProducts.set(this.allProducts.size, product);
    }

    deleteProduct(product: [number, productEntityType]) {
        this.allProducts.delete(product[0]);
    }
}

export default Products;

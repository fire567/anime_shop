import { makeAutoObservable } from "mobx";
import { productsData, productType } from "../Components/data/data";
import { toJS } from "mobx";

class Products {
    allProducts: productType[] = [...productsData];

    constructor() {
        makeAutoObservable(this);
    }

    deleteProduct(product: productType) {
        for (let i = 0; i < this.allProducts.length; i++) {
            if (this.allProducts[i].id === product.id) {
                this.allProducts.splice(i, 1);
            }
        }
    }

    addProduct(product: productType) {
        this.allProducts.push(product);
    }
}

const products = new Products();

export default Products;

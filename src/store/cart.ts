import { makeAutoObservable } from "mobx";
import {
    productType,
    productMapType,
    productEntityType,
} from "../Components/data/data";

interface cartProductsType extends productType {
    count: number;
}

class Cart {
    cartProducts: productMapType = new Map();

    constructor() {
        makeAutoObservable(this);
    }

    addCartProduct(newProduct: [number, productEntityType]) {
        this.cartProducts.set(newProduct[0], {
            ...newProduct[1],
            count: 1,
        });
    }

    deleteCartProduct(newProduct: [number, productEntityType]) {
        this.cartProducts.delete(newProduct[0]);
    }

    increaseProductEntity(newProduct: [number, productEntityType]) {
        for (let i = 0; i < this.cartProducts.size; i++) {
            if (Array.from(this.cartProducts)[i][0] === newProduct[0]) {
                console.log("changed");
                console.log((Array.from(this.cartProducts)[i][1].count! += 1));
            }
        }
    }

    decreaseProductEntity(newProduct: [number, productEntityType]) {
        for (let i = 0; i < this.cartProducts.size; i++) {
            if (Array.from(this.cartProducts)[i][0] === newProduct[0])
                if (Array.from(this.cartProducts)[i][1].count! > 1) {
                    Array.from(this.cartProducts)[i][1].count! -= 1;
                } else this.deleteCartProduct(newProduct);
        }
    }

    deleteAllProducts() {
        this.cartProducts = new Map();
    }
}

export default Cart;

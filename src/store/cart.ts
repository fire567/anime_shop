import { makeAutoObservable } from "mobx";
import { productType } from "../Components/data/data";
import { toJS } from "mobx";

interface cartProductsType extends productType {
    count: number;
}

class Cart {
    cartProducts: cartProductsType[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addCartProduct(newProduct: productType) {
        this.cartProducts.push({ ...newProduct, count: 1 });
    }

    deleteCartProduct(newProduct: productType) {
        for (let i = 0; i < this.cartProducts.length; i++) {
            if (this.cartProducts[i].id === newProduct.id) {
                this.cartProducts.splice(i, 1);
            }
        }
    }

    deleteAllProducts() {
        this.cartProducts = [];
    }

    increaseProductEntity(newProduct: productType) {
        for (let i = 0; i < this.cartProducts.length; i++) {
            if (this.cartProducts[i].id === newProduct.id) {
                this.cartProducts[i].count += 1;
            }
        }
    }

    decreaseProductEntity(newProduct: productType) {
        for (let i = 0; i < this.cartProducts.length; i++) {
            if (this.cartProducts[i].id === newProduct.id)
                if (this.cartProducts[i].count > 1) {
                    this.cartProducts[i].count -= 1;
                } else this.deleteCartProduct(newProduct);
        }
    }
}

const cart = new Cart();

export default Cart;

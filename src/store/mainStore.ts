import { makeAutoObservable } from "mobx";
import cart from "./cart";
import products from "./products";

class MainStore {
    cart;
    products;
    constructor() {
        this.cart = new cart();
        this.products = new products();
        makeAutoObservable(this);
    }
}

const mainStore = new MainStore();

export default mainStore;

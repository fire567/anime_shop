import { makeAutoObservable } from "mobx";
import cart from "./cart";
import products from "./products";
import admin from "./adminStore";

class MainStore {
    cart;
    products;
    admin;
    constructor() {
        this.cart = new cart();
        this.products = new products();
        this.admin = new admin();
        makeAutoObservable(this);
    }
}

const mainStore = new MainStore();

export default mainStore;

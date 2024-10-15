import { makeAutoObservable } from "mobx";

class Admin {
    isAdmin: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    changeIsAdmin() {
        this.isAdmin = !this.isAdmin;
    }
}

export default Admin;

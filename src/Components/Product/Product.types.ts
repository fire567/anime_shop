import { productType } from "../data/data";

export interface ProductProps {
    product: productType;
    login: string;
    password: string;
    filteredProductsList: productType[];
    setFilteredProductsList: (value: productType[]) => void;
}

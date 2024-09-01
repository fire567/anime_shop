import { productType } from "../data/data";

export interface ProductsProps {
    filteredProductsList: productType[];
    currentListItems: productType[] | null;
    setFilteredProductsList: (value: productType[]) => void;
    login: string;
    password: string;
}

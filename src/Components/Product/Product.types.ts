import { productType, productEntityType } from "../data/data";

export interface ProductProps {
    product: [number, productEntityType];
    filteredProductsList: productType;
    setFilteredProductsList: (value: productType) => void;
}

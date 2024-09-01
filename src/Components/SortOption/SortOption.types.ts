import { productType } from "../data/data";

export interface SortOptionProps {
    text: string;
    setFilteredProductsList: (value: productType[]) => void;
    filteredProductsList: productType[];
}

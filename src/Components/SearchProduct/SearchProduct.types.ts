import { productType } from "../data/data";

export interface SearchProductProps {
    setSearchBarText: (value: string) => void;
    searchBarText: string;
    setFilteredProductsList: (value: productType) => void;
    filteredProductsList: productType;
}

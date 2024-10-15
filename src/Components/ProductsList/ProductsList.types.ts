import { productType } from "../data/data";

export interface ProductsListProps {
    filteredProductsList: productType;
    setSearchBarText: (value: string) => void;
    searchBarText: string;
    setFilteredProductsList: (value: productType) => void;
    setCurrentPage: (value: number) => void;
    currentPage: number;
    currentListItems: productType | null;
}

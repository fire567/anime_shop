import { productType } from "../data/data";

export interface ProductsListContainerProps {
    filteredProductsList: productType;
    setFilteredProductsList: (value: productType) => void;
    currentPage: number;
    setCurrentPage: (value: number) => void;
    setSearchBarText: (value: string) => void;
    searchBarText: string;
    setCurrentAnimeCategory: (value: string[]) => void;
    setCurrentMaterialCategory: (value: string[]) => void;
    setPriceFrom: (value: number) => void;
    setPriceTo: (value: number) => void;
}

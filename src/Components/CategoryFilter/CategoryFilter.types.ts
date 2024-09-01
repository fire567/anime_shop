import { productType } from "../data/data";

export interface CategoryFilterProps {
    currentAnimeCutegory: string[];
    setCurrentAnimeCategory: (value: string[]) => void;
    currentMaterialCutegory: string[];
    setCurrentMaterialCategory: (value: string[]) => void;
    priceFrom: number;
    setPriceFrom: (value: number) => void;
    priceTo: number;
    setPriceTo: (value: number) => void;
    setFilteredProductsList: (products: productType[]) => void;
    filteredProductsList: productType[];
    setCurrentPage: (products: number) => void;
    setSearchBarText: (value: string) => void;
    searchBarText: string;
}

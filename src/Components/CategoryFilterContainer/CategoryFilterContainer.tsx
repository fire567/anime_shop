import { FC, useEffect, useState } from "react";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import { CategoryFilterContainerProps } from "./CategoryFilterContainer.types";

export const CategoryFilterContainer: FC<CategoryFilterContainerProps> = ({
    setFilteredProductsList,
    filteredProductsList,
    setCurrentPage,
    searchBarText,
    setSearchBarText,
    currentAnimeCutegory,
    setCurrentAnimeCategory,
    currentMaterialCutegory,
    setCurrentMaterialCategory,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
}) => {
    useEffect(() => {
        if (priceTo < priceFrom) {
            setPriceTo(priceFrom);
        }
    }, [priceFrom]);

    return (
        <CategoryFilter
            currentAnimeCutegory={currentAnimeCutegory}
            setCurrentAnimeCategory={setCurrentAnimeCategory}
            currentMaterialCutegory={currentMaterialCutegory}
            setCurrentMaterialCategory={setCurrentMaterialCategory}
            priceFrom={priceFrom}
            setPriceFrom={setPriceFrom}
            priceTo={priceTo}
            setPriceTo={setPriceTo}
            setFilteredProductsList={setFilteredProductsList}
            filteredProductsList={filteredProductsList}
            setCurrentPage={setCurrentPage}
            setSearchBarText={setSearchBarText}
            searchBarText={searchBarText}
        />
    );
};

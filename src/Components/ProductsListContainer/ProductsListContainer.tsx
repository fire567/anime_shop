import { FC, useEffect, useState } from "react";
import { ProductsList } from "../ProductsList/ProductsList";
import { ProductsListContainerProps } from "./ProductsListContainer.types";
import { productType } from "../data/data";
import mainStore from "../../store/mainStore";
import { searchedProducts } from "../../helpers";

export const ProductsListContainer: FC<ProductsListContainerProps> = ({
    filteredProductsList,
    setFilteredProductsList,
    login,
    password,
    currentPage,
    setCurrentPage,
    searchBarText,
    setSearchBarText,
    setCurrentAnimeCategory,
    setCurrentMaterialCategory,
    setPriceFrom,
    setPriceTo,
}) => {
    const [currentListItems, setCurrentListItems] = useState<
        productType[] | null
    >(null);
    const lastPageIndex = currentPage * 12;
    const firstPageIndex = lastPageIndex - 12;

    useEffect(() => {
        if (searchBarText.length >= 3) {
            setPriceFrom(0);
            setPriceTo(0);
            setCurrentAnimeCategory([]);
            setCurrentMaterialCategory([]);
            setFilteredProductsList(
                searchedProducts(filteredProductsList, searchBarText)
            );
        } else setFilteredProductsList(mainStore.products.allProducts);
    }, [searchBarText]);

    useEffect(() => {
        const currentProducts = [...filteredProductsList];

        const newArr = currentProducts.slice(firstPageIndex, lastPageIndex);

        setCurrentListItems(newArr);
    }, [currentPage, filteredProductsList]);

    return (
        <ProductsList
            filteredProductsList={filteredProductsList}
            setSearchBarText={setSearchBarText}
            searchBarText={searchBarText}
            setFilteredProductsList={setFilteredProductsList}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            currentListItems={currentListItems}
            login={login}
            password={password}
        />
    );
};

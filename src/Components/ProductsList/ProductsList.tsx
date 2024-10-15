import { productsListWrapper } from "./ProductsList.styles";
import { SearchProduct } from "../SearchProduct/SearchProduct";
import { Products } from "../Products/Products";
import { ListPagination } from "../ListPagination/ListPagination";
import { ProductsListProps } from "./ProductsList.types";
import { FC } from "react";

export const ProductsList: FC<ProductsListProps> = ({
    setSearchBarText,
    searchBarText,
    setFilteredProductsList,
    filteredProductsList,
    setCurrentPage,
    currentPage,
    currentListItems,
}) => {
    return (
        <div className={productsListWrapper}>
            <SearchProduct
                setSearchBarText={setSearchBarText}
                searchBarText={searchBarText}
                setFilteredProductsList={setFilteredProductsList}
                filteredProductsList={filteredProductsList}
            />

            <Products
                filteredProductsList={filteredProductsList}
                setFilteredProductsList={setFilteredProductsList}
                currentListItems={currentListItems}
            />

            <ListPagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                filteredProductsList={filteredProductsList}
            />
        </div>
    );
};

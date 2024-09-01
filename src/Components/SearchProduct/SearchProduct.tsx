import { FC } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SortOption } from "../SortOption/SortOption";
import { searchProductWrapper } from "./SearchProduct.style";
import { SearchProductProps } from "./SearchProduct.types";

export const SearchProduct: FC<SearchProductProps> = ({
    setSearchBarText,
    searchBarText,
    setFilteredProductsList,
    filteredProductsList,
}) => {
    return (
        <div className={searchProductWrapper}>
            <SearchBar
                searchBarText={searchBarText}
                setSearchBarText={setSearchBarText}
            />
            <SortOption
                text={"По названию"}
                setFilteredProductsList={setFilteredProductsList}
                filteredProductsList={filteredProductsList}
            />
            <SortOption
                text={"По цене"}
                setFilteredProductsList={setFilteredProductsList}
                filteredProductsList={filteredProductsList}
            />
        </div>
    );
};

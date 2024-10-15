import { FC, useCallback, useEffect, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SortOption } from "../SortOption/SortOption";
import { searchProductWrapper } from "./SearchProduct.style";
import { SearchProductProps } from "./SearchProduct.types";
import { nameSortHandler, priceSortHandler } from "../../helpers";

export const SearchProduct: FC<SearchProductProps> = ({
    setSearchBarText,
    searchBarText,
    setFilteredProductsList,
    filteredProductsList,
}) => {
    const [nameSwitcher, setNameSwitcher] = useState<
        "ASC" | "DESC" | undefined
    >(undefined);
    const [priceSwitcher, setPriceSwitcher] = useState<
        "ASC" | "DESC" | undefined
    >(undefined);

    useEffect(() => {
        nameSortHandler(
            filteredProductsList,
            setFilteredProductsList,
            nameSwitcher
        );
    }, [nameSwitcher]);

    useEffect(() => {
        priceSortHandler(
            filteredProductsList,
            setFilteredProductsList,
            priceSwitcher
        );
    }, [priceSwitcher]);

    const filterHandler = useCallback(
        (text: string) => {
            if (text === "По названию") {
                setPriceSwitcher("ASC");
                setNameSwitcher((prev: any) => {
                    console.log(prev);
                    if (prev === "ASC") {
                        return "DESC";
                    } else if (prev === "DESC") {
                        return "ASC";
                    }

                    return "ASC";
                });
            } else {
                setNameSwitcher("ASC");
                setPriceSwitcher((prev: any) => {
                    if (prev === "ASC") {
                        return "DESC";
                    } else if (prev === "DESC") {
                        return "ASC";
                    }

                    return "ASC";
                });
            }
        },
        [priceSwitcher, nameSwitcher, filteredProductsList]
    );

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
                switcher={nameSwitcher}
                setSwitcher={setNameSwitcher}
                filterHandler={filterHandler}
            />
            <SortOption
                text={"По цене"}
                setFilteredProductsList={setFilteredProductsList}
                filteredProductsList={filteredProductsList}
                switcher={priceSwitcher}
                setSwitcher={setPriceSwitcher}
                filterHandler={filterHandler}
            />
        </div>
    );
};

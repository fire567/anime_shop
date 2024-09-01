import { FC, useState } from "react";
import { sortOptionWrapper, triangleWrapper } from "./SortOption.style";
import triangle from "../../assets/triangle.svg";
import { SortOptionProps } from "./SortOption.types";
import { nameSortHandler, priceSortHandler } from "../../helpers";

export const SortOption: FC<SortOptionProps> = ({
    text,
    setFilteredProductsList,
    filteredProductsList,
}) => {
    const [switcher, setSwitcher] = useState(false);

    const filterHandler = () => {
        setSwitcher(!switcher);

        if (text === "По названию") {
            nameSortHandler(
                filteredProductsList,
                setFilteredProductsList,
                switcher
            );
        } else
            priceSortHandler(
                filteredProductsList,
                setFilteredProductsList,
                switcher
            );
    };

    return (
        <div className={sortOptionWrapper} onClick={() => filterHandler()}>
            {text}
            <img src={triangle} className={triangleWrapper} />
        </div>
    );
};

import { FC } from "react";
import {
    sortOptionWrapper,
    increasedTriangleWrapper,
    decreasedTriangleWrapper,
} from "./SortOption.style";
import triangle from "../../assets/triangle.svg";
import { SortOptionProps } from "./SortOption.types";

export const SortOption: FC<SortOptionProps> = ({
    text,
    filterHandler,
    switcher,
}) => {
    const drawSwitcher = () => {
        if (switcher === "ASC") {
            return decreasedTriangleWrapper;
        } else if (switcher === "DESC") {
            return increasedTriangleWrapper;
        }

        return decreasedTriangleWrapper;
    };

    return (
        <div className={sortOptionWrapper} onClick={() => filterHandler(text)}>
            {text}
            <img src={triangle} className={drawSwitcher()} />
        </div>
    );
};

import { Input } from "antd";
import { priceFilterWrapper, priceFilter } from "./PriceFilter.style";
import "./PriceFilter.css";
import { FC } from "react";
import { priceFilterProps } from "./PriceFilter.types";

export const PriceFilter: FC<priceFilterProps> = ({
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
}) => {
    return (
        <div className={priceFilterWrapper}>
            <Input
                placeholder={"От"}
                value={priceFrom}
                onChange={(e) => setPriceFrom(Number(e.target.value))}
                className={priceFilter}
                type="number"
            />
            <Input
                placeholder={"До"}
                value={priceTo}
                onChange={(e) => setPriceTo(Number(e.target.value))}
                className={priceFilter}
                type="number"
            />
        </div>
    );
};

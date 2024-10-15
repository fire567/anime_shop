import { Categories } from "../Categories/Categories";
import {
    categoryFilterWrapper,
    title,
    button,
    buttonWrapper,
} from "./CategoryFilter.styles";
import { Button } from "antd";
import { FC, useMemo } from "react";
import { CategoryFilterProps } from "./CategoryFilter.types";
import mainStore from "../../store/mainStore";
import { filterProducts } from "../../helpers";

export const CategoryFilter: FC<CategoryFilterProps> = ({
    currentAnimeCategory,
    setCurrentAnimeCategory,
    currentMaterialCutegory,
    setCurrentMaterialCategory,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    setFilteredProductsList,
    setCurrentPage,
    setSearchBarText,
}) => {
    const memFilterProducts = useMemo(
        () =>
            filterProducts(
                currentAnimeCategory,
                currentMaterialCutegory,
                priceTo,
                priceFrom
            ),
        [currentAnimeCategory, currentMaterialCutegory, priceTo, priceFrom]
    );

    const productsFilterHandler = () => {
        setSearchBarText("");
        setCurrentPage(1);
        setFilteredProductsList(memFilterProducts);
    };

    const resetFilterHandler = () => {
        setFilteredProductsList(Array.from(mainStore.products.allProducts));
        setSearchBarText("");
        setPriceFrom(0);
        setPriceTo(0);
        setCurrentAnimeCategory([]);
        setCurrentMaterialCategory([]);
        setCurrentPage(1);
    };

    return (
        <div className={categoryFilterWrapper}>
            <div className={title}>Фильтры</div>
            <Categories
                categoryName={"Аниме"}
                categoryTitle="anime"
                setValue={setCurrentAnimeCategory}
                value={currentAnimeCategory}
            />
            <Categories
                categoryName={"Материал"}
                categoryTitle="material"
                setValue={setCurrentMaterialCategory}
                value={currentMaterialCutegory}
            />
            <Categories
                categoryName={"Цена"}
                categoryTitle="price"
                priceFrom={priceFrom}
                setPriceFrom={setPriceFrom}
                priceTo={priceTo}
                setPriceTo={setPriceTo}
            />
            <div className={buttonWrapper}>
                <Button
                    type="primary"
                    className={button}
                    onClick={() => productsFilterHandler()}
                >
                    Применить
                </Button>
            </div>
            <div className={buttonWrapper}>
                <Button
                    type="primary"
                    className={button}
                    onClick={() => resetFilterHandler()}
                >
                    Сбросить
                </Button>
            </div>
        </div>
    );
};

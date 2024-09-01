import { FC } from "react";
import { Category } from "../Category/Category";
import { PriceFilter } from "../PriceFilter/PriceFilter";
import { currentCategoryWrapper, category_title } from "./Categories.styles";
import { animeCategories, materialCategories } from "../data/data";
import { CategoriesProps, categoriesList } from "./Categories.types";

export const Categories: FC<CategoriesProps> = ({
    categoryTitle,
    categoryName,
    setValue,
    value,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
}) => {
    const setCategories = (items: categoriesList[]) => {
        if (value && setValue) {
            return items.map((item: categoriesList) => (
                <Category
                    title={item.title}
                    setValue={setValue}
                    value={value}
                    filterTitle={item.title}
                />
            ));
        }
    };

    return (
        <>
            <div className={category_title}>{categoryName}</div>
            <ul className={currentCategoryWrapper}>
                {categoryTitle === "anime" && setCategories(animeCategories)}
                {categoryTitle === "material" &&
                    setCategories(materialCategories)}
                {categoryTitle === "price" &&
                    priceFrom !== undefined &&
                    setPriceFrom !== undefined &&
                    priceTo !== undefined &&
                    setPriceTo !== undefined && (
                        <PriceFilter
                            priceFrom={priceFrom}
                            setPriceFrom={setPriceFrom}
                            priceTo={priceTo}
                            setPriceTo={setPriceTo}
                        />
                    )}
            </ul>
        </>
    );
};

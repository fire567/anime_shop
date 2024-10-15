import { productEntityType, productType } from "./Components/data/data";
import mainStore from "./store/mainStore";

export const nameSortHandler = (
    products: productType,
    setProducts: (value: productType) => void,
    switcher: "ASC" | "DESC" | undefined
) => {
    const newProducts = [...products];
    if (switcher === "ASC") {
        setProducts(
            newProducts.sort(
                (
                    a: [number, productEntityType],
                    b: [number, productEntityType]
                ) => {
                    if (b[1].productName > a[1].productName) {
                        return 1;
                    }
                    if (b[1].productName < a[1].productName) {
                        return -1;
                    }

                    return 0;
                }
            )
        );
    } else if (switcher === "DESC") {
        setProducts(
            newProducts.sort(
                (
                    a: [number, productEntityType],
                    b: [number, productEntityType]
                ) => {
                    if (a[1].productName > b[1].productName) {
                        return 1;
                    }
                    if (a[1].productName < b[1].productName) {
                        return -1;
                    }

                    return 0;
                }
            )
        );
    } else setProducts(Array.from(mainStore.products.allProducts));
};

export const priceSortHandler = (
    products: productType,
    setProducts: (value: productType) => void,
    switcher: "ASC" | "DESC" | undefined
) => {
    const newProducts = [...products];
    if (switcher === "ASC") {
        setProducts(
            newProducts.sort(
                (
                    a: [number, productEntityType],
                    b: [number, productEntityType]
                ) => a[1].price - b[1].price
            )
        );
    } else if (switcher === "DESC") {
        setProducts(
            newProducts.sort(
                (
                    a: [number, productEntityType],
                    b: [number, productEntityType]
                ) => b[1].price - a[1].price
            )
        );
    } else setProducts(Array.from(mainStore.products.allProducts));
};

export const priceCountHandler = () => {
    let price = 0;
    if (Array.from(mainStore.cart.cartProducts).length > 0) {
        for (
            let i = 0;
            i < Array.from(mainStore.cart.cartProducts).length;
            i++
        ) {
            price +=
                Array.from(mainStore.cart.cartProducts)[i][1].price *
                Array.from(mainStore.cart.cartProducts)[i][1].count!;
        }
    } else return price;

    return price;
};

export const filterProducts = (
    currentAnimeCategory: string[],
    currentMaterialCategory: string[],
    priceTo: number,
    priceFrom: number
) => {
    let animeFilter = [...Array.from(mainStore.products.allProducts)];

    if (currentAnimeCategory.length > 0) {
        animeFilter = Array.from(mainStore.products.allProducts).filter(
            (product) =>
                currentAnimeCategory.some(
                    (category) => category === product[1].anime
                )
        );
    }

    let materialFilter = animeFilter;
    if (currentMaterialCategory.length > 0) {
        materialFilter = animeFilter.filter((product) =>
            currentMaterialCategory.some(
                (category) => category === product[1].material
            )
        );
    }

    let priceFilter = materialFilter;
    if (priceTo || priceFrom) {
        priceFilter = materialFilter.filter((product) => {
            if (priceFrom && !priceTo) {
                return priceFrom <= product[1].price;
            } else if (!priceFrom && priceTo) {
                return priceTo >= product[1].price;
            } else if (priceFrom && priceTo) {
                return (
                    priceFrom <= product[1].price && priceTo >= product[1].price
                );
            }
        });
    }

    return priceFilter;
};

export const searchedProducts = (
    filteredProductsList: productType,
    searchBarText: string
) => {
    const newList = filteredProductsList.filter((product) => {
        return product[1].productName
            .toLowerCase()
            .includes(searchBarText.toLowerCase());
    });

    return newList;
};

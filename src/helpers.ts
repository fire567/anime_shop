import { productType } from "./Components/data/data";
import mainStore from "./store/mainStore";

export const nameSortHandler = (
    products: productType[],
    filteredProducts: (value: productType[]) => void,
    switcher: boolean
) => {
    const newProducts = [...products];
    !switcher
        ? newProducts.sort((a: productType, b: productType) => {
              if (a.productName > b.productName) {
                  return 1;
              }
              if (a.productName < b.productName) {
                  return -1;
              }

              return 0;
          })
        : newProducts.sort((a: productType, b: productType) => {
              if (b.productName > a.productName) {
                  return 1;
              }
              if (b.productName < a.productName) {
                  return -1;
              }

              return 0;
          });

    filteredProducts(newProducts);
};

export const priceSortHandler = (
    products: productType[],
    filteredProducts: (value: productType[]) => void,
    switcher: boolean
) => {
    const newProducts = [...products];
    !switcher
        ? newProducts.sort(
              (a: productType, b: productType) => b.price - a.price
          )
        : newProducts.sort(
              (a: productType, b: productType) => a.price - b.price
          );

    filteredProducts(newProducts);
};

export const priceCountHandler = () => {
    let price = 0;
    if (mainStore.cart.cartProducts.length > 0) {
        for (let i = 0; i < mainStore.cart.cartProducts.length; i++) {
            if (mainStore.cart.cartProducts[i].count > 1) {
                price +=
                    mainStore.cart.cartProducts[i].price *
                    mainStore.cart.cartProducts[i].count;
            } else price += mainStore.cart.cartProducts[i].price;
        }
    } else return price;

    return price;
};

export const filteredproducts = (
    currentAnimeCutegory: string[],
    currentMaterialCutegory: string[],
    priceTo: number,
    priceFrom: number
) => {
    let animeFilter = [...mainStore.products.allProducts];

    if (currentAnimeCutegory.length > 0) {
        animeFilter = mainStore.products.allProducts.filter((product) => {
            for (let i = 0; i < currentAnimeCutegory.length; i++) {
                if (currentAnimeCutegory[i] === product.anime) {
                    return true;
                }
            }
            return false;
        });
    }

    let materialFilter = animeFilter;
    if (currentMaterialCutegory.length > 0) {
        materialFilter = animeFilter.filter((product) => {
            for (let i = 0; i < currentMaterialCutegory.length; i++) {
                if (currentMaterialCutegory[i] === product.material) {
                    return true;
                }
            }
            return false;
        });
    }

    let priceFilter = materialFilter;
    if (priceTo || priceFrom) {
        priceFilter = materialFilter.filter((product) => {
            if (priceFrom && !priceTo) {
                return priceFrom <= product.price;
            } else if (!priceFrom && priceTo) {
                return priceTo >= product.price;
            } else if (priceFrom && priceTo) {
                return priceFrom <= product.price && priceTo >= product.price;
            }
        });
    }

    return priceFilter;
};

export const searchedProducts = (
    filteredProductsList: productType[],
    searchBarText: string
) => {
    const currentList = filteredProductsList;

    const newList = currentList.filter((product) => {
        return product.productName
            .toLowerCase()
            .includes(searchBarText.toLowerCase());
    });

    return newList;
};

import { Content } from "antd/es/layout/layout";
import { mainPageWrapper, mainPageContent } from "./MainPage.styles";
import { ProductsListContainer } from "../ProductsListContainer/ProductsListContainer";
import { CategoryFilterContainer } from "../CategoryFilterContainer/CategoryFilterContainer";
import { useState } from "react";
import { productType } from "../data/data";
import { HeaderComponent } from "../Header/HeaderComponent";
import { AddProductButton } from "../AddProductButton/AddProductButton";
import { AddProductModalWindow } from "../AddProductModalWindow/AddProductModalWindow";
import mainStore from "../../store/mainStore";
import { observer } from "mobx-react";

export const MainPage = observer(() => {
    const [filteredProductsList, setFilteredProductsList] =
        useState<productType>(Array.from(mainStore.products.allProducts));

    const [isModalWindowOpened, setIsModalWindowOpened] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchBarText, setSearchBarText] = useState<string>("");
    const [currentAnimeCategory, setCurrentAnimeCategory] = useState<string[]>(
        []
    );
    const [currentMaterialCutegory, setCurrentMaterialCategory] = useState<
        string[]
    >([]);
    const [priceFrom, setPriceFrom] = useState<number>(0);
    const [priceTo, setPriceTo] = useState<number>(0);

    return (
        <>
            <HeaderComponent />
            <Content className={mainPageWrapper}>
                <div className={mainPageContent}>
                    <CategoryFilterContainer
                        setFilteredProductsList={setFilteredProductsList}
                        filteredProductsList={filteredProductsList}
                        setCurrentPage={setCurrentPage}
                        setSearchBarText={setSearchBarText}
                        searchBarText={searchBarText}
                        currentAnimeCategory={currentAnimeCategory}
                        setCurrentAnimeCategory={setCurrentAnimeCategory}
                        currentMaterialCutegory={currentMaterialCutegory}
                        setCurrentMaterialCategory={setCurrentMaterialCategory}
                        priceFrom={priceFrom}
                        setPriceFrom={setPriceFrom}
                        priceTo={priceTo}
                        setPriceTo={setPriceTo}
                    />

                    <ProductsListContainer
                        filteredProductsList={filteredProductsList}
                        setFilteredProductsList={setFilteredProductsList}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        setSearchBarText={setSearchBarText}
                        searchBarText={searchBarText}
                        setCurrentAnimeCategory={setCurrentAnimeCategory}
                        setCurrentMaterialCategory={setCurrentMaterialCategory}
                        setPriceFrom={setPriceFrom}
                        setPriceTo={setPriceTo}
                    />
                </div>
                {mainStore.admin.isAdmin && (
                    <AddProductButton
                        isModalWindowOpened={isModalWindowOpened}
                        setIsModalWindowOpened={setIsModalWindowOpened}
                    />
                )}
                <AddProductModalWindow
                    isModalWindowOpened={isModalWindowOpened}
                    setIsModalWindowOpened={setIsModalWindowOpened}
                    filteredProductsList={filteredProductsList}
                    setFilteredProductsList={setFilteredProductsList}
                />
            </Content>
        </>
    );
});

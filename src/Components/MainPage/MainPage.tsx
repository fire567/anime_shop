import { Content } from "antd/es/layout/layout";
import { mainPageWrapper, mainPageContent } from "./MainPage.styles";
import { ProductsListContainer } from "../ProductsListContainer/ProductsListContainer";
import { CategoryFilterContainer } from "../CategoryFilterContainer/CategoryFilterContainer";
import { FC, useState } from "react";
import { productType } from "../data/data";
import { HeaderComponent } from "../Header/HeaderComponent";
import { AddProductButton } from "../AddProductButton/AddProductButton";
import { AddProductModalWindow } from "../AddProductModalWindow/AddProductModalWindow";
import { MainPageProps } from "./MainPage.types";
import mainStore from "../../store/mainStore";
import { observer } from "mobx-react";

export const MainPage: FC<MainPageProps> = observer(({ login, password }) => {
    const [filteredProductsList, setFilteredProductsList] = useState<
        productType[]
    >(mainStore.products.allProducts);

    const [isModalWindowOpened, setIsModalWindowOpened] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchBarText, setSearchBarText] = useState<string>("");
    const [currentAnimeCutegory, setCurrentAnimeCategory] = useState<string[]>(
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
                        currentAnimeCutegory={currentAnimeCutegory}
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
                        login={login}
                        password={password}
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
                {login && password && (
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

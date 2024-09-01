import { productType } from "../data/data";

export interface AddProductModalWindowProps {
    isModalWindowOpened: boolean;
    setIsModalWindowOpened: (value: boolean) => void;
    filteredProductsList: productType[];
    setFilteredProductsList: (value: productType[]) => void;
}

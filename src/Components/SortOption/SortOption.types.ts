import { productType } from "../data/data";

export interface SortOptionProps {
    text: string;
    setFilteredProductsList: (value: productType) => void;
    filteredProductsList: productType;
    switcher: "ASC" | "DESC" | undefined;
    setSwitcher: (value: any) => void;
    filterHandler: (text: string) => void;
}

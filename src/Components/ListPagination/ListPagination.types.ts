import { productType } from "../data/data";

export interface ListPaginationProps {
    setCurrentPage: (value: number) => void;
    currentPage: number;
    filteredProductsList: productType[];
}

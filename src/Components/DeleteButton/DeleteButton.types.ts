import { productType } from "../data/data";

export interface DeleteButtonProps {
    product: productType;
    type: string;
    setFilteredProductsList?: (value: productType[]) => void;
}

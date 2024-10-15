import { productType, productEntityType } from "../data/data";

export interface DeleteButtonProps {
    product: [number, productEntityType];
    type: string;
    setFilteredProductsList?: (value: productType) => void;
}

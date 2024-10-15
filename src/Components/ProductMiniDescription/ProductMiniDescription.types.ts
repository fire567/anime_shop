import { productEntityType, productType } from "../data/data";

export interface ProductMiniDescriptionProps {
    setIsOpened: (value: boolean) => void;
    product: [number, productEntityType];
}

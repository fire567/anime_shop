import { productType } from "../data/data";

export interface ProductMiniDescriptionProps {
    setIsOpened: (value: boolean) => void;
    product: productType;
}

import { productType } from "../data/data";

export interface ModalComponentProps {
    isOpened: boolean;
    setIsOpened: (value: boolean) => void;
    product: productType;
}

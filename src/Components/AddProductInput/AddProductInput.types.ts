import { materialCategoriesTypes, animeCategoriesTypes } from "../data/data";

export interface AddProductInputProps {
    label: string;
    name: string;
    message: string;
    options: materialCategoriesTypes[] | animeCategoriesTypes[] | null | string;

    convertToBase64: (value: any) => void;
}

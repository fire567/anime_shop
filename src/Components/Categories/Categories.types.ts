export interface CategoriesProps {
    categoryTitle: string;
    categoryName: string;
    setValue?: (value: string[]) => void;
    value?: string[];
    priceFrom?: number;
    setPriceFrom?: (value: number) => void;
    priceTo?: number;
    setPriceTo?: (value: number) => void;
}

export interface categoriesList {
    id: number;
    title: string;
}

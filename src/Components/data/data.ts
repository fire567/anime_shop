export interface animeCategoriesTypes {
    id: number;
    title: string;
}

export const animeCategories: animeCategoriesTypes[] = [
    { id: 0, title: "Naruto" },
    { id: 1, title: "Berserk" },
    { id: 2, title: "One-piece" },
];

export interface materialCategoriesTypes {
    id: number;
    title: string;
}

export const materialCategories: materialCategoriesTypes[] = [
    { id: 0, title: "Plastic" },
    { id: 1, title: "PVC" },
    { id: 2, title: "ABS" },
];

export interface productType {
    id: number;
    productName: string;
    material: string;
    height: number;
    country: string;
    price: number;
    pic: string | null;
    anime: string;
}

export const productsData: productType[] = [
    {
        id: 0,
        productName: "Guts Figure",
        material: "Plastic",
        height: 15,
        country: "China",
        price: 999,
        pic: "productPics/berserk_01.jpg",
        anime: "Berserk",
    },
    {
        id: 1,
        productName: "Griffits Figure",
        material: "PVC",
        height: 20,
        country: "China",
        price: 1500,
        pic: "productPics/berserk_02.jpeg",
        anime: "Berserk",
    },
    {
        id: 2,
        productName: "Luffi Figure",
        material: "ABS",
        height: 15,
        country: "China",
        price: 2000,
        pic: "productPics/One_piece_01.jpg",
        anime: "One-piece",
    },
    {
        id: 3,
        productName: "Sasuke Figure",
        material: "Plastic",
        height: 15,
        country: "China",
        price: 2000,
        pic: "productPics/Naruto_01.jpeg",
        anime: "Naruto",
    },
    {
        id: 4,
        productName: "Gust in armour Figure",
        material: "PVC",
        height: 23,
        country: "China",
        price: 500,
        pic: "productPics/berserk_03.jpg",
        anime: "Berserk",
    },
    {
        id: 5,
        productName: "Naruto Figure",
        material: "ABS",
        height: 15,
        country: "China",
        price: 1600,
        pic: "productPics/Naruto_02.jpeg",
        anime: "Naruto",
    },

    {
        id: 6,
        productName: "Zorro Figure",
        material: "Plastic",
        height: 15,
        country: "China",
        price: 2500,
        pic: "productPics/One_Piece_02.jpg",
        anime: "One-piece",
    },
    {
        id: 7,
        productName: "Berserk Figure",
        material: "ABS",
        height: 17,
        country: "China",
        price: 3000,
        pic: "productPics/berserk_05.jpeg",
        anime: "Berserk",
    },

    {
        id: 8,
        productName: "Naruto Figure",
        material: "PVC",
        height: 24,
        country: "China",
        price: 2100,
        pic: "productPics/NAruto_03.jpeg",
        anime: "Naruto",
    },
    {
        id: 9,
        productName: "One-piece Figure",
        material: "ABS",
        height: 17,
        country: "China",
        price: 1300,
        pic: "productPics/one_piece_03.jpg",
        anime: "One-piece",
    },
    {
        id: 10,
        productName: "Berserk Figure",
        material: "Plastic",
        height: 228,
        country: "China",
        price: 1337,
        pic: "productPics/berserk_06.jpg",
        anime: "Berserk",
    },
    {
        id: 11,
        productName: "Naruto Figure",
        material: "ABS",
        height: 15,
        country: "China",
        price: 2000,
        pic: "productPics/NAruto_04.jpeg",
        anime: "Naruto",
    },
    {
        id: 12,
        productName: "One-piece Figure",
        material: "ABS",
        height: 15,
        country: "China",
        price: 3000,
        pic: "productPics/one_piece_04.jpg",
        anime: "One-piece",
    },
    {
        id: 13,
        productName: "Berserk Figure",
        material: "Plastic",
        height: 11,
        country: "China",
        price: 2456,
        pic: "productPics/bwerserk_04.jpg",
        anime: "Berserk",
    },

    {
        id: 14,
        productName: "Naruto Figure",
        material: "PVC",
        height: 27,
        country: "China",
        price: 1488,
        pic: "productPics/Naruto_05.jpeg",
        anime: "Naruto",
    },
    {
        id: 15,
        productName: "Naruto Figure",
        material: "Plastic",
        height: 12,
        country: "China",
        price: 538,
        pic: "productPics/Naruto_06.jpeg",
        anime: "Naruto",
    },

    {
        id: 16,
        productName: "One-piece Figure",
        material: "ABS",
        height: 50,
        country: "China",
        price: 4000,
        pic: "productPics/one_piece_05.jpg",
        anime: "One-piece",
    },
    {
        id: 17,
        productName: "Naruto Figure",
        material: "Plastic",
        height: 30,
        country: "China",
        price: 3500,
        pic: "productPics/Naruto_06.jpeg",
        anime: "Naruto",
    },
    {
        id: 18,
        productName: "One-piece Figure",
        material: "PVC",
        height: 15,
        country: "China",
        price: 2000,
        pic: "productPics/one_piece_06.jpg",
        anime: "One-piece",
    },
];

interface authorizationInputsProps {
    id: number;
    label: string;
    name: string;
    message: string;
}

export const authorizationInputs: authorizationInputsProps[] = [
    {
        id: 0,
        label: "Login",
        name: "login",
        message: "Пожалуйста, введите логин",
    },
    {
        id: 1,
        label: "Password",
        name: "password",
        message: "Пожалуйста, введите пароль",
    },
];

export const addProductsInputs = [
    {
        id: 0,
        label: "Название продукта",
        name: "productName",
        message: "Пожалуйста, заполните поле",
        type: null,
    },
    {
        id: 1,
        label: "Материал",
        name: "material",
        message: "Пожалуйста, заполните поле",
        type: materialCategories,
    },
    {
        id: 2,
        label: "Высота",
        name: "height",
        message: "Пожалуйста, заполните поле",
        type: "number",
    },
    {
        id: 3,
        label: "Страна",
        name: "country",
        message: "Пожалуйста, заполните поле",
        type: null,
    },
    {
        id: 4,
        label: "Цена",
        name: "price",
        message: "Пожалуйста, заполните поле",
        type: "number",
    },
    {
        id: 5,
        label: "Аниме",
        name: "anime",
        message: "Пожалуйста, заполните поле",
        type: animeCategories,
    },
    {
        id: 6,
        label: "Картинка",
        name: "picture",
        message: "Пожалуйста, добавьте картинку",
        type: "pic",
    },
];

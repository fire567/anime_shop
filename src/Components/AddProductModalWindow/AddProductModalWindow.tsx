import { Form, Modal } from "antd";
import { AddProductModalWindowProps } from "./AddProductModalWindow.types";
import { FC, useEffect, useState } from "react";
import { addProductsInputs } from "../data/data";
import { AddProductInput } from "../AddProductInput/AddProductInput";
import mainStore from "../../store/mainStore";

export const AddProductModalWindow: FC<AddProductModalWindowProps> = ({
    isModalWindowOpened,
    setIsModalWindowOpened,
    setFilteredProductsList,
}) => {
    const [isModalButtonDisabled, setIsModalButtonDisabled] = useState(true);
    const [productName, setProductName] = useState("");
    const [material, setMaterial] = useState("");
    const [height, setHeight] = useState("");
    const [country, setCountry] = useState("");
    const [price, setPrice] = useState("");
    const [anime, setAnime] = useState("");
    const [pic, setPic] = useState("");

    const inputsStates = [
        { state: productName, setState: setProductName },
        { state: material, setState: setMaterial },
        { state: height, setState: setHeight },
        { state: country, setState: setCountry },
        { state: price, setState: setPrice },
        { state: anime, setState: setAnime },
        { state: pic, setState: setPic },
    ];

    useEffect(() => {
        if (
            productName.length > 2 &&
            material.length > 2 &&
            height.length > 2 &&
            country.length > 2 &&
            price.length > 2 &&
            anime.length > 2 &&
            pic.length > 0
        ) {
            setIsModalButtonDisabled(false);
        } else setIsModalButtonDisabled(true);
    }, [productName, material, height, country, price, anime, pic]);

    const createNewProductHandler = () => {
        const newProduct = {
            id: mainStore.products.allProducts.length,
            productName: productName,
            material: material,
            height: Number(height),
            country: country,
            price: Number(price),
            pic: pic,
            anime: anime,
        };
        mainStore.products.addProduct(newProduct);
        setFilteredProductsList([...mainStore.products.allProducts]);

        setIsModalWindowOpened(!isModalWindowOpened);
    };

    const convertToBase64 = (event: any) => {
        const reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]);

        reader.onload = () => {
            // @ts-ignore: Unreachable code error
            setPic(reader.result);
        };
    };

    return (
        <Modal
            title="Создание товара"
            open={isModalWindowOpened}
            onOk={() => createNewProductHandler()}
            onCancel={() => setIsModalWindowOpened(!isModalWindowOpened)}
            okButtonProps={{ disabled: isModalButtonDisabled }}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                {addProductsInputs.map((input) => (
                    <AddProductInput
                        label={input.label}
                        name={input.name}
                        message={input.message}
                        options={input.type}
                        state={inputsStates[input.id].state}
                        setState={inputsStates[input.id].setState}
                        convertToBase64={convertToBase64}
                    />
                ))}
            </Form>
        </Modal>
    );
};

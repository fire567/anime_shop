import { Form, Modal } from "antd";
import { AddProductModalWindowProps } from "./AddProductModalWindow.types";
import { FC, useCallback, useEffect, useState } from "react";
import { addProductsInputs } from "../data/data";
import { AddProductInput } from "../AddProductInput/AddProductInput";
import mainStore from "../../store/mainStore";

export const AddProductModalWindow: FC<AddProductModalWindowProps> = ({
    isModalWindowOpened,
    setIsModalWindowOpened,
    setFilteredProductsList,
}) => {
    const [form] = Form.useForm();

    const [pic, setPic] = useState("");

    const createNewProductHandler = (newProduct: any) => {
        newProduct.pic = pic;

        mainStore.products.addProduct(newProduct);
        setFilteredProductsList(Array.from(mainStore.products.allProducts));

        setIsModalWindowOpened(!isModalWindowOpened);
    };

    const convertToBase64 = useCallback((event: any) => {
        const reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]);

        reader.onload = () => {
            // @ts-ignore: Unreachable code error
            setPic(reader.result);
        };
    }, []);

    const onOk = () => {
        form.submit();
    };

    return (
        <Modal
            title="Создание товара"
            open={isModalWindowOpened}
            onOk={() => onOk()}
            onCancel={() => setIsModalWindowOpened(!isModalWindowOpened)}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                autoComplete="off"
                form={form}
                onFinish={(inputs) => createNewProductHandler(inputs)}
            >
                {addProductsInputs.map((input) => (
                    <AddProductInput
                        label={input.label}
                        name={input.name}
                        message={input.message}
                        options={input.type}
                        convertToBase64={convertToBase64}
                        key={input.id}
                    />
                ))}
            </Form>
        </Modal>
    );
};

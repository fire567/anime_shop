import { Modal } from "antd";
import { FC } from "react";
import { ProductPic } from "../ProductPic/ProductPic";
import {
    modalWrapper,
    modalContentWrapper,
    description,
} from "./ModalComponent.style";
import { ModalComponentProps } from "./ModalComponent.types";

export const ModalComponent: FC<ModalComponentProps> = ({
    isOpened,
    setIsOpened,
    product,
}) => {
    return (
        <Modal
            centered
            open={isOpened}
            onOk={() => setIsOpened(false)}
            onCancel={() => setIsOpened(false)}
            className={modalWrapper}
            bodyStyle={{ height: 600 }}
            width={1100}
        >
            <div className={modalContentWrapper}>
                <ProductPic picType={"modalPic"} pic={product[1].pic} />
                <div className={description}>
                    <span>Название: {product[1].productName}</span>
                    <span>Аниме: {product[1].anime}</span>
                    <span>Материал: {product[1].material}</span>
                    <span>Страна производства: {product[1].country}</span>
                    <span>Высота: {product[1].height} см</span>
                    <span>Цена: {product[1].price} ₽</span>
                </div>
            </div>
        </Modal>
    );
};

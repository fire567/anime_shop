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
                <ProductPic picType={"modalPic"} pic={product.pic} />
                <div className={description}>
                    <span>Название: {product.productName}</span>
                    <span>Аниме: {product.anime}</span>
                    <span>Материал: {product.material}</span>
                    <span>Страна производства: {product.country}</span>
                    <span>Высота: {product.height} см</span>
                    <span>Цена: {product.price} ₽</span>
                </div>
            </div>
        </Modal>
    );
};

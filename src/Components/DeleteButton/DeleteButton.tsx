import { Button } from "antd";
import {
    deleteCartButtonStyle,
    deleteAdminButtonStyle,
} from "./DeleteButton.style";
import deleteCart from "../../assets/deleteCart.svg";
import { DeleteButtonProps } from "../DeleteButton/DeleteButton.types";
import { FC } from "react";
import mainStore from "../../store/mainStore";
import { observer } from "mobx-react";

export const DeleteButton: FC<DeleteButtonProps> = observer(
    ({ product, type, setFilteredProductsList }) => {
        const deleteButtonHandler = () => {
            if (type === "cart") {
                mainStore.cart.deleteCartProduct(product);
            } else if (type === "admin") {
                mainStore.products.deleteProduct(product);
                setFilteredProductsList!([...mainStore.products.allProducts]);
            }
        };

        return (
            <Button
                className={
                    type === "cart"
                        ? deleteCartButtonStyle
                        : deleteAdminButtonStyle
                }
                onClick={() => deleteButtonHandler()}
            >
                <img src={deleteCart} />
            </Button>
        );
    }
);

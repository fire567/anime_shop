import { Button } from "antd";
import { cartButton } from "./AddToCartButton.style";
import { AddToCartButtonProps } from "./AddToCartButton.types";
import "./AddToCartButton.css";
import { FC } from "react";
import { observer } from "mobx-react";
import mainStore from "../../store/mainStore";

export const AddToCartButton: FC<AddToCartButtonProps> = observer(
    ({ product }) => {
        const addtoCartHandler = () => {
            mainStore.cart.addCartProduct(product);
        };

        return (
            <Button
                type="primary"
                className={cartButton}
                onClick={() => {
                    addtoCartHandler();
                }}
            >
                В корзину
            </Button>
        );
    }
);

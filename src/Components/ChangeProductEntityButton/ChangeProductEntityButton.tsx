import { FC } from "react";
import {
    changeProductEntityWrapper,
    changeEntity,
} from "./ChangeProductEntityButton.style";
import { ChangeProductEntityButtonProps } from "./ChangeProductEntityButton.types";
import mainStore from "../../store/mainStore";
import { observer } from "mobx-react";

export const ChangeProductEntityButton: FC<ChangeProductEntityButtonProps> =
    observer(({ product }) => {
        const increaseEntityHandler = () => {
            mainStore.cart.increaseProductEntity(product);
        };

        const drawCount = () => {
            for (let i = 0; i < mainStore.cart.cartProducts.length; i++) {
                if (mainStore.cart.cartProducts[i].id === product.id) {
                    return mainStore.cart.cartProducts[i].count;
                }
            }
        };

        const decreaseEntityHandler = () => {
            for (let i = 0; i < mainStore.cart.cartProducts.length; i++) {
                if (
                    mainStore.cart.cartProducts[i].id === product.id &&
                    mainStore.cart.cartProducts[i].count > 0
                ) {
                    mainStore.cart.decreaseProductEntity(product);
                }
            }
        };

        return (
            <div style={changeProductEntityWrapper}>
                <button
                    style={changeEntity}
                    onClick={() => decreaseEntityHandler()}
                >
                    -
                </button>
                <span>{drawCount()}</span>
                <button
                    style={changeEntity}
                    onClick={() => increaseEntityHandler()}
                >
                    +
                </button>
            </div>
        );
    });

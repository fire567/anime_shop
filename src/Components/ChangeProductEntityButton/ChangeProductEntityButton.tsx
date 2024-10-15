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
            for (
                let i = 0;
                i < Array.from(mainStore.cart.cartProducts).length;
                i++
            ) {
                console.log(mainStore.cart.cartProducts);
                if (
                    Array.from(mainStore.cart.cartProducts)[i][0] === product[0]
                ) {
                    return Array.from(mainStore.cart.cartProducts)[i][1].count;
                }
            }
        };

        const decreaseEntityHandler = () => {
            for (
                let i = 0;
                i < Array.from(mainStore.cart.cartProducts).length;
                i++
            ) {
                if (
                    Array.from(mainStore.cart.cartProducts)[i][0] ===
                        product[0] &&
                    Array.from(mainStore.cart.cartProducts)[i][1].count! > 0
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

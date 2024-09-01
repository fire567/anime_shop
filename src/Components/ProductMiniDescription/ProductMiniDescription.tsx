import { FC, useEffect } from "react";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import {
    productMiniDescriptionWrapper,
    figureName,
    description,
} from "./ProductMiniDescription.style";
import { ProductMiniDescriptionProps } from "./ProductMiniDescription.types";
import { ChangeProductEntityButton } from "../ChangeProductEntityButton/ChangeProductEntityButton";
import mainStore from "../../store/mainStore";
import { observer } from "mobx-react";

export const ProductMiniDescription: FC<ProductMiniDescriptionProps> = observer(
    ({ setIsOpened, product }) => {
        const drawButtonHandler = () => {
            if (mainStore.cart.cartProducts.length > 0) {
                for (let i = 0; i < mainStore.cart.cartProducts.length; i++) {
                    if (
                        mainStore.cart.cartProducts[i].id === product.id &&
                        mainStore.cart.cartProducts[i].count > 0
                    ) {
                        return <ChangeProductEntityButton product={product} />;
                    }
                }
            }

            return <AddToCartButton product={product} />;
        };

        return (
            <div className={productMiniDescriptionWrapper}>
                <div className={figureName} onClick={() => setIsOpened(true)}>
                    {product.productName}
                </div>
                <div className={description}>
                    <div>
                        <div>Цена:</div>
                        <div>{product.price} ₽</div>
                    </div>
                    {mainStore.cart && drawButtonHandler()}
                </div>
            </div>
        );
    }
);

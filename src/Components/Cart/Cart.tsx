import { ProductPic } from "../ProductPic/ProductPic";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { ChangeProductEntityButton } from "../ChangeProductEntityButton/ChangeProductEntityButton";
import {
    cartDescription,
    cartWrapper,
    rightSide,
    leftSide,
} from "./Cart.style";
import { FC } from "react";
import { CartProps } from "./Cart.types";
import { EmptyCart } from "../EmptyCart/EmptyCart";

export const Cart: FC<CartProps> = ({ product }) => {
    return (
        <div style={cartWrapper}>
            {product ? (
                <>
                    <div style={leftSide}>
                        <ProductPic picType={"cartPic"} pic={product.pic} />
                        <div style={cartDescription}>
                            <span>Название: {product?.productName}</span>
                            <span>Аниме: {product?.anime}</span>
                            <span>Материал: {product?.material}</span>
                            <span>Страна производства: {product?.country}</span>
                            <span>Высота: {product?.height} см</span>
                            <span>Цена: {product?.price} ₽</span>
                        </div>
                    </div>
                    <div style={rightSide}>
                        {product && (
                            <DeleteButton product={product} type={"cart"} />
                        )}
                        {product && (
                            <ChangeProductEntityButton product={product} />
                        )}
                    </div>
                </>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
};

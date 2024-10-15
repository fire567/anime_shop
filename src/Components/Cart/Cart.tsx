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
                        <ProductPic picType={"cartPic"} pic={product[1].pic} />
                        <div style={cartDescription}>
                            <span>Название: {product[1]?.productName}</span>
                            <span>Аниме: {product[1]?.anime}</span>
                            <span>Материал: {product[1]?.material}</span>
                            <span>
                                Страна производства: {product[1]?.country}
                            </span>
                            <span>Высота: {product[1]?.height} см</span>
                            <span>Цена: {product[1]?.price} ₽</span>
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

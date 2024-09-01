import { FC } from "react";
import { productPic, modalPic, cartPic } from "./ProductPic.style";
import { ProductPicProps } from "./ProductPic.types";

export const ProductPic: FC<ProductPicProps> = ({
    setIsOpened,
    picType,
    pic,
}) => {
    const wrapperStyle = () => {
        if (picType === "productPic") {
            return productPic;
        } else if (picType === "modalPic") {
            return modalPic;
        } else if (picType === "cartPic") {
            return cartPic;
        }
    };

    return (
        <img
            className={wrapperStyle()}
            onClick={() => setIsOpened && setIsOpened(true)}
            src={pic!}
            alt={pic!}
        />
    );
};

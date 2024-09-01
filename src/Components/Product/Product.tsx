import { productWrapper } from "./Product.style";
import { ProductPic } from "../ProductPic/ProductPic";
import { ProductMiniDescription } from "../ProductMiniDescription/ProductMiniDescription";
import { useState } from "react";
import { ModalComponent } from "../ModalComponent/ModalComponent";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { ProductProps } from "./Product.types";
import { FC } from "react";

export const Product: FC<ProductProps> = ({
    product,
    login,
    password,
    setFilteredProductsList,
}) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className={productWrapper}>
            {login && password && (
                <DeleteButton
                    product={product}
                    type={"admin"}
                    setFilteredProductsList={setFilteredProductsList}
                />
            )}
            <ProductPic
                setIsOpened={setIsOpened}
                picType={"productPic"}
                pic={product.pic}
            />
            <ProductMiniDescription
                setIsOpened={setIsOpened}
                product={product}
            />
            <ModalComponent
                isOpened={isOpened}
                setIsOpened={setIsOpened}
                product={product}
            />
        </div>
    );
};

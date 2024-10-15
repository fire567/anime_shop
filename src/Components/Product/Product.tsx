import { productWrapper } from "./Product.style";
import { ProductPic } from "../ProductPic/ProductPic";
import { ProductMiniDescription } from "../ProductMiniDescription/ProductMiniDescription";
import { useState } from "react";
import { ModalComponent } from "../ModalComponent/ModalComponent";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { ProductProps } from "./Product.types";
import { FC } from "react";
import mainStore from "../../store/mainStore";

export const Product: FC<ProductProps> = ({
    product,
    setFilteredProductsList,
}) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className={productWrapper}>
            {mainStore.admin.isAdmin && (
                <DeleteButton
                    product={product}
                    type={"admin"}
                    setFilteredProductsList={setFilteredProductsList}
                />
            )}
            <ProductPic
                setIsOpened={setIsOpened}
                picType={"productPic"}
                pic={product[1].pic}
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

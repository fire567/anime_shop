import { Cart } from "../Cart/Cart";
import { CartWrapperComponent } from "../CartWrapperComponent/CartWrapperComponent";
import { cartcontentWrapper, priceCountWrapper } from "./CartContainer.style";
import { Address } from "../Address/Address";
import { OrderButton } from "../OrderButton/OrderButton";
import { GrasttitudeModalWindow } from "../GrasttitudeModalWindow/GrasttitudeModalWindow";
import mainStore from "../../store/mainStore";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { priceCountHandler } from "../../helpers";

export const CartContainer = observer(() => {
    const [isOpened, setIsOpened] = useState(false);
    const [address, setAddress] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (mainStore.cart.cartProducts.size > 0 && address) {
            setIsButtonDisabled(false);
        } else setIsButtonDisabled(true);
    }, [address, mainStore.cart]);

    return (
        <div className={cartcontentWrapper}>
            <CartWrapperComponent ChildComponent={Cart} title={"Корзина:"} />
            <CartWrapperComponent
                ChildComponent={Address}
                title={"Адрес:"}
                address={address}
                setAddress={setAddress}
            />
            <div className={priceCountWrapper}>
                Общая стоимость: {priceCountHandler()} ₽
            </div>
            <OrderButton
                setIsOpened={setIsOpened}
                isButtonDisabled={isButtonDisabled}
                setAddress={setAddress}
            />
            <GrasttitudeModalWindow
                isOpened={isOpened}
                setIsOpened={setIsOpened}
            />
        </div>
    );
});

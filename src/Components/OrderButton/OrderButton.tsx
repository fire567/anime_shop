import { Button } from "antd";
import { buyButtonWrapper, orderButton } from "./OrderButton.style";
import { FC } from "react";
import mainStore from "../../store/mainStore";
import { OrderButtonProps } from "./OrderButton.types";

export const OrderButton: FC<OrderButtonProps> = ({
    setIsOpened,
    isButtonDisabled,
    setAddress,
}) => {
    const buyButtonHandler = () => {
        setIsOpened(true);
        mainStore.cart.deleteAllProducts();
        setAddress("");
    };

    return (
        <div style={buyButtonWrapper}>
            <Button
                style={orderButton}
                onClick={() => buyButtonHandler()}
                disabled={isButtonDisabled}
            >
                Купить
            </Button>
        </div>
    );
};

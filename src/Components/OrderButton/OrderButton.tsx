import { Button } from "antd";
import { buyButtonWrapper, orderButton } from "./OrderButton.style";
import { FC } from "react";
import mainStore from "../../store/mainStore";

interface OrderButtonProps {
    setIsOpened: (value: boolean) => void;
    isButtonDisabled: boolean;
}

export const OrderButton: FC<OrderButtonProps> = ({
    setIsOpened,
    isButtonDisabled,
}) => {
    const buyButtonHandler = () => {
        setIsOpened(true);
        mainStore.cart.deleteAllProducts();
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

import { FC } from "react";
import mainStore from "../../store/mainStore";
import { blockWrapper, titleSection } from "./CartWrapperComponent.style";
import { observer } from "mobx-react";
import { EmptyCart } from "../EmptyCart/EmptyCart";

interface CartWrapperProps {
    ChildComponent: any;
    title: string;
    address?: string;
    setAddress?: (value: string) => void;
}

export const CartWrapperComponent: FC<CartWrapperProps> = observer(
    ({ ChildComponent, title, address, setAddress }) => {
        const drawChildComponent = () => {
            if (title === "Корзина:") {
                return mainStore.cart.cartProducts.length > 0 ? (
                    mainStore.cart.cartProducts.map((product) => (
                        <ChildComponent product={product} />
                    ))
                ) : (
                    <EmptyCart />
                );
            } else if (title === "Адрес:") {
                return (
                    <ChildComponent address={address} setAddress={setAddress} />
                );
            }
        };

        return (
            <div style={blockWrapper}>
                <div style={titleSection}>{title}</div>
                {drawChildComponent()}
            </div>
        );
    }
);

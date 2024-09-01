import { Content } from "antd/es/layout/layout";
import { CartContainer } from "../CartContainer/CartContainer";
import { cartPageWrapper } from "./CartPage.style";
import { HeaderComponent } from "../Header/HeaderComponent";

export const CartPage = () => {
    return (
        <>
            <HeaderComponent />
            <Content style={cartPageWrapper}>
                <CartContainer />
            </Content>
        </>
    );
};

import { Header } from "antd/es/layout/layout";
import { Logo } from "../Logo/Logo";
import { CartButton } from "../CartButton/Cartbutton";
import { headerWrapper, headerContent } from "./HeaderComponent.styles";

export const HeaderComponent = () => {
    return (
        <Header className={headerWrapper}>
            <div className={headerContent}>
                <Logo />
                <CartButton />
            </div>
        </Header>
    );
};

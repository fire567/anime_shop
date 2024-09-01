import { Header } from "antd/es/layout/layout";
import { Logo } from "../Logo/Logo";
import { CartButton } from "../CartButton/Cartbutton";
import { header_wrapper, header_content } from "./HeaderComponent.styles";

export const HeaderComponent = () => {
    return (
        <Header className={header_wrapper}>
            <div className={header_content}>
                <Logo />
                <CartButton />
            </div>
        </Header>
    );
};

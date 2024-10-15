import { button_wrapper } from "./CartButton.styles";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";
import { priceCountHandler } from "../../helpers";
import { observer } from "mobx-react";

export const CartButton = observer(() => {
    return (
        <Link to={`cart`} className={button_wrapper}>
            <img src={cart} alt="cart" width={25} height={25} />
            <span>{priceCountHandler()} ₽</span>
        </Link>
    );
});

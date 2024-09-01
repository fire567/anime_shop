import { style } from "./Logo.styles";
import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to={"/"} className={style}>
            AnimeShop
        </Link>
    );
};

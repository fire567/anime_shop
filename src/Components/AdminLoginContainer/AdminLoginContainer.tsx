import { FC, useEffect, useState } from "react";
import { AdminLogin } from "../AdminLogin/AdminLogin";
import { adminLoginContainerWrapper } from "./AdminLoginContainer.styles";
import { AdminLoginContainerProps } from "./AdminLoginContainer.types";

export const AdminLoginContainer: FC<AdminLoginContainerProps> = ({
    login,
    setLogin,
    password,
    setPassword,
}) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (login.length > 3 && password.length > 3) {
            setIsButtonDisabled(false);
        } else setIsButtonDisabled(true);
    }, [login, password]);

    return (
        <div className={adminLoginContainerWrapper}>
            <AdminLogin
                login={login}
                setLogin={setLogin}
                password={password}
                setPassword={setPassword}
                isButtonDisabled={isButtonDisabled}
            />
        </div>
    );
};

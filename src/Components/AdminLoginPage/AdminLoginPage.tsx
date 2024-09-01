import { FC } from "react";
import { AdminLoginContainer } from "../AdminLoginContainer/AdminLoginContainer";
import { AdminLoginPageProps } from "./AdminLoginPage.types";

export const AdminLoginPage: FC<AdminLoginPageProps> = ({
    login,
    setLogin,
    password,
    setPassword,
}) => {
    return (
        <AdminLoginContainer
            login={login}
            setLogin={setLogin}
            password={password}
            setPassword={setPassword}
        />
    );
};

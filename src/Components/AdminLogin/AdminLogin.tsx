import { Button, Form } from "antd";
import { authorizationInputs } from "../data/data";
import { AuthorizationInput } from "../AuthorizationInput/AuthorizationInput";
import { AdminLoginProps } from "./AdminLogin.types";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import {
    adminLoginWrapper,
    adminHeaderWrapper,
    formWrapper,
    buttonWrapper,
} from "./AdminLogin.styles";

export const AdminLogin: FC<AdminLoginProps> = ({
    login,
    setLogin,
    password,
    setPassword,
    isButtonDisabled,
}) => {
    const navigate = useNavigate();

    return (
        <div className={adminLoginWrapper}>
            <div className={adminHeaderWrapper}>Авторизация</div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <div className={formWrapper}>
                    {authorizationInputs.map((input) => (
                        <AuthorizationInput
                            key={input.id}
                            label={input.label}
                            name={input.name}
                            message={input.message}
                            text={input.label === "Login" ? login : password}
                            setText={
                                input.label === "Login" ? setLogin : setPassword
                            }
                        />
                    ))}
                </div>
                <div className={buttonWrapper}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={isButtonDisabled}
                        onClick={() => navigate("/")}
                    >
                        Вход
                    </Button>
                </div>
            </Form>
        </div>
    );
};

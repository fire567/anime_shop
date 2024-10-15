import { Button, Form } from "antd";
import { authorizationInputs } from "../data/data";
import { AuthorizationInput } from "../AuthorizationInput/AuthorizationInput";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import {
    adminLoginWrapper,
    adminHeaderWrapper,
    formWrapper,
    buttonWrapper,
} from "./AdminLogin.styles";
import mainStore from "../../store/mainStore";

export const AdminLogin: FC = () => {
    const navigate = useNavigate();

    const loginHandler = () => {
        mainStore.admin.changeIsAdmin();
        navigate("/");
    };

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
                onFinish={() => loginHandler()}
            >
                <div className={formWrapper}>
                    {authorizationInputs.map((input) => (
                        <AuthorizationInput
                            key={input.id}
                            label={input.label}
                            name={input.name}
                            message={input.message}
                        />
                    ))}
                </div>
                <div className={buttonWrapper}>
                    <Button type="primary" htmlType="submit">
                        Вход
                    </Button>
                </div>
            </Form>
        </div>
    );
};

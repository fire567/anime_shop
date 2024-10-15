import { Form, Input } from "antd";
import { AuthorizationInputProps } from "./AuthorizationInput.types";
import { FC } from "react";

export const AuthorizationInput: FC<AuthorizationInputProps> = ({
    label,
    name,
    message,
}) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[
                {
                    required: true,
                    min: 3,
                    message: message,
                },
            ]}
        >
            <Input />
        </Form.Item>
    );
};

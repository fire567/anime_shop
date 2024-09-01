import { Form, Input } from "antd";
import { AuthorizationInputProps } from "./AuthorizationInput.types";
import { FC } from "react";

export const AuthorizationInput: FC<AuthorizationInputProps> = ({
    label,
    name,
    message,
    text,
    setText,
}) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[
                {
                    required: true,
                    message: message,
                },
            ]}
        >
            <Input value={text} onChange={(e) => setText(e.target.value)} />
        </Form.Item>
    );
};

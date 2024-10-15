import { Form, Input, InputNumber, Select } from "antd";
import { AddProductInputProps } from "./AddProductInput.types";
import { FC } from "react";

export const AddProductInput: FC<AddProductInputProps> = ({
    label,
    name,
    message,
    options,
    convertToBase64,
}) => {
    const showInput = () => {
        if (options === "number") {
            return <Input type="number" />;
        } else if (Array.isArray(options)) {
            return (
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    {options.map((option) => (
                        <Select.Option value={option.title} key={option.id}>
                            {option.title}
                        </Select.Option>
                    ))}
                </Select>
            );
        } else if (options === "pic") {
            return <input type="file" onChange={(e) => convertToBase64(e)} />;
        }

        return <Input />;
    };

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
            {showInput()}
        </Form.Item>
    );
};

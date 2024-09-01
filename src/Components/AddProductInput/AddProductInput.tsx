import { Form, Input, InputNumber, Select } from "antd";
import { AddProductInputProps } from "./AddProductInput.types";
import { FC } from "react";

export const AddProductInput: FC<AddProductInputProps> = ({
    label,
    name,
    message,
    state,
    options,
    setState,
    convertToBase64,
}) => {
    const showInput = () => {
        if (options === "number") {
            return (
                <InputNumber
                    type="number"
                    onChange={(e) => {
                        setState(Number(e!) > 0 ? e!.toString() : "0");
                    }}
                    min={1}
                    defaultValue={0}
                />
            );
        } else if (Array.isArray(options)) {
            return (
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={(e) => {
                        setState(e);
                    }}
                    allowClear
                >
                    {options.map((option) => (
                        <Select.Option value={option.title}>
                            {option.title}
                        </Select.Option>
                    ))}
                </Select>
            );
        } else if (options === "pic") {
            return <input type="file" onChange={(e) => convertToBase64(e)} />;
        }

        return (
            <Input value={state} onChange={(e) => setState(e.target.value)} />
        );
    };

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
            {showInput()}
        </Form.Item>
    );
};

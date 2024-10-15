import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";
import { categoryWrapper } from "./Category.styles";
import "./Category.css";
import { FC } from "react";
import { CategoryProps } from "./Category.types";

export const Category: FC<CategoryProps> = ({
    title,
    setValue,
    value,
    filterTitle,
}) => {
    const setCategory = (title: string, e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            setValue([...value, title]);
        } else {
            const deletedValue = value.filter((el) => el !== title);
            setValue(deletedValue);
        }
    };

    const isChecked = () => {
        for (let i = 0; i < value.length; i++) {
            if (value[i] === filterTitle) {
                return true;
            }
        }
    };

    return (
        <li style={categoryWrapper}>
            <Checkbox
                onChange={(e) => setCategory(title, e)}
                checked={isChecked()}
            >
                {title}
            </Checkbox>
        </li>
    );
};

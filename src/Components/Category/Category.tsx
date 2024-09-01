import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";
import { categoryWrapper } from "./Category.styles";
import "./Category.css";
import { FC, useState } from "react";

interface CategoryProps {
    title: string;
    setValue: (value: string[]) => void;
    value: string[];
    filterTitle: string;
}

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
                console.log(value[i] + "" + filterTitle);
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

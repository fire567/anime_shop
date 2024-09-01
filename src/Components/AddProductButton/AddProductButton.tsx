import { Button } from "antd";
import { addProductButtonWrapper } from "./AddProductButton.styles";
import { AddProductButtonProps } from "./AddProductButton.types";
import { FC } from "react";

export const AddProductButton: FC<AddProductButtonProps> = ({
    isModalWindowOpened,
    setIsModalWindowOpened,
}) => {
    return (
        <div className={addProductButtonWrapper}>
            <Button
                onClick={() => setIsModalWindowOpened(!isModalWindowOpened)}
            >
                Добавить товар
            </Button>
        </div>
    );
};

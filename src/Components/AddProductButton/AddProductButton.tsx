import { Button } from "antd";
import { addProductButtonWrapper } from "./AddProductButton.styles";
import { AddProductButtonProps } from "./AddProductButton.types";
import { FC } from "react";

export const AddProductButton: FC<AddProductButtonProps> = ({
    setIsModalWindowOpened,
}) => {
    return (
        <div className={addProductButtonWrapper}>
            <Button onClick={() => setIsModalWindowOpened(true)}>
                Добавить товар
            </Button>
        </div>
    );
};

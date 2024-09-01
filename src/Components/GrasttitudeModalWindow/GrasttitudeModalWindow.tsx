import { Modal } from "antd";
import { FC } from "react";
import { modalWrapper } from "../ModalComponent/ModalComponent.style";

interface GrasttitudeModalProps {
    isOpened: boolean;
    setIsOpened: (value: boolean) => void;
}

export const GrasttitudeModalWindow: FC<GrasttitudeModalProps> = ({
    isOpened,
    setIsOpened,
}) => {
    return (
        <Modal
            centered
            open={isOpened}
            onOk={() => setIsOpened(false)}
            onCancel={() => setIsOpened(false)}
            className={modalWrapper}
        >
            Спасибо за покупку!
        </Modal>
    );
};

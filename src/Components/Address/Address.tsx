import { Input } from "antd";
import { addressBarWrapper, orderWrapper } from "./Address.style";
import { FC } from "react";

interface AddressProps {
    address: string;
    setAddress: (value: string) => void;
}

export const Address: FC<AddressProps> = ({ address, setAddress }) => {
    return (
        <div style={orderWrapper}>
            <Input
                placeholder="Поиск"
                style={addressBarWrapper}
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            />
        </div>
    );
};

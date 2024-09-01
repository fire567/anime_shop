import Input from "antd/es/input/Input";
import { searchbarWrapper } from "./SearchBar.style";
import { FC } from "react";
import { SearchBarProps } from "./SearchBar.types";

export const SearchBar: FC<SearchBarProps> = ({
    setSearchBarText,
    searchBarText,
}) => {
    return (
        <Input
            placeholder="Поиск"
            className={searchbarWrapper}
            value={searchBarText}
            onChange={(e) => setSearchBarText(e.target.value)}
        />
    );
};

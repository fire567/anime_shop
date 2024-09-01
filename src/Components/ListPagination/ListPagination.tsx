import { Pagination } from "antd";
import { paginationWrapper } from "./ListPagination.style";
import { ListPaginationProps } from "./ListPagination.types";
import "./ListPagination.css";
import { FC } from "react";

export const ListPagination: FC<ListPaginationProps> = ({
    setCurrentPage,
    currentPage,
    filteredProductsList,
}) => {
    return (
        <Pagination
            style={paginationWrapper}
            total={filteredProductsList.length}
            current={currentPage}
            pageSize={12}
            onChange={(page) => {
                setCurrentPage(page);
            }}
        />
    );
};

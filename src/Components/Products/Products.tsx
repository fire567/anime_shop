import { Product } from "../Product/Product";
import { productsWrapper } from "./Products.styles";
import { Col, Row } from "antd";
import { ProductsProps } from "./Products.types";
import { FC } from "react";

export const Products: FC<ProductsProps> = ({
    currentListItems,
    setFilteredProductsList,
    filteredProductsList,
}) => {
    return (
        <div className={productsWrapper}>
            <Row gutter={16}>
                {currentListItems &&
                    Array.from(currentListItems).map((product) => (
                        <Col key={product[0]} span={6}>
                            <Product
                                product={product}
                                filteredProductsList={filteredProductsList}
                                setFilteredProductsList={
                                    setFilteredProductsList
                                }
                            />
                        </Col>
                    ))}
            </Row>
        </div>
    );
};

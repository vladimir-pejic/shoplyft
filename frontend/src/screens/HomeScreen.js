import React from 'react';
import products from "../products";
import {Row, Col} from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col cm={12} md={6} lg={4} xlg={3}>
                        <Product product={product}></Product>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
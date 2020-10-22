import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Row, Col} from "react-bootstrap";
import Product from "../components/Product";
import axios from 'axios';
import {listProducts} from "../actions/productActions.js";
import {load} from "dotenv";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <h1>Latest Products</h1>
            { loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3>{ error }</h3>)
            : (
                <Row>
                    {products.map(product => (
                        <Col key={product._id} cm={12} md={6} lg={4} xlg={3}>
                            <Product product={product}></Product>
                        </Col>
                    ))}
                </Row>
            ) }

        </>
    );
};

export default HomeScreen;
import React, { useEffect } from 'react';
import useProductsList from "../hooks/products.hook";
import Loader from "../components/shop/loader.component";

const ProductsList = ({categoryId}) => {

    const url = categoryId ? `/api/products?category=${categoryId}` : `/api/products`

    const {loading, onLoadHandler, products} = useProductsList(url)
    useEffect(() => {
        onLoadHandler().then(r => r);
    }, []);


    return (
        <div className="row store-items" id="store-items">
            {products.map(p => {
                return (
                    <div
                        className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets"
                        data-item="sweets" key={p.id}>
                        <div className="card h-100 single-item" key={p.id}>
                            <div className="img-container">
                                <img src="http://localhost:8080/build/images/sweets-1.jpeg" className="card-img-top store-img" alt=""/>
                                <span className="store-item-icon">
                                <i className="fas fa-shopping-cart"></i>
                            </span>
                            </div>
                            <div className="card-body">
                                <div className="card-text d-flex justify-content-between text-capitalize">
                                    <h5 id="store-item-name"> {p.name}</h5>
                                    <h5 className="store-item-value">
                                        $ <strong id="store-item-price" className="font-weight-bold">5</strong>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            {(loading && products.length < 1) && (
                <Loader/>
            )}
        </div>
    );
};

export default ProductsList;
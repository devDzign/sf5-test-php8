import React, { useEffect, useState } from 'react';
import useProductsList from "../../hooks/products.hook";
import Loader from "../../components/shop/loader.component";

const ProductsList = ({categoryId}) => {

    const url = categoryId ? `/api/products?category=${categoryId}`: `/api/products`

    const {loading, onLoadHandler, products} = useProductsList(url)
    useEffect(() => {
        onLoadHandler().then(r => r);
    }, []);


    return (
        <>

                    { products.map( p => {
                        return (
                            <div
                                className="card m-2 shadow-lg p-3 bg-white rounded flex-fill"
                                key={p.id}
                                style={{width: "30rem", height: "20rem"}}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.description}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        )
                    })}



            {(loading && products.length < 1) && (
               <Loader />
            )}
        </>
    );
};

export default ProductsList;

import React, { useEffect } from 'react';
import ProductCard from "../components/product/product-card.component";
import usePaginatedFetch from "../hooks/paginate.hook";


const ProductsFeatured = (props) => {

    const url = Routing.generate('api_products_get_collection');

    const {loading, onLoadHandler, items, count, hasMore, nextPage} = usePaginatedFetch(url)


    useEffect(() => {
        onLoadHandler();
    }, []);


    return (
        <>
            {((loading && items.length === 0) || (loading && items.length > 0)) && (
                <div className="row">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center ">
                        <div>
                            <div className="spinner-grow text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-danger" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="row">
                {items.map(item => {
                    return <ProductCard key={item.id} img={item.imagePath}/>
                })}

            </div>
        </>
    )

};

export default ProductsFeatured;

import React, { useEffect } from 'react';
import ProductCard from "../components/product/product-card.component";
import usePaginatedFetch from "../hooks/paginate.hook";
import Loading from "../components/loader/loader.component";

const ProductsFeatured = (props) => {

    const url =  Routing.generate('api_products_get_collection');

    const {loading, onLoadHandler, items, count, hasMore} = usePaginatedFetch(url+'.jsonld')

    useEffect(() => {
        onLoadHandler();
    }, []);


    return (
        <div className="row">
            {((loading && items.length === 0) || (loading && items.length > 0)) && (
                <div className="col-12 d-flex flex-column justify-content-center align-items-center p-5">
                    <Loading />
                </div>
            )}

            {items.map(item => {
                return <ProductCard key={item.id} img={item.imagePath} product={item}/>
            })}

            {
                (hasMore && !loading) && (
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center p-5">
                        <div>
                            <button onClick={onLoadHandler} className="btn btn-block btn-outline-danger">More...</button>
                        </div>
                    </div>
                )
            }

        </div>

    )

};

export default ProductsFeatured;

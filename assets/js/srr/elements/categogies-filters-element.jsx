import React from 'react';


const CategoriesFilters = ({categories}) => {

    return (

        <div className="row">
            <div className="col-lg-8 mx-auto d-flex justify-content-around sortBtn flex-wrap">
                <a href={`/shop`} className="btn btn-black text-uppercase fliter-btn m-2" data-filter="all">all</a>
                {categories.length > 0 &&
                categories.map(c => {
                    return (
                        <a key={c.id}
                           href={`/shop?category=${c.id}`}
                           className="btn btn-black text-uppercase fliter-btn m-2" data-filter="all"
                        >
                            {c.name} ({c.countProducts})
                        </a>
                    )
                })}
            </div>
        </div>

    );
};

export default CategoriesFilters;

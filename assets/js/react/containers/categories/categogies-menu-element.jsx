import React from 'react';

const CategoriesMenu = ({categories}) => {

    return (
        <ul className="nav flex-lg-row flex-sm-row align-items-sm-center align-items-lg-start justify-content-center">
            {
                categories.map(c => {
                    return (
                        <li className="nav-item" key={c.id}>
                            <a className="nav-link active" href={`/shop?category=${c.id}`}>
                                {c.name} ({c.countProducts})
                            </a>
                        </li>
                    )
                })
            }

        </ul>
    );
};

export default CategoriesMenu;

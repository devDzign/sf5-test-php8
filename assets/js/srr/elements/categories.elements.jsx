import React from 'react';

const Categories = (props) => {


     const renderBtn = () => {

         return <a href="/boot" className="btn btn-outline-danger">Boot Page</a>
     }
    return (
        <div>
            <h1>Categories here {props.name} </h1>

            {renderBtn()}
        </div>
    );
};

export default Categories;

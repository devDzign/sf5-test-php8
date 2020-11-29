import React from 'react';

const Icon = ({icon}) => {
    return (
        <i className={`fa fa-${icon}`} aria-hidden={true}></i>
    );
};

export default Icon;

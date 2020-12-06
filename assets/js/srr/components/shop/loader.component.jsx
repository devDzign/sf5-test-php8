import React from 'react';

const Loader = () => {
    return (
        <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets">
            <div className="spinner-grow text-primary ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary  ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-success  ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-danger  ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-primary ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary  ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-success  ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-danger  ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;

import React, { useEffect } from 'react';
import CartItem from "../components/cart-item.component";

// hooks
import usePaginatedFetch from "../hooks/paginate.hook";
// components
import Title from "../components/title.components";

/**
 *
 * @param userId
 * @returns {JSX.Element}
 * @constructor
 */
const UserList = ({userId}) => {
    const {loading, onLoadHandler, users, count, hasMore, nextPage} = usePaginatedFetch('/api/users')

    useEffect(() => {
        onLoadHandler().then(r => r);
    }, []);

    return (
        <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center ">
                <div>
                    <Title count={count}/>
                </div>

                {(loading && users.length === 0) && (
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
                )}


                <div className="d-flex flex-row justify-content-between flex-wrap align-items-center">
                    {users.map(user => {
                        return <CartItem key={user.id} user={user} userId={userId}/>
                    })}
                </div>
                {
                    (hasMore && !loading) && <div>
                        <button onClick={onLoadHandler} className="btn btn-success ">Chargement des users</button>
                    </div>
                }

                {(loading && users.length > 0) && (
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
                )}
            </div>
        </div>

    );
};

export default UserList;

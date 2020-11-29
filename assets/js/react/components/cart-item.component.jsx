import React from 'react';
import axios from 'axios'
const CartItem = React.memo(({user, userId}) => {

    const onSubmitHandler =  async () => {
        const url = await Routing.generate('ping', {user: user.id});
        await axios.post(url)
    }

    return (
            <div className={(userId == user.id)? "card align-self-stretch m-5 border border-danger bg-success": "card align-self-stretch m-5 border border-success"} style={{width: "20rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{user.email}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>

                        <button  className="btn btn-primary" onClick={onSubmitHandler}>ping</button>

                </div>
            </div>
    );
});

export default CartItem;

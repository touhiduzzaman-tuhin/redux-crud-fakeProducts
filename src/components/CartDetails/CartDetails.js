import React from 'react';
import { Button } from 'react-bootstrap';
import './CartDetails.css';

const CartDetails = (props) => {
    const { removeProduct, item } = props;
    const { productName, cartId } = item;
    console.log(props);
    return (
        <div className='d-flex'>
            <div className='cart-details-area'>
                <p>{productName}</p>
                <Button variant='danger' onClick={() => removeProduct(cartId)}>Remove</Button>
            </div>
        </div>
    );
};

export default CartDetails;
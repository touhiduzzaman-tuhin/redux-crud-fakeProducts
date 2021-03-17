import React from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../../redux/product/productAction';
import CartDetails from '../CartDetails/CartDetails';

const ProductCart = ({cart, removeProduct}) => {
    console.log(cart);
    // const { id} = cart;
    return (
        <div>
            <h5>Total Select Product : {cart.length}</h5>
            {
                cart.map(item => <CartDetails key={item.cartId} item={item} removeProduct={removeProduct}></CartDetails>)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart : state.products.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct : (productId) => dispatch(removeProduct(productId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
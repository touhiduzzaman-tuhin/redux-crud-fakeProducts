import React from 'react';
import { connect } from 'react-redux';
import { addProduct, deleteProduct } from '../../redux/product/productAction';
import ProductCart from '../ProductCart/ProductCart';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Home.css';

const Home = (props) => {
    console.log(props);
    const {products, addProduct, deleteProduct} = props;
    return (
        <div className='container d-flex' align='center'>
            {/* <h3>Home Page</h3> */}
            <div className="row product-details-area">
                {
                    products.map(product => <ProductDetails key={product.id} product={product} addProduct={addProduct} deleteProduct={deleteProduct}></ProductDetails>)
                }
            </div>
            <div className='cart-area'>
                <ProductCart></ProductCart>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products : state.products.products,
        cart : state.products.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct : (name, id) => dispatch(addProduct(name, id)),
        deleteProduct : (id) => dispatch(deleteProduct(id))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Home);
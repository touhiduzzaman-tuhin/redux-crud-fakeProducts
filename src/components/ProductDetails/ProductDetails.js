import React from 'react';
import { Button } from 'react-bootstrap';
import './ProductDetails.css';

const ProductDetails = ({ product, addProduct, deleteProduct }) => {
    // console.log(product)
    const { name, price, id } = product;
    return (
        <div className='col-lg-4'>
            <div className='product-area'>
                <div>
                    <h5>Product Name : {name} - {id}</h5>
                    <small>Price : {price}</small> <br/>
                    <Button variant='success' onClick={() => addProduct(id,name)}>
                        Add Product
                    </Button>
                    &nbsp; &nbsp;
                    <Button variant='warning' onClick={() => deleteProduct(id)}>
                        Delete Product
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
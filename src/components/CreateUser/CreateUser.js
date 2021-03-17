import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { createProduct } from '../../redux/product/productAction';
import './CreateUser.css';

const CreateUser = (props) => {
    console.log(props);
    const { onAdd} = props;

    const [product, setProduct] = useState({
        name : '',
        pdId : '',
        price : ''
    })

    

    const handleBlur = e => {
        let validForm = true;
        // if(e.target.name === 'name'){
        //     validForm = /\S+@\S+\.\S+/.test(e.target.value);
        // }
        // else if(e.target.name === 'phone'){
        //     validForm = e.target.value.length > 10
        // }
        if(validForm){
            const productInfo = {...product};
            productInfo[e.target.name] = e.target.value;
            setProduct(productInfo);
        }
    }

    const handleReset = e => {
        e.preventDefault();
        setProduct({
            name : '',
            pdId : '',
            price : ''
        })
        document.getElementById('name').value = ''; 
        document.getElementById('pdId').value = ''; 
        document.getElementById('price').value = ''; 
        // history.push('/createUser')
    }

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(product);
        history.push('/');
    }


    console.log(product);

    return (
        <div align="center" className='create-user'>
            <h3 className="mb-5">Create New Product</h3>
            <form>
                <div className="form-group">
                    <input type="text" name="name" id="name" placeholder="Add Product Name" className="form-control" onBlur={handleBlur}/>
                </div>
                
                <div className="form-group">
                    <input type="text" name="pdId" id="pdId" placeholder="Add Product Id" className="form-control" onBlur={handleBlur}/>
                </div>

                <div className="form-group">
                    <input type="price" name="price" id="price" placeholder="Add Product Price" className="form-control" onBlur={handleBlur}/>
                </div>

                

                <div className="form-group">
                    <Button variant='success' onClick={handleSubmit}>
                        Add
                    </Button>
                    
                    &nbsp; &nbsp;

                    <Button variant='success' onClick={handleReset}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        productData : state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd : (name, id, price) => dispatch(createProduct(name, id, price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
import { ADD_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, REMOVE_PRODUCT } from "./productType"

export const createProduct = (product) => {
    // console.log(product);
    return {
        type : CREATE_PRODUCT,
        payload : product
    }
}

export const addProduct = (name, id) => {
    return {
        type: ADD_PRODUCT,
        payload : {
            id : id,
            name : name,
        }
    }
}

export const removeProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        payload : productId
    }
}

export const deleteProduct = (id) => {
    return {
        type : DELETE_PRODUCT,
        payload : id
    }
}
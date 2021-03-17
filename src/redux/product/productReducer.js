import productData from "../../fakeData/productData"
import { ADD_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, REMOVE_PRODUCT } from "./productType"

const initialState = {
    cart : [],
    products : productData
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            console.log(action);
            const newProduct = {
                id : action.payload.pdId,
                name : action.payload.name,
                price : action.payload.price
            }
            const products = [...state.products, newProduct];

            return {...state, products : products }

        case ADD_PRODUCT:
            console.log(action);
            const newItem = {
                productId : action.payload.name,
                productName : action.payload.id,
                cartId : state.cart.length + 1
            }
            const newCart = [...state.cart, newItem]

            return { ...state, cart : newCart }
        
        case REMOVE_PRODUCT:
            const id = action.payload;
            console.log(id);
            const remainingItem = state.cart.filter(item => item.cartId !== id)
            return { ...state, cart : remainingItem}
        
        case DELETE_PRODUCT:
            const itemId = action.payload;
            const remainingItems = state.products.filter(item => item.id !== itemId)
            return {...state, products : remainingItems}
            
        default:
            return state;
    }
}
import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT, SET_BRAND, SET_PRODUCT } from "./const"

export const initState = {
    products: [],
    brands: []
}


const reducer = (state, action) => {
    switch (action.type) {
        case SET_BRAND:
            return { ...state, brands: action.payload }
        case ADD_PRODUCT:

            return { ...state, products: [...state.products,  action.payload] };

        case SET_PRODUCT:

            return { ...state, products: action.payload }
        case EDIT_PRODUCT:


            return { ...state, products: state.products.map(product => product.id ===  action.payload.id ?  action.payload : product) };


        case REMOVE_PRODUCT:

            return { ...state, products: state.products.filter(product => product.id !== action.payload) };


    }
}
export default reducer


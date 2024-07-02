import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT, SET_BRAND, SET_PRODUCT } from "./const";

export const _set_brand = payload => {
    return {
        type : SET_BRAND,
        payload
    }
}
export const _add_product = payload => {
    return {
        type : ADD_PRODUCT,
        payload
    }
}
export const _edit_product = payload => {
    return {
        type : EDIT_PRODUCT,
        payload
    }
}
export const _set_product = payload => {
    return {
        type : SET_PRODUCT,
        payload
    }
}
export const _remove_product = payload => {
    return {
        type : REMOVE_PRODUCT,
        payload
    }
}
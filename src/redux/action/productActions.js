
import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
   return{
       type : ActionTypes.SET_PRODUCTS,
       payload : products
   }
}

export const selectedProducts = (product) => {
    return{
        type : ActionTypes.SELECTED_PRODUCTS,
        payload : product
    }
 }

 export const RemoveSelectedProducts = (product) => {
    return{
        type : ActionTypes.REMOVE_SELECTED_PRODUCTS
    }
 }

 export const deleteProduct = (product) => {
    return{
        type : ActionTypes.DELETE_PRODUCTS,
        // payload : product
    }
 }

 export const PaginationProduct = (products) => {
    return{
        type : ActionTypes.PAGINATION_PRODUCTS,
        payload : products
    }
 }

 export const addProduct = (newproduct) => {
     return{
         type : ActionTypes.ADD_PRODUCT,
         payload : newproduct
     }
 } 

 export const RemoveAddedProduct = (product) => {
    return{
        type : ActionTypes.REMOVE_SELECTED_PRODUCTS
    }
 }

 export const updateProduct = (index, note) => {
    return{
        type: ActionTypes.UPDATE_PRODUCT,
    index,
    note,
    }
 }

//  updateNote: (index, note) => ({
//     type: actionTypes.UPDATE_NOTE,
//     index,
//     note,
//   })
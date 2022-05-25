import { ActionTypes } from "../constants/action-types"

const initialState = {
    products : []
  }

export const productReducer = (state = initialState , {type,payload}) => {
     switch (type){
      case ActionTypes.SET_PRODUCTS:
          return {...state,products:payload}
      default:
          return state
      }
} 

export const paginationReducer = (state = initialState , {type,payload}) => {
  switch (type){
   case ActionTypes.PAGINATION_PRODUCTS:
       return {...state,products:payload}
   default:
       return state
   }
} 

export const SelectedProductReducer = (state = {} , {type,payload}) => {
  switch (type){
   case ActionTypes.SELECTED_PRODUCTS:
       return {...state,...payload}   
   case ActionTypes.REMOVE_SELECTED_PRODUCTS:
     return {}
   default:
       return state 
   }
}

export const UpdatedProductReducer = (state = {} , {type,payload,index, note}) => {
  // const { index, note } = action;
  switch (type){
   case ActionTypes.UPDATE_PRODUCT:
     const products = [...state.products];
    //  return {...state,...payload}   
     products[index] = note;
     return {
       products,
     }
   default:
       return state 
   }
}



export const AddProductReducer = (state = initialState , {type,payload}) => {
  switch (type){
   case ActionTypes.ADD_PRODUCT:
       return {...state,...payload}   
   case ActionTypes.REMOVE_ADDED_PRODUCT:
     return {}
   default:
       return state 
   }
}

export const Deleting = (state = {} , {type,payload}) => {
  switch (type){
    case ActionTypes.DELETE_PRODUCTS:
        return {} 
        default:
          return state 
      }
}
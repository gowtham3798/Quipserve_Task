import { combineReducers } from "redux";
import { productReducer,SelectedProductReducer,paginationReducer} from "./productReducer";

const reducers = combineReducers({
    allProducts : productReducer,  
    product : SelectedProductReducer,
    products : paginationReducer
})

export default reducers
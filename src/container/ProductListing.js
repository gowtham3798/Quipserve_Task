import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/action/productActions";

export default function ProductListing(){
    const products = useSelector((state) => state)
    
    const dispatch = useDispatch()

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(result => dispatch(setProducts(result)))
  }
  
  useEffect(getData,[])

    return(
        <div>
            <ProductComponent />
        </div>
    )
}
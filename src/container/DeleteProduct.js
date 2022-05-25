import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PaginationProduct } from "../redux/action/productActions";

export default function DeleteProduct(){
 const dispatch = useDispatch()
 const deletepost = () => {
   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  method: 'DELETE',
});
 }
   useEffect(deletepost,[])
   dispatch(PaginationProduct(deletepost))
}
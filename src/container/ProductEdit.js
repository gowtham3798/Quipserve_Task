import React, { useEffect, useState } from "react";
import { useParams,useHistory} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { RemoveSelectedProducts,updateProduct } from "../redux/action/productActions";

export function EditPosts(){
  const history = useHistory()
  const product = useSelector((state) => state.product)
  const {title , body} = product;
  const [form,setForm] = useState({title:title,body:body})

    const dispatch = useDispatch()
    const {id} = useParams()
    
    const getinfo=()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'GET'})
            .then((response) => response.json())
            .then((data) => setForm(data))
        }
        
        useEffect(() => {
            if(id && id !== "") getinfo()
            return () => {
                dispatch(RemoveSelectedProducts())
            }
        },[id])

        const editedinfo=()=>{
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
              method: 'PUT',
              body: JSON.stringify({
                id: id,
                title: form.title,
                body: form.body,
                userId: 1,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
            })
              .then((response) => response.json())
              .then((data) => dispatch(updateProduct(data)))
          }

        const handleSubmit = (e) => {
          e.preventDefault()
           editedinfo()
         }
        
        return(
          <div>
          <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Edit Post</label><br/><br/>
 
            Title<input 
            type="text" 
            class="form-control" 
           value={form.title}
            placeholder="title" 
          onChange={({ target:{value} }) =>setForm({...form,title:value})} 
            />
            <br />
 
                Summary<input 
                type='text'
                class="form-control" 
                placeholder="summary"
                value={form.body}
                onChange={({ target:{value} }) =>setForm({...form,body:value})} 
                />
            <br />
          </div>
          <button type="submit" class="btn btn-primary" onClick={() => history.push('/')}>Update</button>
         </form>
           </div>
            )
        }
        
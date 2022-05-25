import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {addProduct} from "../redux/action/productActions";


export default function AddPosts(){
      
    const [form,setForm] = useState({title:'',body:''})
    const [batches,setBatches] = useState([])

    const product = useSelector((state) => state.product)
    const dispatch = useDispatch()

   const createProduct = () => {
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title : form.title,
      body:  form.body,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((results) => setBatches([...batches,results]))
    .then(() => setForm({title:'',body:''}))
}

useEffect(createProduct,[])
dispatch(addProduct([product,...batches]))


  
    const handleSubmit = (e) => {
     e.preventDefault()
      createProduct()
    }

      return(
          <div>
              <form onSubmit={handleSubmit}>
         <div class="form-group">
           <label for="exampleInputEmail1">Add Post</label>

           <input 
           type="text" 
           class="form-control" 
          value={form.title}
           placeholder="title" 
         onChange={({ target:{value} }) =>setForm({...form,title:value})} 
           />
           <br />

               <input 
               type='text'
               class="form-control" 
               placeholder="summary"
               value={form.body}
               onChange={({ target:{value} }) =>setForm({...form,body:value})} 
               />
           <br />
         </div>
         <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
          </div>
      )
  }
import React, { useState } from "react";
import './productComponent.css'
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from "@mui/material/colors";


export default function ProductComponent(){
   

    const products = useSelector((state) => state.products.products)
    console.log(products)
    const[item,setItem] = useState([])
    

    return(
        <div>
            <div className="movie-list">
           {products.map(({title,body,id},index) =>
            <div key={id}>
            <Movies title={title} body={body} id={id} 
                  deleteButton={
                    <IconButton sx={{ color: red[500] }}  onClick={() => {
                        const deleteindex = index;
                        const remaining = products.filter(
                          (mv, ind) => deleteindex !== ind
                        );
                        console.log(products, remaining);
                        setItem(remaining);
                      }}>
                    <DeleteIcon />
                </IconButton>
                  }
                  />
            </div>
            )}
            </div>
        </div>
    )
}

function Movies({title,body,id,deleteButton}){
    const history = useHistory()

    return(
        <div>
        <div className="movie-container">
         <div className="movie-title">
            <h2><span>{id}</span>.{title}</h2>
          </div>
          <p className="movie-summary">
            {body}
          </p>
          <IconButton aria-label="delete" title="info"
             onClick={() => (history.push(`posts/${id}`))}
          ><InfoIcon />
            </IconButton>
            <IconButton title="Edit" onClick={() => (history.push(`edit/${id}`))}>
                <EditIcon />
            </IconButton>
            {deleteButton}
        </div>
   </div>
    )
}
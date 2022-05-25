import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams,useHistory } from "react-router-dom";
import { selectedProducts,RemoveSelectedProducts } from "../redux/action/productActions";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ProductDetails(){
    const history = useHistory()

    const product = useSelector((state) => state.product)
    const {title , body} = product;

    const {id} = useParams()
    const dispatch = useDispatch()
    console.log(id)

   const fetchDetails = () =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => response.json())
  .then((data) => dispatch(selectedProducts(data)));

   useEffect(() => {
      if(id && id !== "") fetchDetails()
      return () => {
         dispatch(RemoveSelectedProducts())
      }
   },[id])

    return(
        <div>
            <Card sx={{ minWidth: 500,minHeight:150,backgroundColor: '#a6a6a6' ,color: 'white' }}className="success-msg">
             <CardContent>
                 <Typography variant="h4" component="div">
                 {title}
                 </Typography>
                 <Typography variant="h5" color="text.secondary">
                 {body}
                </Typography>
             </CardContent>
             <CardActions className="success-msg-btn">
      </CardActions>
         </Card>
             <a href="#" onClick={() => history.push('/')} ><span>Back to Home</span></a>
        </div>
    )
}
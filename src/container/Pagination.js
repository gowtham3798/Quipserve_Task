import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { PaginationProduct } from "../redux/action/productActions";
import { useDispatch, useSelector } from "react-redux";

export default function Pagination(){

    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()

 const [pageCount, setpageCount] = useState(0);

 let limit = 10;

 useEffect(() => {
   const getComments = async () => {
     const res = await fetch(
       `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`
     );
     const data = await res.json();
     const total = res.headers.get("x-total-count");
     setpageCount(Math.ceil(total / limit));
     dispatch(PaginationProduct(data));
   };

   getComments();
 }, [limit]);

 const fetchComments = async (currentPage) => {
   const res = await fetch(
     `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`
   );
   const data = await res.json();
   return data;
 };

 const handlePageClick = async (data) => {
   console.log(data.selected);

   let currentPage = data.selected + 1;

   const commentsFormServer = await fetchComments(currentPage);

   dispatch(PaginationProduct(commentsFormServer));
}

   return(
       <div>      
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
   )
 }
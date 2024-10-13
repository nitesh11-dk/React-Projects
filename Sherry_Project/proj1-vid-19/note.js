

// creating axios instance 


import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
})

//  Context APi

//  1. Create Context

import React, { createContext, useState } from 'react'

export const ProductContext = createContext();
const ProductContextProvider = (props) => {
const [products ,setProducts] =useState([]);
  return (
      <ProductContext.Provider value={{products ,setProducts}} >
            {props.children}
      </ProductContext.Provider>
  )
}
export default ProductContextProvider ;

// 2. setting the context with the app or main 
import  ProductContextProvider  from './utils/ProductContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProductContextProvider>
)

//  to use the context in any componenet we use 

import React, { useContext } from 'react';
import { ProductContext } from '../utils/ProductContextProvider';

let data = useContext(ProductContext);
console.log(data)



// dearling with query strring 


// const {search , pathname} =  useLocation(); // you will get what ever written after ? with ? 
// let category = decodeURIComponent(search.split("=")[1]);
// console.log(category)
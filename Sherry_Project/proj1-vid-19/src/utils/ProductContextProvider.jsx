import React, { createContext, useEffect, useState } from 'react'
import { axiosInstance } from './axiosInstance';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

const [products ,setProducts] =useState([]);

const getProducts = async()=>{
try {
  let product = await axiosInstance.get("/products");
  setProducts(product.data)
} catch (error) {
  console.log(error)
}
}

useEffect(()=>{
  getProducts();
},[])

  return (
      <ProductContext.Provider value={{products ,setProducts}} >
            {props.children}
      </ProductContext.Provider>
  )
}

export default ProductContextProvider ;

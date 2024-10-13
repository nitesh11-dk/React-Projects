import React, { createContext, useEffect, useState } from 'react'
import { axiosInstance } from './axiosInstance';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

const [products ,setProducts] =useState(JSON.parse(localStorage.getItem('products')) || []);


  return (
      <ProductContext.Provider value={{products ,setProducts}} >
            {props.children}
      </ProductContext.Provider>
  )
}

export default ProductContextProvider ;

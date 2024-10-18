

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



//  uuid and also  nanoid


//  to set data in local storage
localStorage.setItem('products', JSON.stringify([...products, product]));
// to get data 
// JSON.parse(localStorage.getItem('products')
//  by deafult local storage ko js ka objext nahi chhaiye hota hai like js ka  objec t json format me nahi hata hai so  we use json stringify to convert it into json format





// handle change of input 
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


<div className='mb-4'>
<label className='block text-sm font-medium mb-2'>Title</label>
<input
  type='text'
  name='title'
  value={formData.title}
  onChange={handleChange}
  required
  className='w-full p-2 border rounded'
/>
</div>
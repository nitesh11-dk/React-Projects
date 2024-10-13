import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/ProductContextProvider';
import Shimmer from './productSimerUi';
import { axiosInstance } from '../utils/axiosInstance';
const Home = () => {
  let {products} = useContext(ProductContext);
let [filteredProducts ,setFilteredProducts] =useState(null)

  const {search} =  useLocation(); // you will get what ever written after ? with ? 
  let category = decodeURIComponent(search.split("=")[1]);



useEffect(() => {
  if (category != "undefined") {
    setFilteredProducts(products.filter(product => product.category == category));
   
  } else {
    setFilteredProducts(products);
  }
}, [category, products]);

  
  return (
    <div className='w-full h-screen flex bg-gray-100 text-gray-900 overflow-hidden'>
      <Nav></Nav>

{
  products ?(
    <div className='w-5/6 relative p-10 bg-gray-50 overflow-y-auto overflow-x-hidden'>
      {
        category != "undefined" ? 
          <Link to={'/'} className='absolute top-2 left-2   mb-2 py-1 px-2 text-lg font-semibold bg-blue-400 text-gray-900 rounded-lg hover:bg-blue-300'>
        Home
      </Link>:""
      }
      
      <h1 className='text-3xl font-bold text-center mb-8'>Product Showcase</h1>
      <div className='flex flex-wrap justify-center gap-8'>
        { filteredProducts && filteredProducts.map((product, i) => (
          <Link to={`/details/${product.id}`} key={i} className='w-56 h-72 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300'>
            <img
              className='rounded-lg h-48 w-full object-contain mb-4'
              src={product.image}
              alt='Product'
            />
            <div className='text-center'>
              <p className='font-semibold text-lg'>{product.title.split(' ').slice(0, 3).join(' ')}</p>
              <p className='text-gray-500'>$ {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>) : <Shimmer/> 
}
    </div>
  );
};

export default Home;

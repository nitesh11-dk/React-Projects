import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/ProductContextProvider';
import Shimmer from './productSimerUi';

const Home = () => {
  let { products } = useContext(ProductContext);
  let [filteredProducts, setFilteredProducts] = useState(null);
  let [searchQuery, setSearchQuery] = useState(''); // State for search query

  const { search } = useLocation();
  let category = decodeURIComponent(search.split("=")[1]);

  useEffect(() => {
    let newFilteredProducts;
   
    if (category !== "undefined") {
      newFilteredProducts = products.filter(product =>
        product.category === category && product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      newFilteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(newFilteredProducts);
  }, [category, products, searchQuery]); 

  return (
    <div className='w-full h-screen flex bg-gray-100 text-gray-900 overflow-hidden'>
      <Nav />

      {products ? (
        <div className='w-5/6 relative p-10 bg-gray-50 overflow-y-auto overflow-x-hidden'>
          {category !== "undefined" && (
            <Link to={'/'} className='absolute top-2 left-2 mb-2 py-1 px-2 text-lg font-semibold bg-blue-400 text-gray-900 rounded-lg hover:bg-blue-300'>
              Home
            </Link>
          )}

         <div className='flex items-center justify-center gap-12'>
         <h1 className='text-3xl font-bold text-center mb-8'>Products</h1>

<div className='mb-4'>
  <input
    type="text"
    placeholder="Search products..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className='w-full p-2 border text-black border-gray-500 rounded-lg'
  />
</div>
         </div>

          <div className='flex flex-wrap justify-center gap-8'>
            {filteredProducts && filteredProducts.map((product, i) => (
              <Link to={`/details/${product.id}`} key={i} className='w-56 h-76 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300'>
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
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Home;

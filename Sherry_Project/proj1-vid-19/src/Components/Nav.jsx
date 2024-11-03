import React, { useContext } from 'react';
import { ProductContext } from '../utils/ProductContextProvider';
import { Link } from 'react-router-dom';

const Nav = () => {
  let { products, cart } = useContext(ProductContext); 
  
  let uniqueCategories = [...new Set(products.map(product => product.category))];
  
  console.log(uniqueCategories);
  const icons = ['🟢', '🟣', '🔴', '🟢'];

 
  const cartCount = cart.length;

  return (
    <div className='w-1/6 min-h-screen bg-gradient-to-b from-blue-700 to-blue-900 text-white p-5'>
      <Link to={"/create"}>
        <button className='w-full mb-6 py-3 text-lg font-semibold bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-300'>
          Add New Product
        </button>
      </Link>

     
      <Link to={"/cart"}>
        <button className='w-full mb-6 py-3 text-lg font-semibold relative bg-green-400 text-gray-900 rounded-lg hover:bg-green-300'>
          Go to Cart <div className='w-4 h-4 p-4 absolute -top-1 -right-1  rounded-full  flex items-center justify-center bg-zinc-300 text-black'> {cartCount > 0 ? `${cartCount}` : '🛒'}</div>
        </button>
      </Link>

      <hr className='my-6 border-t-2 border-white' />
      
      <h2 className='text-xl font-bold mb-4'>Category Filter</h2>
      <ul className='space-y-4'>
        {uniqueCategories && uniqueCategories.map((category, index) => (
          <Link to={`/?category=${category}`} key={index} className='flex items-center'>
            <span className={`mr-2`}>{icons[index]}</span> {category}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Nav;

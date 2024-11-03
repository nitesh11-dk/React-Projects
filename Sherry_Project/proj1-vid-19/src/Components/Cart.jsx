import React, { useContext } from 'react';
import { ProductContext } from '../utils/ProductContextProvider';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useContext(ProductContext);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-xl">Your cart is empty!</p>
      ) : (
        <div className="flex flex-wrap gap-8">
          {cart.map((product,i) => (
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
      )}
      <Link to="/" className="mt-4 inline-block py-2 px-4 bg-blue-400 text-white rounded-lg">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Cart;

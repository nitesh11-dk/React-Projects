import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductShimmer from './ProductShimmer';
import { ProductContext } from '../utils/ProductContextProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const ProductDetail = () => {
  let { products ,setProducts } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
const Navigate = useNavigate();


  useEffect(() => {
    if (product === undefined || product === null) {
      const foundProduct = products.filter((product) => product.id == id)[0];
      setProduct(foundProduct);
    }
  }, [id, product, products]);

let deleteProduct = ()=>{
  let newProducts = products.filter((product) => product.id != id);
  setProducts(newProducts);
  localStorage.setItem('products', JSON.stringify(newProducts));
  Navigate('/');
  toast.success('Product Deleted');

}


  return product ? (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
       <Link to={'/'} className='absolute top-2 left-2   mb-2 py-1 px-2 text-lg font-semibold bg-blue-400 text-gray-900 rounded-lg hover:bg-blue-300'>
        Home
      </Link>
      <div className="relative flex bg-white shadow-2xl rounded-lg max-w-4xl">
        <div className="absolute top-2 flex justify-center items-center left-1/2 -translate-x-1/2 bg-red-600 text-white text-md font-medium px-3 py-1 rounded-lg">
          {product.category}
        </div>

        <div className="w-1/2 p-12">
          <img
            className="h-full w-full object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
            {product.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4 text-center">
            {product.description.split(' ').slice(0, 20).join(' ')}...
          </p>
          <p className="text-lg font-bold text-yellow-600 mb-4 text-center">
            Price: <span className="text-2xl">${product.price.toFixed(2)}</span>
          </p>

          {product.rating && (
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-xl font-semibold text-gray-700">
                {product.rating.rate}
              </span>
              <span className="text-sm text-gray-500">
                ({product.rating.count} reviews)
              </span>
            </div>
          )}

          <div className="flex space-x-4">
            <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300">
              Add to Cart
            </button>

            {/* Edit Button */}
            <Link to={'/edit/' + id}>
            <button className="mt-4 border-2 border-green-600 text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-100 transition duration-300">
              Edit
            </button></Link>

            {/* Delete Button */}
            <button onClick={deleteProduct} className="mt-4 border-2 border-red-600 text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-red-100 transition duration-300">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ProductShimmer />
  );
};

export default ProductDetail;

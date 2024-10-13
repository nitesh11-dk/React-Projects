import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../utils/axiosInstance';
import ProductShimmer from './ProductShimmer'

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProduct = async () => {
    try {
      let response = await axiosInstance.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching the product:', error);

    }
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    product ? ( 
      <div className='min-h-screen bg-gray-100 flex items-center justify-center p-8'>
        <div className='relative flex bg-white shadow-2xl rounded-lg max-w-4xl'>
          <div className='absolute top-2 flex justify-center items-center left-1/2 -translate-x-1/2 bg-red-600 text-white text-md font-medium px-3 py-1 rounded-lg'>
            {product.category}
          </div>

          <div className='w-1/2 p-12'>
            <img
              className='h-full w-full object-contain'
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className='w-1/2 p-8 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold mb-4 text-gray-800 text-center'>
              {product.title}
            </h1>
            <p className='text-lg text-gray-600 mb-4 text-center'>
              {product.description.split(' ').slice(0, 20).join(' ')}...
            </p>
            <p className='text-lg font-bold text-yellow-600 mb-4 text-center'>
              Price: <span className='text-2xl'>${product.price.toFixed(2)}</span>
            </p>

            <div className='flex items-center justify-center space-x-2 mb-4'>
              <span className='text-xl font-semibold text-gray-700'>
                {product.rating.rate}
              </span>
              <span className='text-sm text-gray-500'>
                ({product.rating.count} reviews)
              </span>
            </div>

            <button className='mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ) : <ProductShimmer />
  );
};

export default ProductDetail;

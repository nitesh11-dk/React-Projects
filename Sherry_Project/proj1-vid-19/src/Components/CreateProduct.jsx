import React, { useState , useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProductContext } from '../utils/ProductContextProvider';
import { useNavigate } from 'react-router-dom';
const CreateProductForm = ({ onCreate }) => {
  const Navigate = useNavigate();


    let {products ,setProducts} = useContext(ProductContext);
  const categories = [
    "men's clothing",
    'jewelery',
    'electronics',
    "women's clothing",
  ];
// console.log(products)
  
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      ...formData,
      id: uuidv4(),
      price: parseFloat(formData.price),
    };
    // Reset form
    setFormData({
      id: '',
      title: '',
      price: '',
      description: '',
      category: '',
      image: '',
    });
    
    setProducts([...products, product]);
    localStorage.setItem('products', JSON.stringify([...products, product]));
    Navigate('/')
  };

  return (
    <div className='w-full max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Create Product</h2>
      <form onSubmit={handleSubmit}>

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

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>Price</label>
          <input
            type='number'
            step='0.01'
            name='price'
            value={formData.price}
            onChange={handleChange}
            required
            className='w-full p-2 border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>Description</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
            className='w-full p-2 border rounded'
          ></textarea>
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>Category</label>
          <select
            name='category'
            value={formData.category}
            onChange={handleChange}
            required
            className='w-full p-2 border rounded'
          >
            <option value='' disabled>Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>Image URL</label>
          <input
            type='text'
            name='image'
            value={formData.image}
            onChange={handleChange}
            required
            className='w-full p-2 border rounded'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition'
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;

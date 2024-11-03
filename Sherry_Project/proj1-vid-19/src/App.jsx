import React from 'react';
import Home from './Components/Home';
import Cart from './Components/Cart'; // Import the Cart component
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import CreateProduct from './Components/CreateProduct';
import EditProductForm from './Components/EditProductForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      
      {/* Routing */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/details/:id' element={<ProductDetail />} />
        <Route path='/edit/:id' element={<EditProductForm />} />
        <Route path='/cart' element={<Cart />} /> {/* Add the route for Cart */}
      </Routes>
    </>
  );
}

export default App;

import React from 'react';
import Home from './Components/Home'
import { Routes ,Route } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import CreateProduct from './Components/CreateProduct';
import EditProductForm from './Components/EditProductForm';
function App() {
  return (
    <>

{/*      ? Routing ....  */}
       <Routes>
 <Route path='/' element={<Home/>}></Route>
 <Route path='/create' element={<CreateProduct/>}></Route>
 <Route path='/details/:id' element={<ProductDetail/>}></Route>
 <Route path="/edit/:id" element={<EditProductForm />} />
       </Routes>
       
    </>
  );
}

export default App;

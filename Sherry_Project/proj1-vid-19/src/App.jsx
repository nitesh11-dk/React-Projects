import React from 'react';
import Home from './Components/Home'
import { Routes ,Route } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <>

{/*      ? Routing ....  */}
       <Routes>
 <Route path='/' element={<Home/>}></Route>
 <Route path='/details/:id' element={<ProductDetail/>}></Route>

       </Routes>
       
    </>
  );
}

export default App;

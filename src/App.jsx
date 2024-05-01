// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'

// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/cart' element={<Cart/>}/>
//         <Route path='/order' element={<PlaceOrder/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'; // Import Cart component
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'; // Import PlaceOrder component
import Footer from './components/Footer/Footer'; // Import Footer component
import LoginPopup from './components/LoginPopup/LoginPopup';


const App = () => {

  const[showLogin,setShowLogin]=useState(false)
  return (
    <>

    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;

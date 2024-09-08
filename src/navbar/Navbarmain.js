import React from 'react';
import NavBarPart from './NavBarPart';
import './navbarcss/navbar.css'
// import Signuppage from './Signup';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Signinpage from './Signinpage';


function Navbarmain() {
  return (
    <div>
        {/* <Route path='/' element={<NavBarPart/>}></Route> */}
        {/* <Route path='/signin' element={<Signinpage/>}></Route> */}
        {/* <Route path='/signup' element={<Signuppage/>}></Route> */}
        {/* <Route path='*'></Route> */}
        <NavBarPart/>
    </div>
  );
}

export default Navbarmain;

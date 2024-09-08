import React, { useContext } from 'react';
import { Userlogin } from '../App';

function Logout() {

  const {loginuser} = useContext(Userlogin)

  // console.log(loginuser)
    
  return (
    <div>
      {loginuser ? 
      <h3 style={{textAlign:"right",padding:"79px 19px 10px 0",marginBottom:'-100px'}} >Welcome {loginuser}</h3>
      : ''}  
    </div>
  );
}

export default Logout;

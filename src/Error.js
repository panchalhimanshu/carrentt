import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    const error = {
        background : "blue", color:"white" ,position:"fixed" , top:"50%" , left:"50%" ,transform:"translate(-50% , -50%)" , padding : "25px" , borderRadius : "10px"
    }
    const link = 
    {
        textAlign : "center" , display : "block" , padding  : "15px 0", cursor : 'pointer', color:"white"}

    const htag = { background : "blue" }
  return (
    <div style={error}>
     <h2 style={htag}> 404 ! Page is not Found</h2>
     <Link style={link } to='/' > * Go Back *</Link>
    </div>
  );
}

export default Error;

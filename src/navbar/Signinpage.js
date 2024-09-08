import React, { useContext, useEffect, useState } from 'react';
import navlogo from './navimgs/logo.svg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Logout from './Logout';
import { Userlogin } from '../App';
import axios from 'axios';
import {IoArrowUndo} from "react-icons/io5"




function Signinpage() {
  

 const {setloginuser,setlogoutuser} = useContext(Userlogin)


  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const [errors,seterrors] = useState({})
  const navigate = useNavigate()
 


  
const handlesubmit = (e)=>{

  e.preventDefault();
  let validateerrors = {};

   
  if(email !== '' && password !== '')
  {
    axios.get('http://localhost:8000/users')
  .then((data)=>{
    data.data.map((v,i)=>{
      if(v.email == email)
      {
        if(v.password == password)
        {
          setlogoutuser(true)
          
          toast.success('Login Successfull', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          
            setloginuser(v.name)
            
            setTimeout(() => {
            navigate('/')
           }, 2500);
        }
      }
    })
  })
  }

  if(email == '')
  {
    validateerrors.email = "Enter Email"
  }
  if(password == '')
  {
    validateerrors.password = "Enter Password"
  }

  seterrors(validateerrors)

}



  return (
    <div className='signin_main_page'>
      <div >
        <div className='signin_logo'><img src={navlogo}/></div>
        <div className='signin-page'>
            <div> <Link to={"/"}  className='Link_tag Link_tag_color'><IoArrowUndo/>  Back To Home </Link></div>
            <h1>Login</h1>
            <p>We'll send a confirmation code to your email.</p>

            <form action="" className='form' onSubmit={handlesubmit}>
                <div>
                    <label >Email*</label>
                    <input type="text" name="" id="" onChange={(e)=>{setemail(e.target.value)}}/>
                    <span> {errors.email} </span>
                </div>
                <div>
                    <label >Password</label>
                    <input type="password" name="" id="" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <span> {errors.password} </span>
                </div>
                <p style={{color:"red"}}>Forgor Password ?</p>
                <input type="checkbox" name="" id="checkbox" /> Remember me
                <input type="submit" name="" id="signin" value={"Login"}/>
                <Link to={'/signup'} className='navigate'>Register</Link>
                <p className='signin_'>Or, log in with your email</p>
                <div className='google_signin'><i className='bx bxl-google'></i> Login in With Google</div>
                <div className='google_signin'><i className='bx bxl-facebook'></i> Login in With Facebook</div>
                <p className='signin_'>Don't have an account yet? Register</p>
                <p className='signin_'>© 2023 Dreams Rent. All Rights Reserved.</p>
            </form>
        </div>
        </div>
        <ToastContainer />
    </div>
  );
}

export default Signinpage;

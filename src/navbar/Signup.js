import React, { useEffect, useState } from 'react';
import navlogo from './navimgs/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {IoArrowUndo} from "react-icons/io5"



function Signuppage() {

   const [name,setname] = useState('')
   const [email,setemail] = useState('')
   const [xemail,setxemail] = useState('')
   const [password,setpassword] = useState('')
   const [data,setdata] = useState('')
   const [errors,seterrors] = useState({})
   const navigate = useNavigate("")



   useEffect(()=>{
    axios.get('http://localhost:8000/users')
    .then((data)=>{
      setxemail(data.data)
      })
   },[xemail, setxemail])

   const handlesubmit = (e)=>
   {  

    e.preventDefault();
    var userinp = {name,email,password}
    let validateerrors = {};

    if(name == "")
    {
      validateerrors.name = "Enter Usename"
    }
    if(email == "")
    {
      validateerrors.email = "Enter Email"
    }
    
    if(password == "")
    {
      validateerrors.password = "Enter Password"
    }

    // console.log(validateerrors)
    // console.log(Object.keys(validateerrors) )
    // console.log(Object.keys(validateerrors).length)
    

    const Emaildata = xemail.find((item)=>item.email == email)

    // console.log(dada)

     if(Emaildata)
     {
      alert("Email Id is already usage")
     }

     else
     {
      if(Object.keys(validateerrors).length === 0)
      {
      
        axios.post('http://localhost:8000/users',userinp)
        .then((res)=>{
          if(res)
          {
          toast.success('🦄 Register Successfull', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setTimeout(() => {
              navigate('/signin')
             }, 2500);
          }
        })
      }
    }

    seterrors(validateerrors)
     }

   

      
 

  //  console.log(errors)


  return (
    <div className='signin_main_page'>
      <div >
        <div className='signin_logo'><img src={navlogo}/></div>
        <div className='signin-page'>
            <div> <Link to={"/"}  className='Link_tag Link_tag_color'><IoArrowUndo/>   Back To Home </Link></div>
            <h1>Register</h1>
            <p>We'll send a confirmation code to your email.</p>

            <form action="" className='form' onSubmit={handlesubmit}>

                <div>
                    <label >Username*</label>
                    <input type="text" name="" id=""  value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    <span > {errors.name} </span>
                </div>
                <div>
                    <label >Email*</label>
                    <input type="text" name="" id="" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <span> {errors.email} </span>

                </div>
                <div>
                    <label >Password</label>
                    <input type="password" name="" id="" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <span> {errors.password} </span>
                </div>
                <input type="submit" name="" id="signin" value={"Register"}/>
                <Link to={'/signin'} className='navigate'>Login</Link>
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

export default Signuppage;

import React, { useContext, useEffect, useState } from 'react';
import { Addcar, Userlogin } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Payment.css'
function Paymentpage() {

  const {loginuser} = useContext(Userlogin)
    const {cartdata,setcartdata} = useContext(Addcar)
   const totalprice = cartdata.reduce((price,item) => price + item.quantity * item.price ,0)
   const navigate = useNavigate('')
     const [check,setcheck]= useState(false)
     const [gpay,setgpay]= useState(false)
     const [phonepay,setphonepay]= useState(false)
     const [inp,setinp]= useState('')

     useEffect(()=>{
        window.scrollTo({top:0,left:0})
      })

   const ordernow = ()=>
{

if(check)
{
    if(loginuser)
    {
     
     if(gpay)
     {
        if(inp == totalprice)
        {
            toast.success('Gpay Order Successfull', {
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
                    setcartdata([])
                navigate('/')
               }, 3000);
        }

        else
        {
            if(inp == '')
            {
                alert("pay payment")
            }
            else
            {
                alert(`pay payment $ ${totalprice}`)
            }
        }
     }

     if(phonepay)
     {
        if(inp == totalprice)
        {
            toast.success('phonepay Order Successfull', {
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
                    setcartdata([])
                navigate('/')
               }, 3000);
        }
        else
        {
            if(inp == '')
            {
                alert("pay payment")
            }
            else
            {
                alert(`pay payment $ ${totalprice}`)
            }
        }
     }


    //  else
    //  {
         
        if(gpay == false && phonepay == false)
        {
            toast.success('Order Successfull', {
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
                    setcartdata([])
                navigate('/')
               }, 3000);
        }
       

    //  }


    }

    else
    {
     alert("Please Login");
     navigate('/signin')
    }
}

else
{
    alert("select payment")
}
}

  return (
    <div className='payment_card'>

        <h2 className='payment_text'>Payment</h2>
        
<div>
  
   <div className='cash_delivery'> <input type="radio" value={check} onClick={(e)=>(setcheck(e.target.checked) , setgpay(true) , setphonepay(false))} name='check'/> Gpay  {gpay ?  <input type="text" value={inp} onChange={(e)=>{setinp(e.target.value)}} pattern='[0-9]+'/> : ''}  </div>

   <div className='cash_delivery'> <input type="radio" value={check} onClick={(e)=>(setcheck(e.target.checked), setphonepay(true) , setgpay(false))} name='check'/> Phone Pay {phonepay ?  <input type="text" value={inp} onChange={(e)=>{setinp(e.target.value)}} pattern='[0-9]+'/> : ''}</div>

   <div className='cash_delivery'> <input type="radio" value={check} onClick={(e)=>(setcheck(e.target.checked), setphonepay(false) , setgpay(false))} name='check'/> Cash On Delivery</div>

</div>

<h3>
Total Price :${totalprice}
</h3>

      <div className='item-Payment' onClick={ordernow}>Order</div>

    <ToastContainer />
      

    </div>
  );
}

export default Paymentpage;

import React, { useContext, useEffect } from 'react';
import { Addcar, Carsdata } from '../App';
import './Addcart.css'
import {MdAddCircle} from 'react-icons/md'
import {IoMdRemoveCircle} from 'react-icons/io'
import { RxCross2 } from "react-icons/rx";
import { Userlogin } from '../App';
import { useNavigate } from 'react-router-dom';
import NavBarPart from './NavBarPart';
import { ToastContainer, toast } from 'react-toastify';



const AddCart = ({addquantity,removequantity,clearquantity,deletequantity}) => {


  
  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  },[])


    // console.log(Addcartdata.name)
  const {carssetdetailes} = useContext(Carsdata)
  const {loginuser} = useContext(Userlogin)
   const {cartdata} = useContext(Addcar)
  const navigate = useNavigate('')

   const totolprice = cartdata.reduce((price,item) => price + item.quantity * item.price ,0)



const ordernow = ()=>
{
  navigate('/addcart/payment')
}








  return (
    <div className='addcart'>
    <div className='addcart-items'>
      <NavBarPart/>
      <div className='addcart-items-header'> Cart Items </div>
     {cartdata.length === 0 && <div className='addcart-items-empty'> No Items</div>}
     {cartdata.length > 0 && <button className='addcart-items-clear' onClick={clearquantity}>Clear</button>}




     <div> 
      {

      cartdata.map((item)=>(
        <div key={item.id} className='addcart-item-list'>

        <div className='addcart-img' onClick={()=>{carssetdetailes(item) ; navigate('/listing/listingdetails')}}>  <img src={item.url} alt=""  className='addcart-item-img'/></div>

           
           <div className='addcart-info'>      
          <div className='addcart-item-name'> {item.name}  <br /> Slot : {item.slot ? item.slot : "Sold Out"} </div>
          <div className='addcart-item-function'>
            <button className='addcart-item-add ' style={{cursor:"pointer"}} onClick={()=>{addquantity(item)}}><MdAddCircle/> </button>
            <button className='addcart-item-remove' style={{cursor:"pointer"}} onClick={()=>{removequantity(item)}}><IoMdRemoveCircle/> </button>
            <button className='addcart-item-delete' style={{cursor:"pointer"}} onClick={()=>{deletequantity(item)}}> <RxCross2/> </button>
          </div>
           <div className='addcart-item-price'>
           {item.quantity} * ${item.price} =  ${ item.quantity * item.price} 
           </div>
           </div>


        </div>

      ))}
   


     </div>


   


     
     
     {cartdata.length > 0 &&
      <div className='addcart-totalprice'>Total Price : 
            ${totolprice}
     </div>
     }


{cartdata.length > 0 &&
  <div className='item-Payment' onClick={ordernow}>Payment</div>
}




    </div>
    <ToastContainer />
    </div>
  );
}

export default AddCart;

import React, { useContext, useEffect, useState } from 'react';
import ListingcomonCom from './ListingcomonCom';
import NavBarPart from '../navbar/NavBarPart';
import {  Carsdata, Userlogin, Watchlistfv } from '../App';
import { Link, useNavigate } from 'react-router-dom';
import './ListingDetails.css'
import {FaCar} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';



function ListingDetails({Handleaddcart}) {

 const {Car,carssetdetailes} = useContext(Carsdata)
 const {loginuser} = useContext(Userlogin)
const navigate = useNavigate()


 const {watchlistdata,setwatchlistdata} = useContext(Watchlistfv)

 const [datawatch,setdatawatch] = useState('')

 useEffect(()=>{
  
    window.scrollTo({top:0,left:0})
 
    const datta = watchlistdata.find((item)=> item.id== Car.id)
    if(datta)
    {
      setdatawatch(datta)
    }
    else{
      setdatawatch('')
    }
    
  })

const handlewatchlist = (watchlistdatax)=>{


    if(loginuser)
    {
        const watchlistitem = watchlistdata.find((item)=>item.id == watchlistdatax.id)

        if(watchlistitem)
        {
          setwatchlistdata(watchlistdata.filter((item)=>item.id !=watchlistdatax.id))
        }
        else
        {
        setwatchlistdata([...watchlistdata,watchlistdatax])
        }

    }

    else
    {
        // alert("please Login")

        toast.error('Please Login', {
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

        // navigate('/signin')
    }


    }
 

  return (
    <div>
        <NavBarPart/>
        <h1 style={{marginTop:"80px"}}></h1>
            
<div className='car-card'>
        <div className='Listingdetails_card'>

<div className='Listingdetails_img'>
    <img src={Car.url} alt="" />
</div>

<div className='ListingList_details'>
     
     <div className='Listinglist_name_review'>
       <div>
           <p>{Car.name}</p>
           <p>Category : {Car.modelname}</p>
       </div>
       <div>
           <p className='car_review'><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i> (5.0)</p>
           <p className='Listing_carrent'> ${Car.price} <span>/ Day</span> </p>
       </div>
     </div>


<div className='Listinglist_car_info'>
   <div>{Car.gear}</div>
   <div>{Car.Speed}</div>
   <div>{Car.engine}</div>
   <div>{Car.stearing}</div>
   <div>{Car.model}</div>
   <div>{Car.sit}</div>
</div>


   <div className='Listinglist_Rent_country'>
       <div>
           <p> <FaCar/>{Car.carcompany}</p>
           <p> <i className='bx bx-location-plus'></i>{Car.country}</p>
           <p>  {
            datawatch  ? <button onClick={()=>handlewatchlist(Car)}  style={{color : "red",border:  "2px solid red"  ,padding:"5px 2px 2px 2px" , borderRadius:"8px" , boxShadow : "0 0 5px red" , transform : "scale(1.02)" ,cursor : "pointer" , fontSize:"20px",marginTop : "15px"}}><FaHeart/> </button>
          : <button onClick={()=>handlewatchlist(Car)}  style={{color : "black",border:  "2px solid black"  ,padding:"5px 2px 2px 2px" , borderRadius:"8px" , fontSize:"20px" , marginTop : "15px" , cursor : "pointer"}}><FaHeart/> </button>} </p>

       </div>

       <div>
           <div className='Listinglist_Rent'> <Link  to={'/addcart'}  className='Link_tag' onClick={()=>{Handleaddcart(Car) }}>  <i className='bx bxs-calendar-alt'></i>Rent Now </Link></div>
       </div>

   </div>



</div>

</div>
</div>


    </div>
  );
}

export default ListingDetails;

import React, { useContext, useEffect } from 'react';
import ListingcomonCom from './ListingcomonCom';
import NavBarPart from '../navbar/NavBarPart';
import { Carsdata, Watchlistfv } from '../App';
import { Link } from 'react-router-dom';
import './ListingDetails.css'
import {FaCar} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'


function Watchlist() {

    
  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  })


 const {Car} = useContext(Carsdata)
 const {watchlistdata,setwatchlistdata} = useContext(Watchlistfv)


 const Dislike = (car)=>{
    const watchlistitem = watchlistdata.find((item)=>item.id == car.id)

        if(watchlistitem)
        {
          setwatchlistdata(watchlistdata.filter((item)=>item.id !=car.id))
        }
 }


  return (
    <div>
        <NavBarPart/>
        <h1 style={{padding:"100px 0 30px 0" ,textAlign:"center"}}>WatchList</h1>
            
{watchlistdata.length > 0 ? 
watchlistdata.map((Car,idd)=>(

    <div className='watchlist-car-card' key={idd}>
        <div className='Listingdetails_card'>

<div className=' Listingdetails_img watchlist_img'>
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
       </div>

       <div>
        <div>  <button onClick={()=>Dislike(Car)}  style={{color : "red",border:  "2px solid red"  ,padding:"5px 2px 2px 2px" , borderRadius:"8px" , fontSize:"20px"}}><FaHeart/> </button></div>
           {/* <div className='Listinglist_Rent'> <Link  to={'/addcart'}  className='Link_tag' onClick={()=>{Handleaddcart(Car) }}>  <i className='bx bxs-calendar-alt'></i>Rent Now </Link></div> */}
       </div>

   </div>



</div>

</div>
</div>

))
 
: <h2 className='WatchList-noitem'>No Items</h2>

}



    </div>
  );
}

export default Watchlist;

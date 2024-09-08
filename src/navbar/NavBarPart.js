import React, { useContext, useEffect, useState } from 'react';
import navlogo from './navimgs/logo.svg'
import Signinpage from './Signinpage';
import { Link, NavLink } from 'react-router-dom';
import { Addcar, Userlogin, Watchlistfv } from '../App';
import {FaShoppingCart} from 'react-icons/fa'
import {FaList} from 'react-icons/fa'
import {FaAngleDown} from 'react-icons/fa'
import {FaAngleUp} from 'react-icons/fa'
import {LuLogIn} from 'react-icons/lu'



import {ImCross} from 'react-icons/im'
import { ToastContainer, toast } from 'react-toastify';




function NavBarPart() {
const [show,setshow] =  useState(false)
const [list,setlist] =  useState(false)
const {logoutuser,setlogoutuser,setloginuser}= useContext(Userlogin)
const {cartdata} = useContext(Addcar)
const {watchlistdata,setwatchlistdata} = useContext(Watchlistfv)

const  handleclick = ()=>{
    setshow(!show)
  }

  const Logoutuser = ()=>{

    toast.success('Logout', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

    setTimeout(()=>{
      setloginuser('')
      setwatchlistdata([])
      setlogoutuser(false)
    },2000)
  }



  
  return (
    <div>
      <nav>
        <div className='navbar'>
            <div className='logo-btn'>
                <div className='navbtn' onClick={handleclick}> <FaList/></div>
                <div className='navlogo'><img src={navlogo}/></div>
            </div>

            <div className='navsec'>
                <ul id='nav' className={(show) ? "#nav active" : "#nav"}>
                    <li id='nav-close-btn' onClick={handleclick}> <img src={navlogo} height={30} onClick={()=>{window.location.reload()}}/> <span><ImCross/></span></li>
                    <li><NavLink to={'/'} className='Link_tag_text nav_link_text'>Home</NavLink> </li>

                    

                    <li className='Listing'>Listing<FaAngleDown/>
                     <div className='Listing-list'>
                        <div> <Link to={'/listing/listinggrid'} className='Link_tag_text'>Listing Grid</Link></div>
                        <div> <Link to={'/listing/listinglist'} className='Link_tag_text'>Listing List</Link></div>
                        <div> <Link to={'/watchlist'} className='Link_tag_text'>WatchList</Link></div>
                     </div>
                    </li>


                    <li className='Listing_hiden' onClick={()=>setlist(!list)}>Listing {list ? <FaAngleUp/> : <FaAngleDown/>}</li>
                    { 
                    list ? <div className='list'>
                    <li> <NavLink to={'/listing/listinggrid'} className='Link_tag_text'>Listing Grid</NavLink></li>
                    <li> <Link to={'/listing/listinglist'} className='Link_tag_text'>Listing List</Link></li>
                    <li></li>
                    <li> <Link to={'/watchlist'} className='Link_tag_text'>WatchList</Link></li>
                    </div> : ""
                    }


                    <li>Pages <FaAngleDown/></li>
                    <li>Blog <FaAngleDown/></li>
                    <li>Contact</li>
                    <ul className="navsec_signbtn">
                     <li className='sign_in'><Link to={'/signin'} className='Link_tag'> <i className='bx bx-lock'></i>Sign-in</Link></li>
                     <li className='sign_up'><Link to={'/signup'}  className='Link_tag'><i className='bx bx-lock'></i>Sign-up</Link></li>
                    </ul>
                    <li> <Link to={'/addcart'} className='Addcart-product'> <FaShoppingCart/> {cartdata.length > 0 ? <span className='addcart-qua-number'>{cartdata.length}</span>  : '' }</Link> </li>
                </ul>
            </div>

            <div className='Sign_in_up_btn'>

              {logoutuser ? 
               <button className='sign_up' onClick={Logoutuser}> <Link to={'/'} className='Link_tag'> Logout</Link></button>
               :
               <div>
               <button className='sign_in'> <Link to={'/signin'}  className='Link_tag'> <i className='bx bx-user'></i>  Sign-in  </Link></button>
               <button className='sign_up'> <Link to={'/signup'} className='Link_tag'> <i className='bx bx-lock'></i>Sign-up</Link></button>
               </div>
              }

            

            </div>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
}

export default NavBarPart;




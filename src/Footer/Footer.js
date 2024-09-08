import React from 'react';
import './Footer.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      
      <div className='footer-main'>

        <div>
            <h2>About Company</h2>
            <div className='footer-border'>.</div>
            <p>Our Company</p>
            <p>Shop Toyota</p>
            <p>Dreamsrentals USA </p>
            <p>Dreamsrentals Worldwide </p>
            <p>Dreamsrentals Racing </p>
            <p>Dreamsrentals Racing </p>
            <p>Virtual Auto Show </p>
        </div>

        <div>
        <h2>Vehicles Type</h2>
        <div className='footer-border'>.</div>
        <p>All Vehicles </p>
        <p>SUVs </p>
        <p>Trucks </p>
        <p> Cars</p>
        <p>Crossovers </p>
        <p>Electrified Vehicles </p>
        <p>Hybrids </p>
        </div>

        <div>
            <h2>Quick links</h2>  
            <div className='footer-border'>.</div>
            <p> My Account</p>
            <p>Champaigns </p>
            <p>Dreamsrental Dealers </p>
            <p>Deals and Incentive </p>
            <p> Financial Services</p>
            <p>Dreamsrental Insurance </p>
            <p> Dreamsrental Care</p>
        </div>

        <div className='footer-contact'>
            <h2>Contact Info</h2>
            <div className='footer-border'>.</div>
            <div><FaPhoneVolume className='footer-phonicon'/> <span>+91 8490948420 </span></div>
            <div> <MdOutlineMailOutline  className='footer-phonicon'/> <span>panchalhimanshu660@gmail.com</span> </div>
            <div className='social_media_icons'>  <FaWhatsapp className='social_media_icon '/> <FaInstagram className='social_media_icon '/> <TfiFacebook className='social_media_icon '/> <FaTelegramPlane className='social_media_icon '/> </div>
        </div>


      </div>

    </div>
  );
}

export default Footer;

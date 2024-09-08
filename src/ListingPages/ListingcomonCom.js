import React from 'react';
import { Link } from 'react-router-dom';

function ListingcomonCom() {
  return (
    <div>

       <div className='carlisting'>
        <h1>Car Listings</h1>
        <p className='path_listing'> <Link to={'/'} className='Link_tag'> Home </Link>/ Listings / <span>Car Listings</span></p>
      </div>

    </div>
  );
}

export default ListingcomonCom;

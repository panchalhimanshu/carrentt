import React, { useEffect, useRef, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";


function Scrollbtn() {
    const gotobtn = ()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }


const [scrollbtnshow,scrollbtnhide] = useState(false)


    const onscrollx = ()=>{
      
    //  console.log(document.documentElement.scrollTop)

        if(document.documentElement.scrollTop  > 200)
        {
            scrollbtnhide(true)
        }
        else
        {
            scrollbtnhide(false)
        }
        
    }

    useEffect(()=>{
      window.addEventListener("scroll", onscrollx)
    },[])
  return (
    <div>
        {
            scrollbtnshow ?    <div onClick={gotobtn} className='scrollbtn' style={{cursor:"pointer"}} ><h1>
                <FaArrowUp/></h1></div> : 
            ''
        }
    </div>
  );
}

export default Scrollbtn;

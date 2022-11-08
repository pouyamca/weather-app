import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'
import { useSelector } from 'react-redux';


export const CardTopBar = () => {
    let city = useSelector((state: any) => state.data.city)
  

    
    return(


        <>
            <div className='card-top-bar-layout'>
                <div className="d-flex justify-content-start">
                            <div className="h-100 w-25 mt-4 d-flex align-items-center justify-content-center ">
                                <h4>
                                    {city} 
                                </h4>
                            </div>
                           
                </div> 
            </div>
            
        </>
 
);}

export default CardTopBar;
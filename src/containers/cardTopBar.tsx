import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'
import { useSelector } from 'react-redux';


export const CardTopBar = () => {
    let city = useSelector((state: any) => state.data.city)
    let status = useSelector((state: any) => state.data.currentStatus)


    
    return(


        <>
            <div className='card-top-bar-layout'>
                <div className="d-flex flex-row justify-content-between">
                            <div className="h-100 w-50 mt-3 d-flex align-items-center justify-content-center" >
                                <h4>
                                    {city} 
                                </h4>
                            </div>
                            <div className="h-100 w-50 d-flex align-items-center justify-content-center" >
                                  <img src={status?.icon}  /> 
                            </div>
                            <div className="h-100 w-100 mt-4 d-flex align-items-center justify-content-center" >
                               <h6>
                                    {status?.timer}
                                </h6>
                            </div>
                           
                </div> 
            </div>
            
        </>
 
);}

export default CardTopBar;
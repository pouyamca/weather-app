import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'


export const CardTopBar = () => {
    const clickBtn = () =>{
        alert('ok')
    }
    return(


        <>
            <div className='card-top-bar-layout'>
                <div className="d-flex justify-content-start">
                            <div className="h-100 w-25 mt-4 d-flex align-items-center justify-content-center ">
                                <h4>
                                    london
                                </h4>
                            </div>
                           
                </div> 
            </div>
            
        </>
 
);}

export default CardTopBar;
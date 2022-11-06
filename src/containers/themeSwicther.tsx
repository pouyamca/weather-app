import React from 'react';
import { Button } from 'react-bootstrap';
import themeIcon from '../assets/icons/day-and-night.png'
export const ThemeSwicther = () => {
     
    return(


        <>
            <div className='theme-swicther-layout'>
                <Button className='theme-swicther-icon-btn' >
                      <img src={themeIcon} /> 
                </Button> 
              
               
            </div>
            
        </>
 
);}

export default ThemeSwicther;
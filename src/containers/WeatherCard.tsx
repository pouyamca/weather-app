import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'
import CardTopBar from './cardTopBar';
import CardBody from './cardBody';
import CardFooter from './cardFooter';
export const WeatherCard = () => {
    const clickBtn = () =>{
        alert('ok')
    }
    return(


        <>
             <Stack gap={3}>
                <div className='weather-card-wrapper p-2'>
                
                    <div className='weather-card-layout'>
                    
                            <CardTopBar />
                            <CardBody />
                            <CardFooter />
                    
                    </div>
                
                </div>
            </Stack>
        </>
 
);}

export default WeatherCard;
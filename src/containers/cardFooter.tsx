import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { GetForecast } from '../store/Actions';


export const CardFooter = () => {
    const dispatch: Dispatch<any> = useDispatch() 
    let status = useSelector((state: any) => state.data.currentStatus)
    let cityLat  = useSelector((state: any) => state.data.cityLat)
    let cityLong = useSelector((state: any) => state.data.cityLong)

    useEffect(()=>{ 
        let querytString = '/data/2.5/forecast?lat='+cityLat+'&lon='+cityLong+'&units=metric';
        dispatch(GetForecast(querytString))
  
    },[cityLat, cityLong])


    return (
 
            <div className='card-footer-layout'>
              
                 <ButtonGroup aria-label="Basic example">

                        <Button variant="outline-secondary">today</Button>
                        <Button variant="outline-secondary">2-2-2</Button>
                        <Button variant="outline-secondary">3-3-3</Button>
                        <Button variant="outline-secondary">4-4-4</Button>
                        <Button variant="outline-secondary">5-5-5</Button>
                        <Button variant="outline-secondary">6-6-6</Button>
                        <Button variant="outline-secondary">7-7-7</Button>
                </ButtonGroup>
 
            </div>
            
       
 
);
}

export default CardFooter;
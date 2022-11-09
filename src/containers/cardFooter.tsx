import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap';
import seasrcIcon from '../assets/icons/search.png'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { forecastSelectedItem, GetForecast } from '../store/Actions';

type btnEventType = React.MouseEvent<HTMLButtonElement>;

export const CardFooter = () => {
    const dispatch: Dispatch<any> = useDispatch() 
    let status = useSelector((state: any) => state.data.currentStatus)
    let forecast = useSelector((state: any) => state.data.forecastStatus)

    let cityLat  = useSelector((state: any) => state.data.cityLat)
    let cityLong = useSelector((state: any) => state.data.cityLong)

    useEffect(()=>{ 
        let querytString = '/data/2.5/forecast?lat='+cityLat+'&lon='+cityLong+'&units=metric';
        dispatch(GetForecast(querytString))
  
    },[cityLat, cityLong])

    const dayClickBtnHandler = (e: btnEventType, selectedTime: number | string ) =>{
        let tempItem =  forecast.find(item => item.timer === selectedTime)
        dispatch(forecastSelectedItem(tempItem))
    }
 
    console.log(forecast)

    return (
 
            <div className='card-footer-layout'>
              
                 <ButtonGroup aria-label="Basic example">

                 {forecast.map((item: any)=>{
                        <Button variant="outline-secondary" onClick={(e: btnEventType) => {dayClickBtnHandler(e, item.dt)}}>{item.dt_txt} </Button>
                    }
                   )
                  }
                        {/* <Button variant="outline-secondary">today</Button>
                        <Button variant="outline-secondary">2-2-2</Button>
                        <Button variant="outline-secondary">3-3-3</Button>
                        <Button variant="outline-secondary">4-4-4</Button>
                        <Button variant="outline-secondary">5-5-5</Button>
                        <Button variant="outline-secondary">6-6-6</Button>
                        <Button variant="outline-secondary">7-7-7</Button> */}
                </ButtonGroup>
 
            </div>
            
       
 
);
}

export default CardFooter;
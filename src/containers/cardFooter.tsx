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
        let tempItem =  forecast.find(item => item.timerUnix === selectedTime)
         
        dispatch(forecastSelectedItem(tempItem))
    }
 
    

    return (
 
            <div className='card-footer-layout'>
              
                 <ButtonGroup aria-label="Basic example">

                  {forecast.map((item: any)=>{
                         return(
                              <Button variant="outline-secondary" key={item.timerUnix} onClick={(e: btnEventType) => dayClickBtnHandler(e, item.timerUnix) }>{item.timer} </Button>
                        )
                    })
                  }  
                       
                </ButtonGroup>
 
            </div>
            
       
 
);
}

export default CardFooter;